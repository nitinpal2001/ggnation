import React from 'react'

export default function CsCard(props) {
  return (
    <div className='cscard' style={{backgroundColor:`${props.bgColor}`,color:`${props.titleColor}`}}>
        <h6>{props.title}</h6>
        <p>We’re all about collaboration. We trust each other to make great things. And it’s our responsibility to create an environment that helps you do your best work: balancing time spent together with time to do your own thing. Come by, you’ll see what we mean.</p>
    </div>
  )
}
