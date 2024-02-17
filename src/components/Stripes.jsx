import React from 'react'
import Stripe from './Stripe'
import img1 from '../assets/stripe-1.svg'
import img2 from '../assets/stripe-2.svg'
import img3 from '../assets/stripe-3.svg'
import img4 from '../assets/stripe-4.svg'
import img5 from '../assets/stripe-5.svg'

const Stripes = () => {

  const data =[
    {
      url:img1,num:52
    },
    {
      url:img2,num:2
    },
    {
      url:img3,num:12
    },
    {
      url:img4,num:52
    },
    {
      url:img5,num:5
    },
  ]

  return (
   <section className='flex mb-40'>

    {
      data.map((elem,i) =>{
        return(
          <Stripe key={i} img={elem.url} num={elem.num} />
        )
      })
    }
   </section>
  )
}

export default Stripes