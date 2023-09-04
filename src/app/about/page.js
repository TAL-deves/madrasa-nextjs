"use client"
import Link from 'next/link'
import { motion } from 'framer-motion';
import { useState } from 'react';
import DropdownMenu from '@/Components/DropdownMenu/DropdownMenu';

 
function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='bg-black'><motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className='text-white'>Welcome to My Framer Motion App!</h1>
    <div>
      <button className='text-white' onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      <DropdownMenu isOpen={isOpen} />
    </div>
  </motion.div>
  <motion.div layout />
  
  </div>
  )
}
 
export default About