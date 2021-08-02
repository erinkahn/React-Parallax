import './App.css';
import React from 'react';
import {Parallax} from 'react-parallax';

const parallaxImage =  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

function App() {
  
  return (
    <div className="App">

      <Parallax bgImage={ parallaxImage } strength={500}>
        <div className="image-container">
          <div className="text-box">Regular</div>
        </div>
      </Parallax>


      <h1>|  |  |</h1>


      <Parallax bgImage={ parallaxImage } blur={{ min: -1, max: 3 }}> 
        <div className="image-container">
          <div className="text-box">Blur</div>
        </div>
      </Parallax>


      <h1>|  |  |</h1>


      <Parallax bgImage={ parallaxImage } strength={-200} >
        <div className="image-container">
          <div className="text-box">Reverse Direction</div>
        </div>
      </Parallax>


      <h1>|  |  |</h1>


      <Parallax bgImage={ parallaxImage } strength={200} 
          renderLayer={percentage => (
          <div className="orange-box" style={{ 
              background: `rgba(244, 124, 23, ${percentage * 1})`
            }}></div>
          )}>
          <div className="image-container">
          <div className="text-box">Opacity Background Color</div>
        </div>
      </Parallax>


      <h1>|  |  |</h1>


      <Parallax bgImage={ parallaxImage } strength={400} 
          renderLayer={percentage => (
          <div className="pink-circle" style={{ 
              transform: `translate(100%, 0) scale(${percentage * 5})`
            }}></div>
          )}>
          <div className="image-container">
          <div className="text-box">Slide Background</div>
        </div>
      </Parallax>


      <h1>|  |  |</h1>


      <Parallax bgImage={ parallaxImage } strength={200} 
          renderLayer={percentage => (
          <div className="yellow-box" style={{ 
              background: `rgba(255, 255, 0, ${percentage * 1})`,
              transform: `translate(-50%, -50%) scale(${percentage * 5})`
            }}></div>
          )}>
          <div className="image-container">
          <div className="text-box">Grow Shape</div>
        </div>
      </Parallax>

      <div style={{ height: '100vh' }}></div>
    </div>
  );
}

export default App;
