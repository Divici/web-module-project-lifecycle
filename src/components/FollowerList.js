import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {

    render() {
        return(
            <div className='flex followers'>
                <h2 className='span'>FOLLOWERS:</h2>
                {this.props.followers.map(follower => (
                    <Follower key={follower.id} follower={follower} handleChange={this.props.handleChange}/>
                ))}
            </div>
        )
    }
}

export default FollowerList;