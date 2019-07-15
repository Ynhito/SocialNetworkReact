import { reRenderEntireTree } from "../render";

let state = {
  profile: {
    postsData: [
      { id: 1, message: 'Hi, how are you' },
      { id: 2, message: 'Its my first post' }
    ],
    newPostText: 'JOPA'
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


export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
  };
  state.profile.postsData.push(newPost);
  reRenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  reRenderEntireTree(state);
}

export default state;