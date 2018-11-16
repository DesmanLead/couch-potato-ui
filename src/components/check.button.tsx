import * as $ from 'jquery'
import * as React from 'react'
import { Component } from 'react'

export default class CheckButton extends Component {
    public render() {
        return <button type="button" className="btn btn-lg btn-primary" onClick={this.handleCheckAll}>Check
            Now</button>;
    }

    private handleCheckAll() {
        $.ajax({
            url: 'http://localhost:4991/couch-potato/itemList/checkAll',
            type: 'POST',
            success: result => {
            },
            error: (xhr, ajaxOptions, thrownError) => {
                alert(xhr.responseJSON.message);
            }
        });
    }
}
