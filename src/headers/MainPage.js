import React from 'react';
import { NavLink } from 'react-router-dom'

const MainPage = (props) => {
    
    const handleClickStudent = (evt) => {
        props.setUserType("Student")
    };

    const handleClickTeacher = (evt) => {
        props.setUserType("Teacher")
    }

    return (
        <div className="mainpage">
            <h1>Welcome to Ask:Answer</h1>
            <p>Click Student or Teacher to begin</p>
            <div className="mainbuttons">
                <NavLink
                    to="/student/login"
                    exact
                    onClick={handleClickStudent}
                >Student</NavLink>
                <NavLink
                    to="/teacher/login"
                    exact
                    onClick={handleClickStudent}
                >Teacher</NavLink>
            </div>
        </div>
    );
};

export default MainPage;