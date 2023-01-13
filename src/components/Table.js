import React, { Component } from "react";

class Table extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Review</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.children }
                </tbody>
            </table>
        )
    }
}

export default Table;