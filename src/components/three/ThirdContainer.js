import React from 'react'
import MenuHorizontal from '../MenuHorizontal'
import ThirdList from './ThirdList'

const container = {
  position: 'absolute',
  bottom: '5%',
  border: '1px dashed red',
  displayContent: 'center',
  width: '40%',
  height: '200px',
  justifyContent: 'center',
  left: '20%',
  // transform: 'translate(-650px)',
}

const ThirdContainer = () => {
  return (
    <div style={container}>
      <MenuHorizontal />
      <ThirdList />
    </div>
  )
}

export default ThirdContainer
