
function posts(state = {}, action) {
    console.log(`Received ${action.type}`, state);
    switch (action.type) {
        case "ADD_POST":
            console.log(action.payload);
            return {
                ...state,
                posts: [action.payload.post,...state.posts]
            }
        case "SHOW_POST_FORM":
            return {
                ...state,
                showPostForm: !state.showPostForm
            }
        case "UP_VOTE":
            var posts = Object.assign([], state.posts);
            console.log(posts);
            var post = posts.find((post) => {
                return post.id == action.postId;
            });
            post.votes++;
            posts.sort((a, b) => {
                return (b.votes - a.votes);
            });
            return {
                ...state,
                posts
            };
        case "DOWN_VOTE":
            var posts = Object.assign([],state.posts);
            console.log(posts);
            var post = posts.find((post) => {
                return post.id == action.postId;
            });
            post.votes--;
            posts.sort((a, b) => {
                return (b.votes - a.votes);
            });
            return {
                ...state,
                posts
            };

        default:
            return state;
    }
}

export default posts;