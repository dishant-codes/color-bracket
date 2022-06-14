import React,{useContext} from 'react';
import LoginPage from './LoginPage';
import Home from './Home';
import {Context} from './Store';


function Auth(props) {
  const [loggedin, setLoggedin] = useContext(Context);
  return (
    <div>{ loggedin ? <Home setEmpID={props.setEmpID} /> : <LoginPage /> }</div>
  )
}

export default Auth