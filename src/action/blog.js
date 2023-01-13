export function addBlog(blogPost) {
    return dispatch => {
        dispatch({
            type: "ADD_POST",
            payload: blogPost
        });
    }
}

export function deleteBlog(id) {
    return dispatch => {
        dispatch({
            type: "DELETE_POST",
            payload: id
        });
    }
}