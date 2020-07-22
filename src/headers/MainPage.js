import React from 'react';

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
                <button onClick={handleClickStudent}>Student</button>
                <button onClick={handleClickTeacher}>Teacher</button>
            </div>
        </div>
    );
};

export default MainPage;