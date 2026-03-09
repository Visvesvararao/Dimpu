import React from 'react'
import video1 from './assets/Dimpu/birthday.mov'
import video2 from './assets/Dimpu/diva1.MOV'
import video3 from './assets/Dimpu/diva2.MOV'
import video4 from './assets/Dimpu/diva3.MOV'

const Videos = () => {
  return (
    <>
    <div className='videosContainer'>
      <video className='videos' loop onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} src={video1}></video>
      <video className='videos' loop onMouseOver={(e)=>e.target.play()} muted onMouseOut={(e)=>e.target.pause()} src={video2}></video>
      <video className='videos' loop onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} src={video3}></video>
      <video className='videos' loop onMouseOver={(e)=>e.target.play()} muted onMouseOut={(e)=>e.target.pause()} src={video4}></video>
    </div>
      <h3 className='points' style={{display:'flex',justifyContent:'center'}}>2. Yes she is the most beatifulllllllllll girl. That's why she is The Diva</h3>
    </>
  )
}

export default Videos
