import React from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/cards/Card'

const Home = () => {
    
  return (
    <Layout>
      <div className='flex flex-wrap justify-center'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </Layout>
  )
}

export default Home
