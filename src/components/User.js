import React from "react";

class User extends React.Component {

    render(){
        console.log('testing user', this.props.user);
        const user = this.props.user;
        return(
            <div className='flex'>
                <div className='user'>
                    <img src={user.avatar_url} alt='person'></img>
                </div>
                <div className='info'>
                    <h2>{user.name}</h2>
                    <h3>({user.login})</h3>
                    <p>Total Repos: {user.public_repos}</p>
                    <p>Total Followers: {user.followers}</p>
                </div>
            </div>  
        )
    }
}

export default User;