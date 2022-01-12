import React from "react";

class Follower extends React.Component {

    handleClick = e => {
        e.preventDefault();
        this.props.handleChange(e, this.props.follower.login);
    }
    
    render() {

        return(
            <div>
                <div onClick={this.handleClick} className=' flex follower'>
                    <img src={this.props.follower.avatar_url} alt='follower'></img>
                    <h3>{this.props.follower.login}</h3>
                </div>
            </div>
        )
    }
}

export default Follower;