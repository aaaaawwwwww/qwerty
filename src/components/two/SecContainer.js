import React from 'react'
import MenuHorizontal from "../MenuHorizontal";
import SecList from './SecList';

const container = {
  display: 'inline-block',
  border: '2px dashed gray',
  marginLeft: '50px',
  width: '70%',
  height: 'auto',
  paddingTop: '30px',
  paddingLeft: '10px',
}


const SecContainer = () => {
  return (
    <div style={container}>
      <MenuHorizontal />
      <SecList />
    </div>
  )
}

export default SecContainer
