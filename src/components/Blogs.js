import React, { Component } from 'react';
import { deleteBlog } from '../action/blog';
import { connect } from 'react-redux';
import Table from './Table';
import RowData from './RowData';

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }

    onDeleteClick(id) {
        this.props.dispatch(deleteBlog(id));
    }

    render() {
        const { posts } = this.props;
        const renderPost = posts?.map((post) => {
            return (
                <RowData
                    key={post.id}
                    post={post}
                    onDeleteClick = {() => this.onDeleteClick(post.id)}
                />
            )
        })
        return (
            <div className='container'>
                {
                    posts && posts.length > 0 ? <Table>{ renderPost }</Table> : <h1 className='empty'>No Posts! Create a Post</h1>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.blogReducer.posts
    }
}

export default connect(mapStateToProps, null)(Blogs);