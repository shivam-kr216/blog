import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to='/'><h2>Blog</h2></Link>
                <div className="header-right">
                    <Link to='/add'><b>Add</b></Link>
                </div>
            </div>
        )
    }
}

export default Header;