import React from 'react'
import PublishImg from '../assets/publishimg.png'
import CsCard from './CsCard'

export default function Publishers() {
  return (
    <div className='publishers'>
        <h1>PUBLISHERS</h1>
        <img src={PublishImg} alt="" />
        <div className="cscards">
        <CsCard title="COUNTER STRIKE" bgColor="#1060FF"/>    
        <CsCard title="COUNTER STRIKE" bgColor="#FFC612" titleColor="black"/>    
        <CsCard title="COUNTER STRIKE" bgColor="#1060FF"/>    
        <CsCard title="RIOT GAMES" bgColor="#FFC612" titleColor="black"/>    
        </div>
    </div>
  )
}
