import React, { Component } from 'react';
import Buttons from './Buttons';
import TextFields from './TextFields';

class AddBlog extends Component {
    
    constructor(props) {
        super(props);
        this.addClick = this.addClick.bind(this);
        this.cancelClick = this.cancelClick.bind(this);
    }

    addClick() {
        
    }

    cancelClick() {
        // let navigate = useHistory();
        // navigate('/');
    }

    render() {
        return (
            <div className='container'>
                <TextFields />
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

export default AddBlog;