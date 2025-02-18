import React from 'react'
import './heroBtn.css'
export const HeroBtn = ({name,target}:{name:string;target:string}) => {
    const handleScrollTo=(section:string)=>{
        
    }
    return (
   
   <a 
   onClick={()=>handleScrollTo(target)} className={`btn-hero animated fadeInUp scrollto ${name.includes('book') ? 'ms-4' : undefined}`}>
    {name}
   </a>
  )
}
