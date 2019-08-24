import React from 'react';
import { Field, reduxForm } from 'redux-form'

const Login = (props) => {

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
}

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" component="input" name="login" />
      </div>
      <div>
        <Field placeholder="Password" component="input" name="password" />
      </div>
      <div>
        <Field type="checkbox" component="input" name="rememberMe"/> remember me
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