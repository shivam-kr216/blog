import React, { Component } from 'react';
import withRouter from '../higher order components/withRouter';
import { updateBlog } from '../action/blog';
import { connect } from 'react-redux';
import TextFields from './TextFields';
import Buttons from './Buttons';

class EditBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            description: '',
            review: '',
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateClick = this.updateClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

    componentDidMount() {
        const { params, posts } = this.props;
        const filteredPost = posts.find(post => post.id === params.id);
        const {title, description, review}=filteredPost;
        this.setState({
            title, description, review
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async updateClick() {
        const { title, description, review } = this.state;
        const { id } = this.props.params;
        if(title===''){
            this.setState({
                errorMessage: 'Title is missing. Please enter title'
            })
            return;
        }

        if(description===''){
            this.setState({
                errorMessage: 'Description is missing. Please enter description'
            })
            return;
        }
        await this.props.dispatch(updateBlog({ id, title, description, review }));
        this.props.navigate('/');
    }

    cancelClick() {
        this.props.navigate('/');
    }

    render() {
        const { title, description, review, errorMessage } = this.state;
        return (
            <div className='container'>
                {
                    errorMessage && errorMessage !== '' ? <p>{errorMessage}</p> : null
                }
                <TextFields
                    title={title}
                    description={description}
                    review={review}
                    onchange={this.handleChange}
                />
                <Buttons
                    handleClick1={this.updateClick}
                    text1="Update"
                    handleClick2={this.cancelClick}
                    text2="Cancel"
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.blogReducer.posts

    }
}

export default withRouter(connect(mapStateToProps, null)(EditBlog));