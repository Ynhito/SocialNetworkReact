import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav state={props.state.friends} />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={ () => <Profile 
            stateProfile={props.state.profile}
            dispatch={props.dispatch} />} />
          <Route path='/dialogs' render={ () => <Dialogs 
            stateMessages={props.state.messages}
            dispatch={props.dispatch} />} />
        </div>
      </div>
  );
}

export default App;
