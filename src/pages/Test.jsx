import React from 'react'
import './Test.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const transition = {duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96]}

const Test = () => {
  const navigate = useNavigate()
  const handlePageTransition = () => {
    navigate('/test2')
  }

  return (
    <motion.div 
      exit={{y: "100%"}}
      transition={transition}
      onClick={handlePageTransition}
    className='container'>
    </motion.div>
  )
}

export default Test