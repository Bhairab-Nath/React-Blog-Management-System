import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4 px-8">
                <div className="flex items-center">


                    <div className="flex items-center gap-1">
                        <Link to='/'>
                            <span className="font-bold text-3xl text-gray-800">Blog</span>
                            <span className="font-bold text-3xl text-blue-600">Era</span>
                        </Link>
                    </div>


                    <div className="ml-auto flex-1 max-w-xs">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>


                    <ul className="flex items-center gap-6 ml-auto">
                        <li>
                            <Link to='/blog/add'
                                className="text-blue-600 font-semibold hover:text-blue-700 transition"
                            >
                                Create
                            </Link>
                        </li>

                        <li>
                            <Link to='/login'
                                className="text-blue-600 font-semibold hover:text-blue-700 transition"
                            >
                                Login
                            </Link>
                        </li>

                        <li>
                            <Link to="/register"
                                className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Register
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
