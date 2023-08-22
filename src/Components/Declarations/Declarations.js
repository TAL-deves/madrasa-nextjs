import React from 'react'
import News from '../News/News'
import Notice from '../Notice/Notice'

function Declarations() {
  return (
    <div className='flex flex-col md:flex-row justify-center'>
      <News/>
      <Notice/>
    </div>
  )
}
 
export default Declarations
