import React, { Component } from 'react';
import Buttons from './Buttons';

class RowData extends Component {
    render() {
        const { post, onUpdateClick, onDeleteClick } = this.props;
        return (
            <>
                <tr key={post.id}>
                    <td data-label="Title">{post.title}</td>
                    <td data-label="Description">{post.description}</td>
                    <td data-label="Review">{post.review}</td>
                    <td data-label="Actions">
                        <Buttons 
                            handleClick1={onUpdateClick} 
                            text1="Update"
                            handleClick2={onDeleteClick}
                            text2="Delete"
                        />
                    </td>
                </tr>
            </>
        )
    }
}

export default RowData;