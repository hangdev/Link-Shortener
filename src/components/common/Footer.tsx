import React from 'react'

const Footer: React.FC = () => {
  const year = new Date().getUTCFullYear();
  return (
    <>
      <footer className='bg-gray-200 text-gray-500 py-3 flex justify-center border-t border-gray-300 shadow-lg'>
        <div>&copy; {year} Shawt.ly. All rights reserved</div>
      </footer>
    </>
  )
}

export default Footer