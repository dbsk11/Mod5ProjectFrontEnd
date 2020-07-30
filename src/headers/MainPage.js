import React from 'react';

const MainPage = (props) => {
    
    const handleClickStudent = (evt) => {
        props.history.push('/student/login')
    };

    const handleClickTeacher = (evt) => {
        props.history.push('/teacher/login')
    };

    return (
        <div className="mainpage">
            <div className="title">
                <h1>Ask : Answer </h1>
            </div>
            <div className="titleheading">
                <h1>Messaging Portal</h1>
            </div>
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