import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import Card from './components/cards/Card'
import axios from 'axios'
import { baseUrl } from '../../config'

const Home = () => {
    
  const [blogs,setBlogs] = useState([])
  const fetchBlogs = async()=>{
    const response = await axios.get(`${baseUrl}/api/user/blog`)
    if(response.status===200){
      setBlogs(response.data.data)
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <Layout>
      <div className='flex flex-wrap justify-center'>
        {
          blogs.length > 0 && blogs.map((blog)=>{
            return (
                 <Card blog={blog}/>
                 
            )
          })
     
        }
      </div>
    </Layout>
  )
}

export default Home
