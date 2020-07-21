import React, { useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// main imports
import MainPage from './headers/MainPage'
import Header from './headers/Header';
// import Login from './components_teacher/Login'
import Logout from './components_teacher/Logout';
import Teacher from './Teacher'
import Student from './Student'

const App = () => {
  // Update user state 
  const [userType, setUserType] = useState("")

  // setting initial teacher view page
  const [teacherView, setTeacherView] = useState("")

  return (
    <div className="maincontainer">
      <div>
        <Header />
      </div>
      {/* <Student /> */}
      <Teacher />
        {/* {userType === ""
        ?
        <Route exact path="/" render={()=>
          <MainPage 
            userType={userType} 
            setUserType={setUserType}
            setTeacherView={setTeacherView}
          />} 
        />
        :
        <div>
          {userType === "Student"
          ?
          <Student 
          />
          :
          <Teacher 
            teacherView={teacherView}
          />
          }
        </div>
        } */}
    </div>
  );
};

export default App;