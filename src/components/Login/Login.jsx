import React from 'react';
import s from './Login.module.scss';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../assets/common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators/validators';


const maxLength10 = maxLengthCreator(10);

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className={s.formContainer}>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
}

const LoginForm = (props) => {
  debugger
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" 
        component={Input} 
        name="login"
        validate={[required, maxLength10]} />
      </div>
      <div>
        <Field placeholder="Password" 
        component={Input} 
        name="password"
        validate={[required, maxLength10]} />
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
    </form>
  );
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default Login;