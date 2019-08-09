import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />

        <div className='app-wrapper-content'>

          <Route path='/profile' render={ () => <ProfileContainer />} />
          <Route path='/dialogs' render={ () => <DialogsContainer />} />
          <Route path='/users' render={ () => <UsersContainer /> } />

        </div>
      </div>
  );
}

export default App;
