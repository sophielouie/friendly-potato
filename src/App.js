import React from 'react';
import './App.css';
import Post from './components/Post/Post';

const App = () => {
  return (
    <div className="App">
      <Post />
        <Post />
      {/* <App>
        //Prompt
          <Post />

      </App> */}
      
      
    </div>
  );
}

export default App;
