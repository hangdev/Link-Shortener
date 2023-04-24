import React from 'react'

const NavHeader : React.FC = () => {
  return (
    <>
      <div className='bg-gray-200 border-b border-gray-300 shadow-lg sticky top-0 z-30'>
        <div className='max-w-7x1 mx-auto grid grid-cols-3 z-30 px-8 py-3 sm:px-6 lg:px-8'>
          <div className='flex items-start'>
            <h1 className='text-2xl'>Shawt.lify</h1>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default NavHeader