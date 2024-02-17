import React from 'react'
import Button from './Button'
import { twMerge as tm } from 'tailwind-merge'

const Product = ({data}) => {
  return (
    <div className={` duration-200 py-7 delay-100 hover:py-14 w-full group items-center flex justify-between text-diff_white px-24  
    hover:bg-gradient-to-r ${data.clr}`}>
        <h1 className='text-5xl font-medium'>{data.title}</h1>
        <div className=' w-1/3 pr-20'>
            <p className='mb-4 text-lg'>{data.desc}</p>
            <div className='duration-200 opacity-0 group-hover:opacity-100 flex items-center gap-5'>
                {data.live && <Button>Live Website</Button>}
                {data.case && <Button>Case Study</Button>}
            
            </div>
        </div>
    </div>
  )
}

export default Product