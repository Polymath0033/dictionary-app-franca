import React, { useState,  useEffect } from 'react';
import search from '../icons/search.png';

const Dictionary = ({ darkMode }) => {
   const [searchInput, setSearchInput] =useState("")
   const [dictionary, setDictionary] =useState([])
   
   const getDictionary = async () =>{
    try{
      const word = "succeed"
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      if(!response.ok){
        throw new Error("woops, cen't be empty...")
      }

      const data = await response.json()
      console.log(data)
      setDictionary(data)
      console.log(dictionary)
    }catch(error){
      console.log(error)
    }
}

    useEffect(() =>{
    }, [getDictionary])

   
  return (
    <>
      <div className={`flex justify-between bg-[#1F1F1F] h-[45px] rounded-lg hover:border-[#A445ED] w-[53%] ${darkMode ? "bg-[#1F1F1F] text-white" : "bg-[#F4F4F4] border-transparent text-black text-[20px]"}`}>
        <div className='flex items-center'>
          <input
            type="text"
            value={searchInput}
            onKeyPress={getDictionary}
            onChange={(e)=>setSearchInput(e.target.value)}
            className='w-[300px] bg-transparent text-[18px] shadow outline-none h-[41px] placeholder:mt-4 ml-2 border-transparent' // Use 'border-transparent' to remove the border
            style={{ caretColor: '#A445ED' }}
            placeholder='search for any word'
          />
        </div>

        <div className='mr-3 mt-3 cursor-pointer'>
          <img src={search} alt="logo" onClick={getDictionary}/>
        </div>
      </div>

      <div>
        {dictionary && dictionary.map((meaning, index) =>(
            <div key={index}>
                <p className='text-white'>{meaning.word}</p>
                <p className='text-white'>{meaning.phonetic}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default Dictionary
