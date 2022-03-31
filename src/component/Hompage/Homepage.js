import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='md:px-16 py-8 bg-cyan-100'>
            <div className='flex flex-col justify-center h-[80vh] items-center'>
                <h1 className=' font-mono text-xl md:text-5xl '>
                    Welcome to CRYPTO Cipher<span className='text-6xl'>🤑</span>
                </h1>
                <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>
                    <Link to={"/coins"}>Explore Coins</Link>
                </button>
            </div>
        </div>
    )
}

export default Homepage