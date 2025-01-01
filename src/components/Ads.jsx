import React from 'react'
import adsImage from '../assets/image.png'

const Ads = () => {
  return (
    <div className='w-[100%] h-[161px] px-7 my-10 flex items-center justify-center'>
      <div className='w-[1387px] h-[100%]'>
      <img  className='w-[1387px] h-[100%]'
       src={adsImage} alt=""  />
      </div>
    </div>
  )
}

export default Ads
