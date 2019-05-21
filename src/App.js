import React from 'react';
import './App.css';
import Budgetyear from './component/budgetyear'
function App() {
  return (
      <div className = 'App'>
        <div className = 'Header'>
          <a className = 'Topic'>กระทรวงกลาโหม</a>
        </div>
        <div className = 'Container'>
          <br></br>
          <Budgetyear></Budgetyear>
          <br></br>
          
        </div>
      </div>
  );
}

export default App;
