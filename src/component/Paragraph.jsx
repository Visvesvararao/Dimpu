import React from 'react'
import TiltedCard from './TiltedCard/TiltedCard';
import shirt from "../assets/Dimpu/dimpu_shirt.jpg";

const Paragraph = () => {
  return (
    <div id='firstparaandimagecontainer'>
      <TiltedCard
        imageSrc={shirt}
        altText="The Diva image"
        captionText="The Diva"
        containerHeight="40vh"
        containerWidth="30vw"
        imageHeight="100%"
        imageWidth="100%"
        rotateAmplitude={6}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip
        displayOverlayContent
        overlayContent={
            <p className="tilted-card-demo-text">
                My Diva
            </p>
        }
        />
        <div id='firstParagraph_container'>
            <p>Hey dimpuuuu, <br /><br />  &nbsp; i missed you so much that
             I can't express so i made this  i hope you like this 🩶</p>
        </div>
    </div>
  )
}

export default Paragraph
