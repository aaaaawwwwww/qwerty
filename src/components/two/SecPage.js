import React from 'react'
import Head from '../Head'
import UsageMenu from './UsageMenu'
import MenuVertical from '../MenuVertical'
import SecContainer from './SecContainer'
import backgroundone from '../img/backgroundone.jpg'

const SecPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundone})`, backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <Head />
      <UsageMenu />
      <MenuVertical />
      <SecContainer />
    </div>
  )
}

export default SecPage
