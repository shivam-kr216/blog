const initialState = {
    posts: []
};

function blogReducer(state = initialState, action) {

    switch (action.type) {
        case "ADD_POST": return {
            ...state,
            posts: [action.payload, ...state.posts]
        };
        case "DELETE_POST": return {
            ...state,
            posts: state.posts.filter((post) => {
                return post.id !== action.payload
            })
        };
        case "UPDATE_POST": return {
            ...state,
            posts: state.posts.map(post => {
                return post.id === action.payload.id ? action.payload : post
            })
        }
        default: return state;
    }
}

export default blogReducer;
