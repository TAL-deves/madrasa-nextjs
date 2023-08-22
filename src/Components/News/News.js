import React from 'react'
import Card from '../Card/Card'

function News() {
  const news= [
    {img:"https://darululoomhathazari.com/media/uploads/2e4ce9a9cefbabd59faa31b225e4e026.jpg",title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" },
    {img:"https://darululoomhathazari.com/media/uploads/2e4ce9a9cefbabd59faa31b225e4e026.jpg",title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" },
    {img:"https://darululoomhathazari.com/media/uploads/2e4ce9a9cefbabd59faa31b225e4e026.jpg",title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" },
    {img:"https://darululoomhathazari.com/media/uploads/2e4ce9a9cefbabd59faa31b225e4e026.jpg",title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" }
  ]
  return (
    <div>
    <div className='px-4'>
        <h2 className='bg-black text-white text-center text-sm border-l-4 px-2.5 py-4 border-[#013622]' >
        সংবাদ
        </h2>
      </div>
    <div  className='bg-[#013622] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4 justify-items-center' >
      {news.map(item => {return(
            <Card news={item}/>
      )})}
      
    </div>
    </div>
  )
}

export default News
