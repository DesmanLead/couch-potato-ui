import * as $ from 'jquery'
import * as React from 'react'
import { Component } from 'react'

interface ICheckInfoState {
    checkInfo: {
        startDate?: string;
        endDate?: string;
    }
}

export default class CheckInfo extends Component<{}, ICheckInfoState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            checkInfo: {},
        }
    }

    public componentDidMount() {
        this.loadCheckInfo();
    }

    public render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">Last check</div>
                <div className="panel-body">
                    <div>Start date: {this.state.checkInfo.startDate}</div>
                    <div>End date: {this.state.checkInfo.endDate}</div>
                </div>
            </div>
        );
    }

    private loadCheckInfo() {
        $.ajax({
            url: "http://localhost:4991/couch-potato/itemList/lastCheck"
        }).then(data => {
            this.setState({checkInfo: data})
        });
    }
}
