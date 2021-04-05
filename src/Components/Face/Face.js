import React from 'react'

const Face = ({ face }) => {
   return (
      <div className='box' style={{top: face.top, left: face.left, right: face.right, bottom: face.bottom}}></div>
   )
}

export default Face
