import * as $ from 'jquery'
import * as React from 'react'
import { Component } from 'react'
import ITorrent from '../entities/torrent'

interface ITorrentItemProps {
    torrent: ITorrent;
}

interface ITorrentItemState {
    torrent: ITorrent;
    display: boolean;
    checking: boolean;
    rowStyle: string;
}

export default class TorrentItem extends Component<ITorrentItemProps, ITorrentItemState> {
    private static getStyle(torrent: ITorrent): string {
        let rowStyleValue;
        switch (torrent.status) {
            case "NEW":
                rowStyleValue = 'info';
                break;
            case "UNCHANGED":
                rowStyleValue = 'warning';
                break;
            case "ERROR":
            case "DOWNLOAD_ERROR":
                rowStyleValue = 'danger';
                break;
            case "DOWNLOADED":
                rowStyleValue = 'success';
                break;
            default:
                rowStyleValue = '';
        }
        return rowStyleValue;
    }

    public render() {
        const torrent = this.state.torrent;
        if (this.state.display === false) {
            return null;
        }
        else {
            return (
            <tr className={this.state.rowStyle}>
                <td>
                    <div className="btn-group-vertical btn-group-lg">
                        <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                        <button className="btn btn-primary" onClick={this.handleCheck}>Check</button>
                    </div>
                </td>
                <td><a href={torrent.link}>{torrent.name}</a></td>
                <td>{this.state.checking ?
                    <div className="loader"/> :
                    <h4><span className="label label-default">{torrent.status}</span></h4>
                }
                </td>
                <td>{torrent.updateDate}</td>
                <td>{torrent.errorText}</td>
            </tr>
            );
        }
    }

    protected getInitialState() {
        return {
            display: true,
            torrent: this.props.torrent,
            rowStyle: TorrentItem.getStyle(this.props.torrent),
            checking: false
        };
    }

    private handleDelete = () => {
        $.ajax({
            url: 'http://localhost:4991/couch-potato/itemList/' + this.state.torrent.id,
            type: 'DELETE',
            success: result => {
                this.setState({display: false});
            },
            error: (xhr, ajaxOptions, thrownError) => {
                alert(xhr.responseJSON.message);
            }
        });
    }

    private handleCheck = () => {
        this.setState({checking: true});
        $.ajax({
            url: 'http://localhost:4991/couch-potato/itemList/' + this.state.torrent.id + '/check',
            type: 'POST',
            success: updatedTorrent => {
                this.updateTorrent(updatedTorrent);
            },
            error: (xhr, ajaxOptions, thrownError) => {
                alert(xhr.responseJSON.message);
            }
        });
    }

    private updateTorrent(updatedTorrent: ITorrent) {
        this.setState({
            torrent: updatedTorrent,
            rowStyle: TorrentItem.getStyle(updatedTorrent),
            checking: false
        })
    }
}
  