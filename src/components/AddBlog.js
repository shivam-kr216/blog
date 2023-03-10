import React, { Component } from 'react';
import Buttons from './Buttons';
import TextFields from './TextFields';
import { addBlog } from '../action/blog';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import withRouter from '../higher order components/withRouter';

class AddBlog extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            review: '',
            errorMessage: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addClick = this.addClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async addClick() {
        const {title, description, review} = this.state;
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
        await this.props.dispatch(addBlog({title, description, review, id: uuid()}));
        this.setState({
            title: '',
            description: '',
            review: '',
            errorMessage: ''
        });
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
                    handleClick1={this.addClick} 
                    text1="Add"
                    handleClick2={this.cancelClick}
                    text2="Cancel"
                />
            </div>
        )
    }
}

export default withRouter(connect(null, null)(AddBlog));