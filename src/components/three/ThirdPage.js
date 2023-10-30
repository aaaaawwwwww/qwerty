import React from 'react'
import Head from '../Head'
import MenuVertical from '../MenuVertical'
import Options from './Options'
import CompoList from './CompoList'
import ThirdContainer from './ThirdContainer'
import backgroundone from '../img/backgroundone.jpg'

const ThirdPage = () => {
  return (
    <div style={{
      backgroundImage: `url(${backgroundone})`, backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }}>
      <Head />
      <MenuVertical />
      <Options />
      <CompoList />
      <ThirdContainer />
    </div>
  )
}

export default ThirdPage
