import React from 'react';
import './InputForm.css';

const InputForm = ({onInputChange, onSubmit}) => {
   return (
      <div className="container">
         <p className="title">Test the Face Detector App</p>
         <div className="input-container">
            <input type="text" name="url" placeholder="Enter a URL" onChange={onInputChange}/>
            <button onClick={onSubmit}>Detect Face</button>
         </div>
      </div>
   )
}

export default InputForm;
