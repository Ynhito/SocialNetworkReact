let reRenderEntireTree = () => {
  console.log("state changed")
}

let state = {
  profile: {
    postsData: [
      { id: 1, message: 'Hi, how are you' },
      { id: 2, message: 'Its my first post' }
    ],
    newPostText: ''
  },
  messages: {
    dialogsData: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Julia' },
      { id: 3, name: 'Victor' },
      { id: 4, name: 'Sasha' }
    ],
    messagesData: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'Privet' },
      { id: 3, message: 'Aloha' }

    ]
  },
  friends: {
    friendsData: [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Julia' },
      { id: 3, name: 'Victor' }
    ]
  }
}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profile.newPostText,
  };
  state.profile.postsData.push(newPost);
  state.profile.newPostText ='';
  reRenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  reRenderEntireTree(state);
}

export const subscribe = (observer) => {
  reRenderEntireTree = observer;
}

export default state;