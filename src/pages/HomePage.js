import React, { useEffect } from 'react'

import TopBar from '../components/TopBar'
import Footer from '../components/Footer'
import HeaderCard from '../components/HeaderCard'
import ResearchCard from '../components/ResearchCard'
import NewsCard from '../components/NewsCard'
import SeeAlsoCard from '../components/SeeAlsoCard'
import PublicationsCard from '../components/PublicationsCard'

import { useDispatch, useSelector } from 'react-redux'
import { getPublications } from '../redux/slices/publicationsSlice'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPublications())  
  },[])

  return (
    <>
        <TopBar activeKey={null}/>
        <HeaderCard/>
        <ResearchCard />
        <NewsCard />
        <SeeAlsoCard />
        <PublicationsCard />
        <Footer/>
    </>
  )
}

export default HomePage