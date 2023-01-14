import React from 'react';
import Row from './Row';

function TextFields({ title, description, review, onchange }) {
    return (
        <>
            <Row>
                <div className="col-25">
                    <label htmlFor="title">Title</label>
                </div>
                <div className="col-75">
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={onchange}
                    />
                </div>
            </Row>
            <Row>
                <div className="col-25">
                    <label htmlFor="description">Description</label>
                </div>
                <div className="col-75">
                    <textarea id="description" name="description" placeholder="Description.."
                        style={{ height: "180px" }} value={description} onChange={onchange}>
                    </textarea>
                </div>
            </Row>
            <Row>
                <div className="col-25">
                    <label htmlFor="review">Review</label>
                </div>
                <div className="col-75">
                    <textarea id="review" name="review" placeholder="Review.."
                        style={{ height: "180px" }} value={review} onChange={onchange}>
                    </textarea>
                </div>
            </Row>
        </>
    )
}

export default TextFields;