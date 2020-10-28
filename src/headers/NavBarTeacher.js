import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    display: 'flex',
    justifyContent: 'center',
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'white',
    font: '20px',
    fontFamily: 'Open Sans'
};

const NavBarTeacher = (props) => {

    const handleClick = (evt) => {
        props.history.push('/teacher')
    };

    const handleLogOut = (evt) => {
        props.clearTeacherUser()
        props.history.push('/')
    };

    return (
        <div className="navbar">
            <div className="spacer">

            </div>
            <NavLink
                to="/teacher/"
                exact
                style={link}
                activeStyle={{color: 'yellow'}}
                onClick={handleClick}
            >Dashboard</NavLink>
            <NavLink
                to="/teacher/profile"
                exact
                style={link}
                activeStyle={{color: 'yellow'}}
            >Profile</NavLink>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{color: 'yellow'}}
                onClick={handleLogOut}
            >Log Out</NavLink>
        </div>
    );
};

export default NavBarTeacher;