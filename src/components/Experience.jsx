import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import javascript from '../assets/javascript.jpg'
import reactimg from '../assets/reactImg.jpg'
import github from '../assets/github.jpg'
import figma from '../assets/figma.jpg'
import mysql from '../assets/mysql.jpg'
import django from '../assets/django.jpg'

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: "JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: reactimg,
            title: "REACT JS",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: mysql,
            title: "MYSQL",
            style: "shadow-sky-400"
        },
        {
            id: 6,
            src: github,
            title: "HTML",
            style: "shadow-gray-400"
        },
        {
            id: 7,
            src: figma,
            title: "HTML",
            style: "shadow-pink-500"
        },
        {
            id: 8,
            src: django,
            title: "PYTHON",
            style: "shadow-green-500"
        },
    ]
    return (
        <div name="experience" className='bg-gradient-to-b
        from-gray-800 to-black w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex-col
            justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4
                    border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies I'have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3
                gap-8 text-center py-8 px-12 sm:px-0'>


                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duaration-500
                            py-2 rounded-md ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>




        </div>
    )
}

export default Experience
