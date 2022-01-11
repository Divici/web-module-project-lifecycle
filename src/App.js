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
    axios.get('https://api.github.com/users/ryanghoward')
      .then(resp=>{
        console.log(resp.data);
        // this.setState({
        //   ...this.state,
        //   user: resp.data.login
        // })
      })
  }

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

      <User />

      <FollowerList />

    </div>);
  }
}

export default App;
