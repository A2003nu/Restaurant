import React from 'react'
import './whyusCard.css'
export const WhyUsCard = ({item,}:{item:{id:number;title:string;content:string}}) => {
  return (
    <div className="col-lg-4 mt-4 mt-lg-0">
        <div className="box" data-aos='zoom-in' data-aos-delay='200'>
            <span>0{item.id}</span>
            <span>{item.title}</span>
            <span>{item.content}</span>
        </div>
    </div>
  )
}
