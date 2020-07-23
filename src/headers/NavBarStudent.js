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
                to="/"
                exact
                style={link}
                activeStyle={{color: 'red'}}
                onClick={handleLogOut}
            >Log Out</NavLink>
        </div>
    );
};

export default NavBarStudent;