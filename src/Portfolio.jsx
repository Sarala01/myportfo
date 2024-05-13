import React from 'react'
import djangoecom from './assets/djecom.jpg.png'
import login from './assets/login.jpg'
import crud from './assets/crud.jpg'


const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src:djangoecom,
            title: "E-COMMERCE PROJECT",
            description: "In this project i built an e-commerce project called shopy by using programming languange python django ,bootstrap and used mysql database ",
            demo: "https://saralar.pythonanywhere.com",
            code: "https://github.com/Sarala01/shopy.git",
        },
        {
            id:2,
            src:login,
            title: "LOGIN & REG PAGE",
            description: "Created a login and registration page using programming language such as reactjs,htmland css",
            demo: "https://saralogin.netlify.app/",
            code: "https://github.com/Sarala01/login-page.git",
        },
        {
            id:3,
            src:crud,
            title: "CRUD OPERATION",
            description: "This project was bulit to perform create,read,update and delete using reactjs and bootstrap",
            demo: "https://crudapp112.netlify.app/",
            code: "https://github.com/Sarala01/crud_app.git",
        },
       
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

<div className='max-w-screen-lg p-4 mx-auto flex flex-col
justify-center w-full h-full'>
    <div className='pb-8'>
    
        <p className='text-4xl font-bold inline border-b-4 
        border-gray-500'>portfolio
        </p>
        <p className='py-6'>Check out some of work right here</p>
        </div>


        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
        px-12 sm:px-0'>
            {
    portfolios.map(({id,src,demo,code, title, description})=>(
        <div key={id} className='shodow-md shadow-gray-600 rounded-lg'>
        <img src={src} alt="" className='rounded-md bg-base-100 duration-200 hover:scale-105'/>
        <h2 className='class-title block  text-white px-6 py-3 my-2 text items-centertext items-center rounded-md bg-gradient-to-r
           from-slate-600 to-blue-500 '>{title}
                                <br /></h2>
                            <p className='class-description rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 '>{description}</p>
    <div className='flex items-center justify-center'>
    <button  onClick={() => window.open(demo)} className='w=1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
    <button  onClick={() => window.open(code)} className='w=1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
    </div>
    </div>
    ))
}
</div>
</div>
</div>
  )
}

export default Portfolio