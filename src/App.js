import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import { addPost } from './redux/state';

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.friends} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile 
            state={props.state.profile}
            addPost={addPost} />} />
          <Route path='/dialogs' render={ () => <Dialogs 
            state={props.state.messages} />} />
        </div>
      </div>
  );
}

export default App;
