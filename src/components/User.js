import React from "react";

class User extends React.Component {

    render(){
        return(
            <div className='flex'>
                <div className='user'>
                    <img src='' alt='person'></img>
                </div>
                <div className='info'>
                    <h2>Charles Linkler</h2>
                    <h3>(Clinkler_Programmer)</h3>
                    <p>Total Repos: 101</p>
                    <p>Total Followers: 29</p>
                </div>
            </div>  
        )
    }
}

export default User;