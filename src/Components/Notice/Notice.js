import React from 'react'

function Notice() {
    const news= [
        {title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" },
        {title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" },
        {title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" },
        {title:"ভর্তি বিজ্ঞপ্তি ১৪৪৪-৪৫ হি. / ২০২৩-২৪ খ্রি.", date:"২৩ এপ্রিল ২০২৩" }
      ]
  return (
    <div>
    <div className='px-4'>
        <h2 className='bg-black text-white text-center text-sm border-l-4 px-2.5 py-4 border-[#013622]' >
        নোটিশ
        </h2>
      </div>
    <div className='m-4'>
      {news.map(item => {return(
            <div className='flex bg-[#013622] text-white p-2 m-1'>
            <div>
                <h4>{item.title}</h4>
            </div>
            <div>
                <h5>{item.date}</h5>
            </div>
            </div>
      )})}
    </div>
    </div>
  )
}

export default Notice
