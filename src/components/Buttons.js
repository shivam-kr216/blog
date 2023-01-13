import React, { Component } from 'react';

class Buttons extends Component {
    render() {
        const { handleClick1, text1, handleClick2, text2 } = this.props;
        return (
            <>
                <button onClick={handleClick1} className="btn orange circular">{text1}</button>
                <button onClick={handleClick2} className="btn red circular">{text2}</button>
            </>
        )
    }
}

export default Buttons;