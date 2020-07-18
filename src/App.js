import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// main imports
import MainPage from './headers/MainPage'
import Header from './headers/Header';
import Login from './headers/Login';
import Logout from './headers/Logout';
import Teacher from './Teacher'
import Student from './Student'

const App = () => {
  // Update user state 
  const [userType, setUserType] = useState("")

  return (
    <div className="maincontainer">
      <div>
        <Header />
      </div>
      <Teacher />
        {/* {userType === ""
        ?
        <Route exact path="/" render={()=><MainPage userType={userType} setUserType={setUserType}/>} />
        :
        <div>
          {userType === "Student"
          ?
          <Student />
          :
          <Teacher />
          }
        </div>
        } */}
    </div>
  );
};

export default App;