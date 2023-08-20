import React from 'react'

function FbPage() {
    const embeddedCode = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaalimat%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`;
  return (
    <div>
      <div className='p-4'>
        <h2 className='bg-[#0335670f] text-black text-sm border-l-4 px-2.5 py-4 border-[#013622]' >
        ফেসবুকে আমরা
        </h2>
      </div>
      <div className='p-4'>
      <div dangerouslySetInnerHTML={{ __html: embeddedCode }} />
      </div>
    </div>
  )
}

export default FbPage
