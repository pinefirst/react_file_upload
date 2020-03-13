import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FileUploadComponent from './file-upload';

const divStyle = {
  'backgroundColor':'#f5bbbb',
  'padding': '20px 5px'
}

function App() {
  return (
    <div className="App">
      <div className="text-center" style={divStyle}>
      <a href="https://jsonworld.com"><h2>JSON WORLD</h2></a>
      <a href="https://jsonworld.com/demo/" target="_blank"><span>File upload with React.js and Node.js</span></a>
    </div>
 
    <FileUploadComponent />
  </div>
  );
}

export default App;
