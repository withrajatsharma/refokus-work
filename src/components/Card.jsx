import React from 'react'
import Button from './Button'

const Card = ({width,miniP,title,textWidth="60%",bigTitle,text,buttonText}) => {
  return (
    <div style={{width:`${width}`}} className='text-diff_white group duration-200 hover:bg-indigo-500 bg-zinc-800 py-5 rounded-xl'>
        <div className='flex pb-20 flex-col gap-4 px-4 group-hover:px-6 duration-200'>
            <p className='text-sm flex justify-between'><span>{miniP}</span><span>→</span></p>
            <h2 style={{width:`${textWidth}`}} className='text-3xl font-medium'>{title}</h2>
        </div>
        <div className='px-4 '>
        {bigTitle ? <h1 className='text-8xl font-medium py-10'>{bigTitle}</h1>:<h1 className='text-8xl font-medium py-10'>&nbsp;</h1>}
        </div>
        <div className='px-4 h-8 flex items-end'>
        {text ?<p className='text-sm opacity-70'>{text}</p>:(buttonText && <Button clr={"transparent"}>{buttonText}</Button>)}
        </div>
    </div>
  )
}

export default Card
