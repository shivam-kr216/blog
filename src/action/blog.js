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

export function updateBlog(blogPost) {
    return dispatch => {
        dispatch({
            type: "UPDATE_POST",
            payload: blogPost
        });
    }
}