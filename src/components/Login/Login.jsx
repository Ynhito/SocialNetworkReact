import React from 'react';
import s from './Login.module.scss';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../assets/common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';


const maxLength30 = maxLengthCreator(30);

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to="/profile" />
  }

  return (
    <div className={s.formContainer}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
}

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Email" 
        component={Input} 
        name="email"
        validate={[required, maxLength30]} />
      </div>
      <div>
        <Field placeholder="Password" 
        component={Input} 
        name="password"
        validate={[required, maxLength30]}
        type="password" />
      </div>
      <div>
        <Field type="checkbox" 
        component={Input} 
        name="rememberMe"
        /> remember me
      </div>
      <div>
        <button>Login</button>
      </div>
      { props.error && <div className={s.authError}>
        {props.error}
      </div>}
    </form>
  );
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login);