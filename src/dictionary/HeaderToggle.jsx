import React, { useState } from 'react';
import arrow from '../icons/arrow.png';
import book from '../icons/book.png';
import line from '../icons/line.png';
import toggle from '../icons/toggle.png';
import DictionarySearch from '../dictionary/DictionarySearch';

const HeaderToggle = () => {
  const [fonts, setFonts] = useState('sans');
  const [darkMode, setDarkMode] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleFontClick = (selectedFont) => {
    setFonts(selectedFont);
  };

  return (
    <>
      <div className={`h-screen w-screen ${darkMode ? 'dark' : 'white'}`}>
        <div
          className={`flex justify-evenly h-full ${
            darkMode ? 'dark:bg-black' : 'bg-white text-black'
          }`}
        >
          <div className='mt-10'>
            <img src={book} alt='logo' />
          </div>
          <div className='flex gap-5 items-stretch relative'>
            <div className='mt-1'>
              <div className='flex items-center relative'>
                <div>
                  {isHidden && (
                    <div className={`bg-[#1F1F1F] cursor-pointer absolute top-16 left-40 z-20 ${darkMode ? "bg-black text-white" : "bg-white text-black"}`} id='fonts-box'>
                      <p
                        className='pb-2 cursor-pointer hover:text-[#A445ED]'
                        onClick={() => handleFontClick('manrope')}
                      >
                        manrope
                      </p>
                      <p
                        className='pb-2 cursor-pointer hover:text-[#A445ED]'
                        onClick={() => handleFontClick('roboto')}
                      >
                        roboto
                      </p>
                      <p
                        className='pb-2 cursor-pointer hover:text-[#A445ED]'
                        onClick={() => handleFontClick('sans')}
                      >
                        sans
                      </p>
                    </div>
                  )}
                </div>
                <div className='flex gap-5'>
                  <p className={`text-white ml-48 mt-7 text-[18px] ${darkMode ? "text-white" :"text-black"}`}>{fonts}</p>
                  <img
                    onClick={() => setIsHidden(!isHidden)} // Toggle isHidden state
                    alt='logo'
                    src={arrow}
                    className='h-2 cursor-pointer mb-24 mt-10'
                  />
                  <img src={line} alt='logo' className='h-5 mt-8' />
                </div>
              </div>
            </div>
            <div className='flex gap-5 h-4 mt-10'>
              <img
                onClick={() => setDarkMode(!darkMode)}
                src={toggle}
                alt='logo'
                className={darkMode ? 'dark:bg-black' : 'bg-white text-black'}
              />
            </div>
          </div>
          {/* Move DictionarySearch here */}
          <div className='absolute top-28 left-0 z-10 w-full'>
            <div className='flex items-center justify-center'>
              <DictionarySearch darkMode={darkMode}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderToggle;
