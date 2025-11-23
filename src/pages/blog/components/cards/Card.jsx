import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
    return (
        <>
        <Link to='/blog/id'>
            <div className="max-w-sm m-4 rounded overflow-hidden shadow-lg">
                <img className="w-full" src="https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?resize=768,512" alt="Sunset in the mountains"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>
            </div>
        </Link>
        </>
    )
}

export default Card
