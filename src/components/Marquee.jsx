import React from 'react'

const Marquee = ({image}) => {
  return (
    <div className='flex gap-20 overflow-hidden'>
        {image.map((url,i)=>( 
            <img className='w-28 flex-shrink-0 ' src={url} key={i} alt="" />
        ))}
    </div>
  )
}

export default Marquee