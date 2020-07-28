import React from 'react';
import { NavLink } from 'react-router-dom'

const MainPage = (props) => {
    
    const handleClickStudent = (evt) => {
        props.history.push('/student/login')
    };

    const handleClickTeacher = (evt) => {
        props.history.push('/teacher/login')
    }

    return (
        <div className="mainpage">
            <h1>Welcome to Ask:Answer</h1>
            <p>Click Student or Teacher to begin</p>
            <div className="mainpagebuttons">
                <div className="studentbutton">
                    <button className="mainbutton" onClick={handleClickStudent} >Student</button>
                </div>
                <div className="teacherbutton">
                    <button className="mainbutton" onClick={handleClickTeacher}>Teacher</button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;