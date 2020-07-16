import React from 'react';
import './App.css';
import MainPage from './MainPage'
import Header from './headers/Header';
import Login from './headers/Login';
import Logout from './headers/Logout';
import NavBar from './headers/NavBar';
import MessageContainer from './components_teacher/MessageContainer'
import Profile from './components_teacher/Profile'
import ReplyContainer from './components_teacher/ReplyContainer'
import ResponseContainer from './components_teacher/ResponseContainer'
import StudentRequestContainer from './components_teacher/StudentRequestContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="maincontainer">
      <div className="header">
        <Header />
        <NavBar />
      </div>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/teacher" component={MessageContainer} />
      <Route exact path="/teacher/profile" component={Profile} />
      <Route exact path="/teacher/reply" component={ReplyContainer} />
      <Route exact path="/teacher/response" component={ResponseContainer} />
      <Route exact path="/teacher/studentrequest" component={StudentRequestContainer} />
    </div>
  );
}

export default App;