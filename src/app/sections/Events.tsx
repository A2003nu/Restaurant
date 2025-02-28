'use client'
import React,{useState,useEffect} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import {Autoplay,Pagination} from 'swiper/modules';
import './events.css'
export default function Events() {
    const [slides,setSlides]=useState<any | []>([]);
    const getEventsData=()=>{
        fetch('http://localhost:3000/api/events')
        .then(res=>res.json())
        .then(data=>setSlides(data))
        .catch(e=>console.log(e.message));
    };

    useEffect(()=>{
        getEventsData();
    },[])
  return (
    <div>Events</div>
  )
}
