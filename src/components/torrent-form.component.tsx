import * as $ from 'jquery'
import * as React from 'react'
import { ChangeEvent, Component } from 'react'

interface ITorrentFormState {
    inputValue: string;
}

export default class TorrentForm extends Component<{}, ITorrentFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    public render() {
        return (
            <form>
                <div className="form-group">
                    <label>Enter torrent source link</label>
                    <input type="link" className="form-control" id="link" value={this.state.inputValue}
                           onChange={this.updateInputValue}/>
                </div>
                <button type="submit" className="btn btn-success" onClick={this.handleAdd}>Add</button>
            </form>
        );
    }

    private handleAdd() {
        $.ajax({
            url: 'http://localhost:4991/couch-potato/itemList',
            type: 'POST',
            contentType: 'application/json',
            data: '{"link": "' + this.state.inputValue + '"}',
            success: result => {
                alert("Success added");
            },
            error: (xhr, ajaxOptions, thrownError) => {
                alert(xhr.responseJSON.message);
            }
        });
    }

    private updateInputValue = (evt: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: evt.target.value,
        });
    }
}
  