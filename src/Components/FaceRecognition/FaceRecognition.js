import React from 'react';
import './FaceRecognition.css';
import Face from '../Face/Face';

const FaceRecognition = (props) => {
   console.log(props.faceBox)
   return (
      <div className="centered image-container">
         <div className="relative">
            <img id="inputimage" src = {props.image} alt='' />
            {props.faceBox.map((face) => {
               return <Face key={props.faceBox.indexOf(face)} face={face} />
            })}
         </div>   
      </div>
   )
}

export default FaceRecognition