import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowList/RowList'
import NavBars from '../../Components/Header/NavBars'

const Home = () => {
  return (
    <>
      <NavBars/>
      <Banner/>
      <RowList/>
      <Footer/>
    </>
  )
}

export default Home
