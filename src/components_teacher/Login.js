import React from 'react';

const Login = (props) => {
    // submit handle
    const handleSubmit = (evt) => {
        evt.preventDefault()
        const user={
            username: evt.target.username.value,
            password: evt.target.password.value
        }
        props.handleLoginSubmit(user)
    };
  
    return (
        <div className="loginform">
            <form onSubmit={handleSubmit}>
                <h1>Teacher Login</h1>
                <div className="username">
                <label htmlFor="username">Username:</label>
                <input 
                    className="usernameinput"
                    type="text" 
                    autoComplete="off" 
                    name="username" 
                    value={props.formUsername} 
                    onChange={(e) => props.setFormUsername(e.target.value)}
                />
                </div>
                <div className="password">
                <label htmlFor="password">Password:</label>
                <input 
                    className="passwordinput"
                    type="password" 
                    autoComplete="off" 
                    name="password" 
                    value={props.formPassword} 
                    onChange={(e) => props.setFormPassword(e.target.value)}
                />
                </div>  
                <div className="submitbutton">
                <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    );
};

export default Login;