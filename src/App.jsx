import React from 'react'
import Background from './Background'
import Paragraph from './component/Paragraph'
import LogoLoop from './component/LogoLoop/LogoLoop';
import dimpuImg1 from './assets/Dimpu/mirror1.JPG';
import dimpuImg2 from './assets/Dimpu/mirror3.JPG';
import parkImage from './assets/Dimpu/parkImage.JPG';
import pookie from './assets/Dimpu/pookie.JPG';
import selfie1 from './assets/Dimpu/selfie1.JPG';
import Paragraph1 from './Paragraph1';
import Eyes from './Eyes';
import Funny1 from './Funny1';
import Videos from './Videos';
import Audios from './Audios';
import CountDown from './CountDown';
import Message from './Message';
import MainImage from './MainImage';


const App = () => {
  const imageLogos = [
  { src: dimpuImg1, alt: "pic 1" },
  { src: parkImage, alt: "pic 2" },
  { src: dimpuImg2, alt: "pic 3"},
  { src: pookie, alt: "pic 4"},
  { src: selfie1, alt: "pic 5"}
];
  return (
    <div id='maindiv'>
      <Background/>
      <Paragraph/>
      <div id='LogoLoop' style={{ height: '70vh', position: 'relative', overflow: 'hidden'}}>
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={400}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
       {/* <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
  useCustomRender={false}
/> */}
    </div>
      <Paragraph1/>
      <Eyes/>
      <Funny1/>
      <Videos/>
      <Audios/>
      <CountDown/>
      <Message/>
      <MainImage/>
    </div>
  )
}
export default App

