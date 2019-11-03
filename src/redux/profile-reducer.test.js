import profileReducer, {addPost, deletePost} from "./profile-reducer";

it('new post should be added', () => {
    // 1. test data
    let action = addPost("first test in my life");
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you' },
            { id: 2, message: 'Its my first post' }
        ],
    };
    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.postsData.length).toBe(3)
});

it('after deleting length should be decrement', () => {
    // 1. test data
    let action = deletePost(2);
    let state = {
        postsData: [
            { id: 1, message: 'Hi, how are you' },
            { id: 2, message: 'Its my first post' }
        ],
    };
    // 2. action
    let newState = profileReducer(state,action);

    // 3. expectation
    expect(newState.postsData.length).toBe(1)
});



