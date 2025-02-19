import React from 'react'
import './whyUs.css'
import { WhyUsCard } from '../components/WhyUsCard';
import { SectionTitle } from '../components/SectionTitle';

async function getWhyUsData() {
    const res=await fetch('http://localhost:3000/api/whyus');
    return res.json();
}

export default async function WhyUs  () {
  const items:[]=await getWhyUsData();
  
    return (
    <section className="why-us" id='why-us'> 
    <div className="container">
        <SectionTitle title='WHY US' subtitle='Why Choose Our Restaurant'/>
        <div className="row">
            {items && 
            items.length >0 && 
            items.map(
                (item:{id:number;title:string; content:string})=>(
               <WhyUsCard key={item.id} item={item} />
                )
                )}
        </div>
    </div>
    </section>
  )
}
