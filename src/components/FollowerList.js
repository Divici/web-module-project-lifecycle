import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {

    render() {
        return(
            <div className='flex followers'>
                <h2 className='span'>FOLLOWERS:</h2>
                <div className=' flex follower'>
                    <img src='' alt='follower'></img>
                <h3>NicholAlexander</h3>
                </div>
                <div className=' flex follower'>
                    <img src='' alt='follower'></img>
                    <h3>NicholAlexander</h3>
                </div>
                <div className=' flex follower'>
                    <img src='' alt='follower'></img>
                    <h3>NicholAlexander</h3>
                </div>
            </div>
        )
    }
}

export default FollowerList;