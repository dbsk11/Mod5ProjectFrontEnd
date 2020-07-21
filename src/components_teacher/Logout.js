import React from 'react';

const Logout = (props) => {
    return (
        <h1>Logout</h1>
    );
};

export default Logout;


// import React from 'react';
 
// const Logout = (props) => {
    
//     // changes state
//     const clearUser=()=>{
//         localStorage.clear()
//         props.setUser({
//             user:{
//                 id:0,
//                 first_name:'',
//                 last_name:'',
//                 username:'',
//                 user_videos:'',
//             },
//             token:'',
//         })
//     };

//     return (
//         <div>
//             {clearUser()}
//             {props.history.push('/login')}
//         </div>
//     );

// };
 
// export default Logout;