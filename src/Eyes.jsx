import React from 'react'
import eyes from './assets/Dimpu/eyes1.JPG'
import eyes2 from './assets/Dimpu/eyes2.JPG'

const Eyes = () => {
  return (
    <div id='eyesContainer'>
      <img style={{width:'95%',borderRadius:'8vh 8vh 0vh 0vh'}} src={eyes} alt="the beautifull eyes" />
      <img style={{width:'95%',borderRadius:'0vh 0vh 8vh 8vh'}} src={eyes2} alt="the beautifull eyes" />
      <p id='eyesParagraph'>Those <span style={{color:'pink'}}>eyes</span>, man… what can I say about them? They are both a trap and a poison. If there is something I could stare at for a long time, it would only be her eyes. They are my weakness, my strength, my stress reliever, and my painkiller. I'm not overhyping them they are truly more beautiful than anything </p>
      
    </div>
  )
}

export default Eyes
