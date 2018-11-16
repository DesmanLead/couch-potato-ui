import * as React from 'react'
import { Component } from 'react'

export default class AddButton extends Component {
    public render() {
        return <button type="button" className="btn btn-lg btn-success" data-toggle="modal"
                       data-target="#myModal">Add</button>
    }
}
