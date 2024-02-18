import React, { useRef, useState } from "react";
import img1 from "../assets/work-1.png";
import img2 from "../assets/work-2.png";
import img3 from "../assets/work-3.png";
import img4 from "../assets/work-4.png";
import img5 from "../assets/work-5.png";

import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


const Work = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  //  ref= useRef(null);

  

  const workImages=[
    {
      url:img1,top:"50%",left:"49%",isactive:true
    },
    {
      url:img2,top:"56%",left:"45%",isactive:false
    },
    {
      url:img3,top:"45%",left:"55%",isactive:false
    },
    {
      url:img4,top:"60%",left:"48%",isactive:false
    },
    {
      url:img5,top:"65%",left:"52%",isactive:false
    }
  ]


  return (
    <section id="work" className=" overflow-hidden pt-20 pb-20 max-w-screen-xl mx-auto text-diff_white relative">
      <h1 className="text-[38.5vw] text-center leading-none font-medium">
        work
      </h1>

      <div className="w-full h-full absolute left-0 top-0 ">

        {
          workImages.map((img,i) => {
            
            return(

              img.isactive && (<img key={i} style={{top:img.top,left:img.left}} className=" h-2/5 rounded-lg absolute -translate-x-1/2 -translate-y-1/2" src={img.url} alt="" />)
              ) 
              
            }
          )
        }

      </div>

    </section>
  );
};

export default Work;
