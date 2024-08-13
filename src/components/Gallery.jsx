import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover'
                src='https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' 
                src='https://images.unsplash.com/photo-1455995446964-ac64c23b70ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80' alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' 
                src='https://images.unsplash.com/photo-1522933001375-72d29575cf05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' 
                src='https://images.unsplash.com/photo-1502208327471-d5dde4d78995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='/' />
            </div>
            <div>
                <img className='w-full h-full object-cover' 
                src='https://images.unsplash.com/photo-1608956905586-adaad6346779?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default Gallery