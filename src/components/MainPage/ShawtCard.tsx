import React, {useRef, useState} from 'react';
import {GrCopy} from 'react-icons/gr';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ShawtCard: React.FC = () => {
  const [shawtlify, setShawtlify] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = async () => {
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_BITLY_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          long_url: inputValue,
        })
      }

      const response = await fetch('https://api-ssl.bitly.com/v4/shorten', options);
      const data = await response.json();
      setShawtlify(data.link);
      setShowResult(true);

    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-[600px] h-[400px] sm:h-auto md:h-[400px]">
      <h2 className="text-lg  mb-2">Enter a long URL below to shawt.lify it</h2>
      {/* Input Field */}
      <div className='flex items-center border rounded-md p-2 focus-within:ring-2 focus-within:ring-gray-400'>
        <input className='flex-grow px-1 outline-none focus:border-gray-400' type="text" placeholder='Enter a long URL' value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>
      </div>
      <div className='mt-4'>
        <button className='bg-green-500 active:bg-green-600 p-4 rounded-md text-white w-full font-bold' type='button' onClick={handleButtonClick}>SHAWT.LIFY URL</button>
      </div>

      {showResult && (
        <div className='mt-14 flex items-center'>
          <div className='flex-grow border rounded-tl-md rounded-bl-md p-2 focus-within:ring-2 focus-within:ring-gray-400 bg-gray-100'>
            <input id="foo" className='w-full px-1 outline-none focus:border-gray-400 bg-gray-100' type="text" value={shawtlify}/>
          </div>
          <CopyToClipboard text={shawtlify}>
          <button className="bg-gray-300 px-3 h-[42px] rounded-tr-md rounded-br-md active:bg-gray-200" type="button">
            <GrCopy />
          </button>
        </CopyToClipboard>
        </div>
      )}
    </div>
  )
}

export default ShawtCard