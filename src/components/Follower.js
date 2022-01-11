import React from "react";

class Follower extends React.Component {

    render() {

        return(
            <div>
                <div className=' flex follower'>
                    <img src={this.props.follower.avatar_url} alt='follower'></img>
                    <h3>{this.props.follower.login}</h3>
                </div>
            </div>
        )
    }
}

export default Follower;