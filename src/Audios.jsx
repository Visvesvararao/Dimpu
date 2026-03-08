import React from 'react'
import song1 from './assets/Dimpu/song1.mov'
import song2 from './assets/Dimpu/song2.mp4'
import song3 from './assets/Dimpu/song3.mov'
import dance1 from './assets/Dimpu/dimpudance.mp4'

const Audios = () => {
  return (
    <>
    <div className='videosContainer'>
      <video loop onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} className='videos' src={song1}></video>
      <video loop onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} className='videos' src={song2}></video>
      {/* <video loop style={{transform:'rotate(-90deg)'}} onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} className='videos' src={song3}></video> */}
      <video loop onMouseOver={(e)=>e.target.play()} onMouseOut={(e)=>e.target.pause()} className='videos' src={dance1}></video>
    </div>
        <h3 className='points' style={{display:'flex',justifyContent:'center'}}>3. Yes, she can sing, She can dance unfortunately i dont have any drawings so i dont have any images of her drawings. she is an artist</h3>
    </>
  )
}

export default Audios
