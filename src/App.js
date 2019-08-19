import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />

        <div className='app-wrapper-content'>

          <Route path='/profile/:userId?' render={ () => <ProfileContainer />} />
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/users' render={ () => <UsersContainer /> } />
          <Route path='/login' render={ () => <Login /> } />

        </div>
      </div>
  );
}

export default App;
