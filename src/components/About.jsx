import React from 'react'

const About = () => {
    return (
        <div name="about"
         className='w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
                <div className=" pd-8">
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div> 
                <p className='text-xl mt-20'>
                Hello, I'm sarala, a dedicated full-stack developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in full stack development, I'm actively seeking opportunities for both internships and full-time positions. My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities. If you're looking for a motivated and adaptable developer, I'm excited to bring my expertise to your team.
                </p>
            </div>
        </div>
    )
}

export default About