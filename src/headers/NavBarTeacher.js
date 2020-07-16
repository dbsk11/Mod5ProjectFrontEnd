import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'blue'
}

const NavBarTeacher = (props) => {
    return (
        <div className="navbar">
            <NavLink
                to="/teacher/"
                exact
                style={link}
                activeStyle={{color: 'red'}}
            >Dashboard</NavLink>
            <NavLink
                to="/teacher/profile"
                exact
                style={link}
                activeStyle={{color: 'red'}}
            >Profile</NavLink>
            <NavLink
                to="/teacher/logout"
                exact
                style={link}
                activeStyle={{color: 'red'}}
            >Log Out</NavLink>
        </div>
    );
};

export default NavBarTeacher;