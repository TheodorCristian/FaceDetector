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
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#000000",
        blur: 5
      }
    },
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 600
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