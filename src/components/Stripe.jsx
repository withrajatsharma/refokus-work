import React from 'react'

const Stripe = ({img,num}) => {
  return (
    <div className='w-1/5 px-8  py-7 text-diff_white flex justify-between items-center border-t-2 border-b-2 border-r-2 border-zinc-700'>
        <img className='' src={img} alt="" />
        <span className='text-xl font-medium'>{num}</span>
    </div>
  )
}

export default Stripe