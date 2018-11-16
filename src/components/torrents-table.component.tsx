import * as React from 'react'
import { Component } from 'react'
import ITorrent from '../entities/torrent'
import TorrentItem from './torrent-item.component'

interface ITorrentsTableProps {
    torrents: ITorrent[];
}

export default class TorrentsTable extends Component<ITorrentsTableProps> {
    public render() {
        const rows: JSX.Element[] = [];
        this.props.torrents.forEach(torrent => {
            rows.push(<TorrentItem torrent={torrent} key={torrent.id}/>)
        });
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th className="col-md-1">Actions</th>
                    <th className="col-md-5">Name</th>
                    <th>Status</th>
                    <th>Last Update</th>
                    <th>Error Text</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}
