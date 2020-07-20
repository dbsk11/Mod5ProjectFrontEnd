import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    color: 'blue'
}

const NavBarStudent = (props) => {
    const handleClick = (evt) => {
        props.setAlternateScreen(false)
    }

    return (
        <div className="navbar">
            <NavLink
                to="/student/"
                exact
                style={link}
                activeStyle={{color: 'red'}}
                onClick={handleClick}
            >Dashboard</NavLink>
            <NavLink
                to="/student/profile"
                exact
                style={link}
                activeStyle={{color: 'red'}}
            >Profile</NavLink>
            <NavLink
                to="/student/logout"
                exact
                style={link}
                activeStyle={{color: 'red'}}
            >Log Out</NavLink>
        </div>
    );
};

export default NavBarStudent;