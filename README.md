# React

## Компонента

**Компонента** - это функция, которая возвращает JSX разметку. Т.е HTML внутри JS.
Компоненту никогда не вызывают, Компонента - это ТЕГ.



## SPA

**SPA** - <u>Single page application</u> (**Всё происходит в одном HTML файле, который приходит пользователю**)



![1562585643793](C:\Users\2che\Downloads\1562585643793.png)

## Пропсы

**Пропсы** - произвольные данные(объекты), которые задаются в виде атрибута ТЕГА(компоненты) и хранятся в объекте под видом Ключ : Значение (например

```javascript
<Welcome name="Dima" />
```

имеет вид находясь в объекте, который в свою очередь является параметром функции:

```javascript
props {
  name : "Dima"
}
```

## Модуль **react-router-dom** 

позволяет использовать **route** (изначально всё нужно обвернуть в один блок под названием **BrowserRouter**. Он позволяет отрисовывать компоненты, отслеживания их url (
    ```react
    <Route path='/profile' component={Profile} />
    ```
​    ). 
Чтобы задать изменение url нужно использовать тег **NavLink** (

~~~javascript
```react
<NavLink to="/profile">
    Profile
</NavLink>
```
~~~

​    )

**BLL (Business Logic Layer) - REDUX**
**UI (User Interface) - REACT**

## Метод для массива MAP

Пример использования:
**Объявляем массив с объектами, содержащими ключ и значение**

```javascript
let messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Privet'},
    {id: 3, message: 'Aloha'},
];
```

Создаём новый массив и делаем его равным массиву **messagesData** с методом **map**. Параметром будет являться каждый объект массива **messagesData**. Назовём его просто - **d**.

```javascript
let dialogsElement = dialogsData
    .map(d => <DialogItem name={d.name} id={d.id} />);
```



# onClick, ref, VirtualDOM



### OnClick

Атрибут **OnClick** к тегу звучит как "Действие по клику"

```jsx
<button *onClick*={addPost}>Отправить</button>
```

Значением этого атрибута может служить анонимная функция, либо же **CallBack** функция.

### CallBack

**CallBack** функция - это функция обратного вызова. Т.е функция, которая вызывается другой функцией.

Например. Создали функцию:

```js
`let addPost = () => { ` `

`alert(text);`

`}`
```

Мы можем вызвать её стандартным способом addPost(). Либо же передать её внутрь другой функции

```jsx
<button *onClick*={addPost}>Отправить</button>
```

***БЕЗ СКОБОК!!!***

### ref

```jsx
<textarea *ref*={newPostElement}></textarea>
```

**ref** - это ссылка. Это тоже самое, что присвоить элементу id или класс.

Команда ниже аналогична команде 

```javascript
let newPostElement = document.getElementById('id')
```

```javascript
let newPostElement = React.createRef();
```

Но с помощью инструментов **React**. Это нужно потому, что нельзя обращаться напрямую к **DOM**. 

Взаимодействовать с ссылками можно таким образом:

```javascript
let text = newPostElement.current.value;
```

### VirtualDOM

**React** работает с **VirtualDOM**. Он подгружает компоненты <u>постепенно</u> в **DOM**, а поэтому *мы не можем знать существует ли данный элемент, к которому мы обращаемся, в DOM.*





## ReRender

![1562938967001](C:\Users\2che\Downloads\1562938967001.png)

**Файл render.js:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let reRenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} />
    </BrowserRouter>, document.getElementById('root'));
}
```

**Файл state.js:**

```javascript
import {reRenderEntireTree} from "../render";

let state = {...}

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
  };
  state.profile.postsData.push(newPost);
  reRenderEntireTree(state);
}

export default state;
```

**Файл index.js:**

```javascript
import './index.css';
import * as serviceWorker from './serviceWorker';
import {reRenderEntireTree} from "./render";
import state from './redux/state';



reRenderEntireTree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

## FLUX Концепция/Архитектура

![1562940934753](C:\Users\2che\Downloads\1562940934753.png)

**Концепция звучит так:** *Изменения в UI мире должны происходить только тогда, когда произойдут изменения в BLL мире*

P.S, 

**Action** - *действия/изменения,* 

**state inside props** - *новые данные stat'a передаваемые в UI с помощью пропсов*



**Инкапсулировать детали** - скрыть детали/скрыть логику

## Store

Псевдо ООП

```javascript
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import friendsReducer from "./friends-reducer";
let store = {
  _state: {
    profile: {
      postsData: [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'Its my first post' }
      ],
      newPostText : ''
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
      ],
      newMessageText : ''
    },
    friends: {
      friendsData: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Julia' },
        { id: 3, name: 'Victor' }
      ]
    }
  },
  _callSubscriber() {
    console.log("state changed")
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { //action === actionCreator (EX. addPostActionCreator)

    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messagesReducer(this._state.messages, action);
    this._state.friends = friendsReducer(this._state.friends, action);

    this._callSubscriber(this._state);
  }
}

export default store;

window.store = store;
```

## Перерисовка

Файл index.js

```javascript
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
let reRenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

reRenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state);
});
```

**reRenderEntireTree** - Функция, которая рисует ui с помощью ReactDOM.render.

В этом же файле мы её вызываем, чтобы при первом запуске страницы увидеть ui

```javascript
reRenderEntireTree(store.getState());
```

**НО**, UI должен перерисовываться каждый раз, когда он изменяется. Для этого мы обращаемся к функции **subscribe** через **store**. И передаём ей в качестве параметра **reRenderEntireTree** со state в параметре.

```javascript
store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state);
});
```

Функция **subscribe** имеет параметр observer, который по выполнению функции должен стать равным другой пустой функции **callSubscriber** которая в свою очередь уже не становится пустой.

```javascript
subscribe(observer) {
    this._callSubscriber = observer;
  },
```

Было:

```javascript
_callSubscriber() {
    console.log("state changed")
  }
```

Стало:

```javascript
_callSubscriber() {
    let state = store.getState();
  	reRenderEntireTree(state);
  }
```

Как только (например по нажатию кнопки) в dispatch приходит action происходит вызов callSubscriber (отсюда и название функции)

```javascript
dispatch(action) { //action === actionCreator (EX. addPostActionCreator)

    this._state.profile = profileReducer(this._state.profile, action);
    this._state.messages = messagesReducer(this._state.messages, action);
    this._state.friends = friendsReducer(this._state.friends, action);

    this._callSubscriber(this._state);
  }
```

Происходит перерисовка UI.

# Bind()

Метод **bind()** создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения `this` предоставленное значение.

Для чего он нужен? Например, если у нас есть функция 

```javascript
_addPost() {

​    let newPost = {

​      id: 3,

​      message: this._state.profile.newPostText,

​    };

​    this._state.profile.postsData.push(newPost);

​    this._state.profile.newPostText ='';

​    this._callSubscriber(this._state);

  },
```

И мы передаём её в пропсы как callback

```javascript
addPost={store.addPost}
```

То при использовании(вызове) мы будем обращаться к ней от имени(внутри объекта) **props**

```javascript
props.addPost()
```

В этом случае все **this** будут обращаться именно к **props**. *Ближайшему родительскому объекту*, а не к **_state**,  как это было задумано. Что вызывает ошибку.

#### В этой то ситуации мы и используем bind(Объект на который мы хотим сослаться)

```javascript
addPost={store.addPost.bind(store)
```



## Dispatch, Action, ActionCreator, Reducer

**dispatch** - это метод(функция), который передаёт action(действие) в reducer.

```javascript
dispatch(sendMessageActionCreator());
```

**Action**  - это объект, который содержит минимум **type**

**ActionCreator** - это функция, которая создаёт **Action**.

```javascript
export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text});
```

Также **ActionCreator** может создавать(возвращать) другие данные.

**Reducer**  - в свою очередь же, это функция, которая принимает **state** и **action**

```javascript
const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText
      };
      state.postsData.push(newPost);
      state.newPostText ='';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText; 
      break;
    default:
      return state;
  }
  return state;
}
```

Reducer преобразовывает state и возвращает его обратно. Либо возвращает прежний state, если условия не удовлетворились. Reducer проверяет action.type (созданный функцией actionCreator) на соответствие и выполняет логику.

В reducer **ДОЛЖЕН** передаваться инициализационный state. Иначе функция вернёт undefinned.

```javascript
let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you' },
    { id: 2, message: 'Its my first post' }
  ],
  newPostText : ''
};
```

Логика такова:

![1564063093206](C:\Users\2che\Downloads\FOTO\1564063093206.png)

## Redux

```javascript
let store = createStore(reducers);
```

**createStore** - это функция, которая принимает в качестве параметра **reducer** и создаёт **store**

Либо комплект редьюсоров

```javascript
let reducers = combineReducers({
    profile : profileReducer,
    messages : messagesReducer,
    friends : friendsReducer
});
```

Функция **combineReducers** принимает в качестве параметра объект **state** : **reducer**. *State* в данном случае будет служить родительским объектом **initialState**. Другими словами **initialState** - это **state**, который мы указывает в виде ключа в **combineReducers**. Каждый *reducer* будет работать с отдельными *state*. **profileReducer** будет изменять **profile**, **messagesReducer** - **messages** и т.д. 

Как это было в самописном store:

```javascript
this._state.profile = profileReducer(this._state.profile, action);
this._state.messages = messagesReducer(this._state.messages, action);
this._state.friends = friendsReducer(this._state.friends, action);
```

Как это в Redux:

```javascript
let reducers = combineReducers({
    profile : profileReducer,
    messages : messagesReducer,
    friends : friendsReducer
});
```

## Container Component

Мы используем Контейнерную компоненту, чтобы презентационная компонента не имела связи со Store. Все данные из store будут приходить сначала в оболочку - контейнерную компоненту. Далее эта компонента отрисовывает презентационную компоненту и передаёт ей все данные через props.

**Container Component**

```javascript
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

  let state = props.store.getState();

  let sendMessage = () => {
    props.store.dispatch(sendMessageActionCreator());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }
  
  return (
    <Dialogs 
      sendMessage={sendMessage}
      onMessageChange={onMessageChange}
      dialogsData={state.messages.dialogsData}
      messagesData={state.messages.messagesData}
      newMessageText={state.messages.newMessageText}
    />
  );
}

export default DialogsContainer;
```

Component (Presentation)

```javascript
import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  let dialogsElement = props.dialogsData
    .map(d => <DialogItem name={d.name} id={d.id} />);

  let messagesElement = props.messagesData
    .map(m => <Message message={m.message} id={m.id} />);

  let newMessageElement = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);  
  }
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElement}
        <div className={s.inputArea}>
          <textarea
            onChange={onMessageChange} 
            ref={newMessageElement} 
            value={props.newMessageText}
            placeholder="Введите сообщение"
          />
          <button onClick={onSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
```

