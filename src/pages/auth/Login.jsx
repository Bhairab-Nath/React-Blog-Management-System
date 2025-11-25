import React from 'react'
import From from './components/form/From'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../config'

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/api/user/login`, data)

      if (response.status === 200) {
        localStorage.setItem('token',response.data.token)
        navigate('/')
      }
      else {
        alert("Login Failed!")
      }
    } catch (error) {
      alert(error?.response?.data?.message)
    }


  }

  return (
    <From type='Login' submit={handleLogin} />
  )
}

export default Login
