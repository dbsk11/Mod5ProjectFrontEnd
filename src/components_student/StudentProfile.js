import React from 'react';

const Profile = (props) => {
    const {fullname, display_age, dob, email} = props.studentUser.student;
 
    return (
        <div className="profile">
            <h1>My Profile</h1>
            <div className="infodisplay">
                <h3>Name: </h3>
                <p>{fullname}</p>
            </div>
            <div className="infodisplay">
                <h4>DOB: </h4>
                <p>{dob}</p>
            </div>
            <div className="infodisplay">
                <h4>Age: </h4>
                <p>{display_age}</p>
            </div>
            <div className="infodisplay">
                <h4>Email: </h4>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Profile;