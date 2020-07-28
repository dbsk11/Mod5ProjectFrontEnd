import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'blue',
    font: '20px'
}

const NavBarTeacher = (props) => {

    const handleClick = (evt) => {
        props.history.push('/teacher')
    };

    const handleLogOut = (evt) => {
        props.clearTeacherUser()
        props.history.push('/')
    }

    return (
        <div className="navbar">
            <NavLink
                to="/teacher/"
                exact
                style={link}
                activeStyle={{color: 'red'}}
                onClick={handleClick}
            >Dashboard</NavLink>
            <NavLink
                to="/teacher/profile"
                exact
                style={link}
                activeStyle={{color: 'red'}}
            >Profile</NavLink>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{color: 'red'}}
                onClick={handleLogOut}
            >Log Out</NavLink>
        </div>
    );
};

export default NavBarTeacher;