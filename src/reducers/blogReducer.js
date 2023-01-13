const initialState = {
    posts: [
        // {
        //     id: 1,
        //     title: 'Dummy',
        //     description: 'Have a nice day!',
        //     review: 'Excellent word!'
        // }
    ],
    post: {}
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
        default: return state;
    }
}

export default blogReducer;
