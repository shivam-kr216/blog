import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RowData extends Component {
    render() {
        const { post, onDeleteClick } = this.props;
        return (
            <>
                <tr key={post.id}>
                    <td data-label="Title">{post.title}</td>
                    <td data-label="Description">{post.description}</td>
                    <td data-label="Review">{post.review}</td>
                    <td data-label="Actions">
                        <Link to={`/edit/${post.id}`}>
                            <button className="btn orange circular">Update</button>
                        </Link>
                        <button onClick={onDeleteClick} className="btn red circular">Delete</button>
                    </td>
                </tr>
            </>
        )
    }
}

export default RowData;