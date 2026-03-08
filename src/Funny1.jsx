import React from 'react'
import messi from './assets/Dimpu/video project.mp4'

const Funny1 = () => {
  return (
    <div id='funny1Container'>
      <p>Okok u came till here lets introduce her now ok!</p>
      <video id='messiVideo' src={messi} controls></video>
      <h3 className='points'>1. Yes she has bigger fore head then mt everest</h3>
    </div>
  )
}

export default Funny1
