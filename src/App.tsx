import * as $ from 'jquery'
import * as React from 'react';
import './App.css';
import AddModal from './components/add-modal.component'
import AddButton from './components/add.button'
import CheckInfo from './components/check-info.component'
import CheckButton from './components/check.button'
import TorrentsTable from './components/torrents-table.component'
import ITorrent from './entities/torrent'

interface IAppState {
    torrents: ITorrent[];
}

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            torrents: [],
        }
    }

    public componentDidMount() {
        this.loadTorrentItems();
    }

    public render() {
        return (
            <div>
                <div className="form-inline">
                    <div className="col-sm-8">
                        <AddButton /> <CheckButton />
                    </div>
                    <div className="col-sm-4">
                        <CheckInfo />
                    </div>
                </div>
                <AddModal />
                <TorrentsTable torrents={this.state.torrents} />
            </div>);
    }

    private loadTorrentItems() {
        $.ajax({
            url: "http://localhost:4991/couch-potato/itemList"
        }).then(data => {
            this.setState({ torrents: data })
        });
    }
}

export default App;
