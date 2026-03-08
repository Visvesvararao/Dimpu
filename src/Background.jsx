import React from 'react'
import PrismaticBurst from './component/PrismaticBurst/PrismaticBurst'

const Background = () => {
  return (
    <div>
      <div style={{ width: '100vw', height: '100vh', position: 'relative'}}>
        <PrismaticBurst
          animationType="rotate3d"
          intensity={2}
          speed={0.3}
          distort={0}
          paused={false}
          offset={{ x: 0, y: 0 }}
          hoverDampness={0.25}
          rayCount={0}
          mixBlendMode="lighten"
          colors={['#ff007a', '#4d3dff', '#ffffff']}
          color0=""
          color1=""
          color2=""
      />
      </div>
    </div>
  )
}

export default Background
