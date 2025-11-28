import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../config'


const EditBlog = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [blog, setBlog] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: '',
    image: ''
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setBlog({
      ...blog,
      [name]: name === 'image' ? e.target.files[0] : value
    })
  }

  const fetchBlog = async () => {

    const response = await axios.get(`${baseUrl}/api/user/blog/${id}`)

    if (response.status === 200) {
      setBlog(response.data.data)
    }

  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.patch(`${baseUrl}/api/user/blog/${id}`, blog, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem('token')
        }
      })

      if (response.status === 200) {
        navigate(`/blog/${id}`)
      }
      else {
        alert("Something went wrong!")
      }

    } catch (error) {
      alert(error?.response?.data?.message)
    }
  }


  useEffect(() => {
    fetchBlog()
  }, [])


  return (
    <Layout>

      <form onSubmit={handleEdit}>
        <div className="bg-indigo-50  flex items-center justify-center px-4 md:px-20 py-10">
          <div className="bg-white rounded-xl shadow-md px-4 sm:px-6 md:px-8 py-8 w-full max-w-3xl">


            <h1 className="text-center text-3xl font-bold text-blue-500 uppercase mb-6">Edit Blog</h1>

            <div className="space-y-2">


              <div>
                <label htmlFor="title" className="block text-lg font-serif text-gray-700 mb-2">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={blog.title}
                  placeholder="Enter blog title"
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required onChange={handleOnChange} />

              </div>

              <div>
                <label htmlFor="subtitle" className="block text-lg font-serif text-gray-700 mb-2">Subtitle:</label>
                <input
                  type="text"
                  name="subtitle"
                  id="subtitle"
                  value={blog.subtitle}
                  placeholder="Enter blog subtitle"
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required onChange={handleOnChange} />

              </div>

              <div>
                <label htmlFor="description" className="block text-lg font-serif text-gray-700 mb-2">Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={blog.description}
                  placeholder="Write your content here..."
                  rows="2"
                  className="w-full p-4 text-gray-700 bg-indigo-50 border-2 border-gray-200 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400" required onChange={handleOnChange}
                ></textarea>
              </div>


              <div>
                <label htmlFor="category" className="block text-lg font-serif text-gray-700 mb-2">Category:</label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  value={blog.category}
                  placeholder="Enter category"
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                  required onChange={handleOnChange} />
              </div>


              <div>
                <label htmlFor="image" className="block text-lg font-serif text-gray-700 mb-2">Upload Image:</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="block w-full border border-gray-300 rounded-md px-4 py-2 text-gray-700 cursor-pointer hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition" onChange={handleOnChange}
                />
              </div>


              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-lg text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-md"
              >
                Add Post
              </button>

            </div>
          </div>
        </div>
      </form>


    </Layout>
  )
}

export default EditBlog
