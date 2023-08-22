import React from 'react'

function Card({news}) {
   
  return ( 
        <div className="w-64 bg-white p-2 m-4">
        <img height="400px" width="400px" src={news.img} alt="" />
        <div className='text-black'>{news.title}</div>
        <div className='text-black'>{news.date}</div>
        </div>
   
  )
}

export default Card
