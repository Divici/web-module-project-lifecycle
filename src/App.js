import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  state = {
    search: 'Divici',
    user: [],
    followers: []
  }
  
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.search}`)
      .then(resp=>{
        this.setState({
          ...this.state,
          user: resp.data
        });
      });

  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.user !== this.state.user){
      axios.get(`https://api.github.com/users/${this.state.search}/followers`)
      .then(resp=>{
        this.setState({
          ...this.state,
          followers: resp.data
        });
      });
    }
  }

  handleChange = (e, searched) => {
    !searched?
    this.setState({
      ...this.state,
      search: e.target.value
    })
    :
    axios.get(`https://api.github.com/users/${searched}`)
      .then(resp => {
        this.setState({
          ...this.state,
          search: searched,
          user: resp.data
        })
      })
  }

  handleSearch = e => {
    e.preventDefault();

    const searched = this.state.search;
    axios.get(`https://api.github.com/users/${searched}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
  }

  render() {
    return(<div className='wrapper'>
      <h1>GITHUB INFO</h1>

      <div className='search'>
        <form>
          <input
            placeholder='Github Handle'
            value={this.state.search}
            onChange={this.handleChange}
          >
          </input>
          <button onClick={this.handleSearch}>Search</button>
        </form>
      </div>

      <User user={this.state.user}/>

      <FollowerList followers={this.state.followers} handleChange={this.handleChange}/>

    </div>);
  }
}

export default App;
