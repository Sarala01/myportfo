import React from 'react'

export const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen
        bg-gradient-to-b from-black to-gray-800 p-4 text-white' >
            <div>
                <div className='flex flex-col p-4 justify-center
                max-w-screen-lg mx-auto h-full'>
                    <div className='pb-8'>
                    <br /><br /><br /><br />
                    <p className='text-4xl font-bold inline border-b-4
                    border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/vbmKr0eY" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" 
                        name='name'
                         placeholder='enter your name'
                          className='p-2 bg-transparent border-2 rounded-md' />
                        <input type="text" 
                        name='email'
                         placeholder='enter your email'
                          className=' my-4 p-2 bg-transparent border-2 rounded-md' />
                        <textarea name="message"
                         rows="10" placeholder='enter your message'
                         className='p-2 bg-transparent border-2
                        rounded-md text-white focus:outline-none'></textarea>
                        <button class="text-white bg-gradient-to-b
                        from-cyan-500 to-blue-500 px-6 py-3 my-8
                        mx-auto flex items-center rounded-md hover:scale-110 duration-300">Lets talk</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

