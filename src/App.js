import React from 'react';

class App extends React.Component {
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
        <div className='flex follower'>
          <img src='' alt='follower'></img>
          <h3>NicholAlexander</h3>
        </div>
      </div>

    </div>);
  }
}

export default App;
