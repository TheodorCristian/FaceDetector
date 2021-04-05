import React, { useState } from 'react';
import './App.css';
import Logo from './Components/Logo/Logo';
import InputForm from './Components/InputForm/InputForm';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

const clarifai = new Clarifai.App({
  apiKey: '4c615670a3ec4693b50c86e896a357d2'
});

const particlesOptions = {
  "particles": {
    "number": {
        "value": 160,
        "density": {
            "enable": false
        }
    },
    "size": {
        "value": 3,
        "random": true,
        "anim": {
            "speed": 4,
            "size_min": 0.3
        }
    },
    "line_linked": {
        "enable": false
    },
    "move": {
        "random": true,
        "speed": 1,
        "direction": "top",
        "out_mode": "out"
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "bubble"
        },
        "onclick": {
            "enable": true,
            "mode": "repulse"
        }
    },
    "modes": {
        "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 0,
            "opacity": 0
        },
        "repulse": {
            "distance": 400,
            "duration": 4
        }
    }
  }
};
function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [boxLocation, setBoxLocation] = useState([
    {}
  ]);
  const faceLocation = (data) => {
    const faces =  data.outputs[0].data.regions;
    const image = document.getElementById('inputimage');
    const imageWidth = Number(image.width);
    const imageHeight = Number(image.height);
    const regions = faces.map(region => region.region_info.bounding_box);
    const regionsCoordinates = regions.map((region) => {
      return {
        left: imageWidth * region.left_col,
        right: imageWidth - (imageWidth * region.right_col),
        top: imageHeight * region.top_row,
        bottom: imageHeight - (imageHeight * region.bottom_row)
      }
    })
  return regionsCoordinates;
};
  const displayFace = (box) => {
    setBoxLocation(box);
  }
  const onInputChange = (e) => {
    setInput(e.target.value);
  }
  const onSubmit = () => {
    setImageUrl(input);
    clarifai.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(response => displayFace(faceLocation(response))
    .catch(err => console.log(err))
    );  
  }
   return (
    <div className="App">
    <Particles className="particles" params={particlesOptions} />
      <div className="header">
        <Logo />
      </div>
      <div className="content">
        <div className="input">
        <InputForm onInputChange = {onInputChange} onSubmit = {onSubmit}/>
        </div>
      </div>
      <FaceRecognition image = {imageUrl} faceBox = {boxLocation}/>
    </div>
  );
}

export default App;