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

const NavBarStudent = (props) => {
    const handleClick = (evt) => {
        props.history.push("/student")
    };

    const handleLogOut = (evt) => {
        props.clearStudentUser();
        props.history.push('/');
    };

    return (
        <div className="navbarstudent">
            <NavLink
                to="/student/"
                exact
                style={link}
                activeStyle={{color: 'yellow'}}
                onClick={handleClick}
            >Dashboard</NavLink>
            <NavLink
                to="/student/profile"
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

export default NavBarStudent;