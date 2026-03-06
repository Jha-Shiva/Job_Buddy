import React, { useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
    
  return (
    <div className='flex justify-between items-center Roboto shadow-md shadow-mist-200'>
        <div className="flex items-center">
            {/* Add your logo here */}
            <img src="/logo.png" alt="logo" className='h-20 cursor-pointer' />
            <h1 className='text-3xl font-bold  mb-4 cursor-pointer'>Job Buddy</h1>
        </div>
        {/* login and signup buttons and bg-changer */}
        <div className="sm:flex items-center gap-2">
            <div className='border transition delay-100 duration-300 ease-in hover:bg-gray-800 hover:text-white px-4 py-2 rounded mr-2'>
                <Link to={'/sign-in'}>Sign In</Link>
            </div>
            <div className='bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-700 text-white px-4 py-2 rounded mr-2'>
                <Link to={'/sign-up'}>Sign Up</Link>
            </div>
            <div className='py-3 px-4 border rounded-xl ransition duration-300 ease-in-out hover:bg-gray-700 hover:text-white mr-3'>
                <MdOutlineWbSunny />
            </div>
        </div>
    </div>
  )
}

export default Header