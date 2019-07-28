# React

## Компонента

**Компонента** - это функция, которая возвращает JSX разметку. Т.е HTML внутри JS.
Компоненту никогда не вызывают, Компонента - это ТЕГ.



## SPA

**SPA** - <u>Single page application</u> (**Всё происходит в одном HTML файле, который приходит пользователю**)



![1562585643793](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1562585643793.png)

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

![1562938967001](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1562938967001.png)

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

![1562940934753](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1562940934753.png)

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

![1564063093206](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1564063093206.png)

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
## REACT-REDAX

React-redax это библиотека, позволяющая react работать с redax инкапсулируя все детали.

*Давайте вспомним как мы жили раньше, до этой библиотеки.*

**Context API**

Как это было раньше. Мы использовали функцию reRenderEntireTree. Вызывали её в index.js во время старта и также передавали её как callback subscribe'у если требовалось отрисовать дерево заново, если изменялся state. 

**Index.js**

```javascript
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';
let reRenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={store.getState()}  />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

reRenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  reRenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

Также мы использовали файл StoreContext для работы с ContextAPI. Мы создавали собственную компоненту Provider внутрь которой передавали store через value с помощью ContextAPI.

И использовали компоненту Provider внутри index.js

Это позволяло давать доступ контейнерным компонентам к store без необходимости прокидывать его через props.

**StoreContext.js**

```javascript
import React from 'react';

const StoreContext = React.createContext(null);

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
```

**ContainerComponent**

При создании контейнерной компоненты нам приходилось возвращать разметку внутри StoreContext.Consumer'a. Там же нам приходилось получать state через getState() и dispatch'и. Чтобы всё это передать в презентационную компоненту через пропсы.

**DialogsContainer.js**

```javascript
import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer > 
    {
      (store) => {
        let state = store.getState();

        let sendMessage = () => {
          store.dispatch(sendMessageActionCreator());
        }

        let onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        }
        return (
          <Dialogs
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
            dialogsData={state.messages.dialogsData}
            messagesData={state.messages.messagesData}
            newMessageText={state.messages.newMessageText}
          />
        )
      }
    }
    </StoreContext.Consumer>
  );
}

export default DialogsContainer;
```

**Давайте же взглянем, как проста стала жизнь!**

**ContextAPI**

1) Удаляем файл StoreContext.js. Он нам больше не нужен.

2)  Удаляем функцию reRenderEntireTree в index.js! Она нам также больше не нужна.

3) Компоненту Provider оставляем, но импортируем её уже не через StoreContext, а через react-redax.

```javascript
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

**ContainerComponent**

Создание контейнерным компонент ещё не было настолько простым!

1) const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

Одна строчка и компонента создана. 

Функция connect, импортированная из react-redax, что она делает?

Во-первых, как мы помним, мы удалили функцию reRenderEntireTree для перерисовки и отрисовки дерева. Connect делает всё это сам. **И делает намного лучше!** Он не перерисовывает всё дерево при изменении в одной компоненте, он перерисовывает **только эту компоненту**. 

Во-вторых, она обеспечивает самый простой способ передачи state и dispatch в презентационную компоненту.

**Connect вызывается дважды**. В первый раз она вызывается принимая в качестве параметров две функции **mapStateToProps** и **mapDispatchToProps**. Их названия говорят за них сами. 

**mapStateToProps** принимает **state** и возвращает объект ключ-значение в ЗНАЧЕНИИ атрибут-данные.

Проще показать на примере:

Это

```html
<Users users={state.users.usersData} />
```

Равно этому

```javascript
let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData
    }
}
```

Тоже самое с dispath

**mapDispatchToProps** принимает dispatch на вход

Это 

```html
let follow = (userId) => {
	store.dispatch(followAC(userId));
}

 <Dialogs follow={follow} />
```

Равно этому 

```javascript
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
	},
}
```

Как работает двойной вызов?

```javascript
Connect(result=a+b)(result=props.result)
```

Первый раз функция считает логику в первых скобках, далее результат этих скобок он передаёт во вторые. Второй раз функция выполниться только после выполнения первого раза, и возьмёт на вход результат первого выполнения.

Тоже самое происходит здесь:

```javascript
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
```

Выполняются функции mapStateToProps и mapDispatchToProps. Они возвращают объекты с  данными и функциями. Далее эти функции переходят на вход Users в виде props. Компоненте, которая как мы уже знаем также является функцией.

**UsersContainer.jsx**

```javascript
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unFollowAC, setUsersAC } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
```

# 

# deep copy vs shallow copy

Пойми одно, это БАЗА. База, которую ты должен знать.

Создадим объект а

```javascript
let a = {
      name: 'TextA',
      protocol: 'https',
      maxStudents: 10,
      isOnline: true,
      students: ['ivan', 'dima', 'julia', 'andrey'],
      classrom: {
        teacher: {
          name: 'oleg',
          age: 18
        }
      }
    }
```

создание объекта с помощью синтаксиса 

```
={}
```

называется созданием объекта с помощью литерала объекта.

Давайте разберёмся в том, как устроен объект.

```javascript
name: 'TextA',
protocol: 'https',
maxStudents: 10,
isOnline: true,
```

Данные, хранящие текст(символы), числа, булевые значения, null, undefinned называются примитивами.

```javascript
students: ['ivan', 'dima', 'julia', 'andrey'],
```

Ключ, значением которого является массив  - на самом деле это ссылка на массив. Массив же, кстати, также является объектом.

Это же касается вложенных объектов типа 

```javascript
classrom: {
        teacher: {
          name: 'oleg',
          age: 18
        }
      }
```

Ключ classrom является ссылкой на teacher. teacher же является ссылкой на объект, в котором хранятся примитивы name и age.

Почему я называю их ссылками? Всё очень просто. Все объекты, как бы хранящиеся внутри другого объекта на самом деле лежат независимо друг от друга. Они принадлежат разным секторам памяти. Именно поэтому, мы можем использовать их ссылаясь на них.

Всё очень наглядно можно показать на примере.

*Мы захотели создать переменную b и приравнять её к объекту a.* 

```javascript
let b = a;
```

Казалось бы, всё готово. И в консоль выводит всё верно.

![1564214889509](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1564214889509.png)

Два одинаковых массива.

Но **НЕТ**. Давайте попробуем изменить name в объекте b и вывести в консоль оба объекта. a и b.

```javascript
b.name = 'TextB'
```

![1564215021643](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1564215021643.png)

Как можете видеть, name изменилось и в объекте a.

Всё дело в том, что если мы "копируем" объект таким образом let b = a; То b становится равными ссылке, на которую ссылается a. А именно на объект 

```javascript
{
      name: 'TextA',
      protocol: 'https',
      maxStudents: 10,
      isOnline: true,
      students: ['ivan', 'dima', 'julia', 'andrey'],
      classrom: {
        teacher: {
          name: 'oleg',
          age: 18
        }
      }
    }
```

Есть способ копирования объекта

```javascript
let b = {...a}
```

Он называется поверхностным. И вот почему...

Попробуем опять изменить name в объекте b и выведем консоль

```javascript
b.name = 'TextB'
```

![1564215283657](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1564215283657.png)

Ура! Теперь это на первый взгляд два разных объекта. Но давайте добавим Sema в массив students объекта b. И выведем это

```javascript
b.students.push('Sema')
```

![1564215428311](https://github.com/Dvachee/SocialNetworkReact/raw/master/README-IMG/1564215428311.png)

Опять всё идёт не по плану. Изменились оба массива.

Как говорилось ранее students  - это ссылка на массив. Поверхностное копирование копирует и создаёт новый объект только со значениями первого уровня (первой вложенности). Students же уже вторая.

Её также можно скопировать, но для этого нужно также прописать

```javascript
b.students = [...a.students]
```

Это можно делать до бесконечной вложенности.

**ВАЖНО**

**Два объекта НИКОГДА не будут равны, даже если значения внутри них полностью совпадают.**

**При сравнении примитивов a.name === b.name будут сравниваться именно их значения**

**При сравнении двух ссылок, (без копирования, просто let b = a). Ссылки будут равны, ибо они ссылаются на один и тот же объект.**

**При сравнении примитивов внутри ссылок a.classrom.teacher.name === bclassrom.teacher.name будут сравниваться значения примитивов.**
