import React from 'react';

const Profile = (props) => {
    const {display_name, subject, email} = props.teacherUser.teacher

    return (
        <div className="profile">
            <h1>My Profile</h1>
            <h4>Name: </h4>
            <p>{display_name}</p>
            <h3>Subject: </h3>
            <p>{subject}</p>
            <h3>Email: </h3>
            <p>{email}</p>
        </div>
    );
};

export default Profile;