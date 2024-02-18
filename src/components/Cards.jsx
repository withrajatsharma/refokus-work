import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <section className='max-w-screen-xl mx-auto  mt-20 py-10'>
        <div className='flex gap-1'>
        <Card text={"Explore what drives our team."} width={"40%"} miniP={"Up Next: News"} title={`Insigths and behind the scenes`} />
        <Card buttonText={"Contact us"} width={"60%"} bigTitle={"Start a Project"} miniP={"Get In Touch"} textWidth={"40%"} title={"Let's get to it, together."}/>
        </div>
        <div className=' w-full flex gap-10 mt-5 text-sm text-zinc-400'>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Impressum</p>
            <p>Terms</p>
        </div>
    </section>
    
  ) 
}

export default Cards