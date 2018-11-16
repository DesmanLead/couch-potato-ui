import * as React from 'react'
import { Component } from 'react'
import TorrentForm from './torrent-form.component'

export default class AddModal extends Component {
    public render() {
        return (
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add torrent item</h4>
                        </div>
                        <div className="modal-body">
                            <TorrentForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
