'use client';
import React, { useEffect, useState } from 'react'
import './special.css'

export default function Specials  ()  {

const [data,setData]=useState<any | []>([]);
const [items,setItems]=useState<any | []>([]);

const getSpecialData=()=>{
    fetch(`http://localhost:3000/api/specials`)
    .then(res=>res.json())
    .then(data=>setData(data))
.catch(e=>console.log(e.message));
}

useEffect(()=>{
    getSpecialData();
},[])
  return (
    <div>Specials</div>
  )
}
