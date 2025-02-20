'use client'
import React, { useEffect, useState } from 'react'
import { filters } from '../data/data'
import './menu.css'
import { SectionTitle } from './SectionTitle'
import { MenuItem } from './MenuItem'
import { Preloader } from './Preloader'
export const Menu = () => {
const [data,setData]=useState([]);
const [items,setItems]=useState([]);


    const getMenuData=()=>{
  fetch('http://localhost:3000/api/menu')
  .then(res=>res.json())
  .then(menu=>setData(menu))
  .catch(e=>console.log(e.message));
    };

    useEffect(()=>{
        getMenuData();
    },[]);

    useEffect(()=>{
        setItems(data);
    },[data]);

    const handleFilterChange=(id:number,category:string)=>{
if(category === 'all'){
    setItems(data);
}else{
    setItems(
        data.filter((item:{category:string})=>item.category===category)
    );
 
}
    };
    return (
    <section className="menu section-bg" id="menu">
        <div className="container" data-aos='fade-up'>
            <SectionTitle title='Our Menu' subtitle='Check Our Tasty Menu' />
            <div className="row" data-aos='fade-up' data-aos-delay='100'>
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id='menu-filters'>
                        {filters.map(filter=>(
                            <li key={filter.id} onClick={()=>handleFilterChange(filter.id,filter.category)} className= {`${filter.active ? 'filter-active' : undefined}`}>{filter.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row menu-container" data-aos='fade-up' data-aos-delay='200'>
                {!items ? (
                    <Preloader />
                ) : items.length > 0 ?(
                    items.map(
                        (item:{
                        id:number;
                        name:string;
                        preview:string;
                        price:number;
                        ingredients:string;
                    }) => <MenuItem key={item.id} item={item} />
                )
            ):(
                <Preloader />
            )}
            </div>
        </div>
    </section>
  )
}
