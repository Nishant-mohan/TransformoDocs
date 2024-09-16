import React from 'react';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-content">
          <h1>Transformodocs</h1>
          <nav className="App-nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#upload">Upload</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <h1>Upload Document Here</h1>
        <div className="upload-type">
          <div className="option">
            <i className="icon-folder"></i>
            <p><button><img src: "image1.png" alt="Example Image" className='image1' /></button></p>
            <button className='upload'>Upload</button>
          </div>
          <div className="option">
            <i className="icon-folder"></i>
            <p><button><img src:"image1.png" alt="Example Image" className='image1' /></button></p>
            <button className='upload'>Upload</button>
          </div>

          <div className="option">
            <i className="icon-folder"></i>
            <p><button><img src:"image1.png" alt="Example Image" className='image1' /></button></p>
            <button className='upload'>Upload</button>
          </div>
        </div>
        <div className="navigation">
          <button>Cancel</button>
          <button>Previous Step</button>
          <button>Next Step</button>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Transformodocs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
