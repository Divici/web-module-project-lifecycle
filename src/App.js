import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    search: '',
    user: [],
    followers: []
  }
  
  componentDidMount() {
    console.log("App: Component Has Mounted.");
    axios.get('https://api.github.com/users/Divici')
      .then(resp=>{
        this.setState({
          ...this.state,
          user: resp.data
        });
      });

    axios.get('https://api.github.com/users/Divici/followers')
      .then(resp=>{
        this.setState({
          ...this.state,
          followers: resp.data
        });
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(prevState.user !== this.state.user){
  //     axios.get('https://api.github.com/users/Divici/followers')
  //     .then(resp=>{
  //       this.setState({
  //         ...this.state,
  //         followers: resp.data
  //       });
  //     });
  //   }
  // }

  render() {
    return(<div className='wrapper'>
      <h1>GITHUB INFO</h1>

      <div className='search'>
        <form>
          <input
            placeholder='Github Handle'
          >
          </input>
          <button>Search</button>
        </form>
      </div>

      <User user={this.state.user}/>

      <FollowerList followers={this.state.followers}/>

    </div>);
  }
}

export default App;
