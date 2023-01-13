import Row from './Row';

function TextFields() {
    return (
        <>
            <Row>
                <div className="col-25">
                    <label htmlFor="title">Title</label>
                </div>
                <div className="col-75">
                    <input type="text" id="title" name="title" placeholder="Title" required={true} />
                </div>
            </Row>
            <Row>
                <div className="col-25">
                    <label htmlFor="description">Description</label>
                </div>
                <div className="col-75">
                    <textarea id="description" name="description" placeholder="Description.."
                        style={{ height: "180px" }} required={true}></textarea>
                </div>
            </Row>
            <Row>
                <div className="col-25">
                    <label htmlFor="review">Review</label>
                </div>
                <div className="col-75">
                    <textarea id="review" name="review" placeholder="Review.."
                        style={{ height: "180px" }}></textarea>
                </div>
            </Row>
        </>
    )
}

export default TextFields;