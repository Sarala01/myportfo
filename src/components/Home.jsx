import React from 'react'
// import hero from '../assets/hero.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b via-black from-black
         to-gray-800' >
            <div className='max-w-srceen-sm mx-auto flex flex-col
             items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a full stack developer</h2>
                    <p className='text-gray-500 py max-w-md'>
                        i'am post graduate
                        Currently,i love to work on development
                        using latest technologies.
                    </p >
                </div>
                <Link to="portfolio" smooth duration={500} className='group text-white px-6 py-3 my-2 text items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer'>
                    portfolio
                    <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25}
                    className='ml-1'/>
                    </span>
                </Link >
                <div>
                {/* <img src={hero} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-half ' /> */}
                </div>
            </div>
        </div>
    )
}

export default Home