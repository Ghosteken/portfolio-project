'use client';


import React from 'react'
import {inView, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}



const SkillDataProvider = ({src,width,height,index} : Props)=> {
    const {ref,InView} = useInView = ({
        triggerOnce: true,
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},

    }
    const animationDelay = 0.3
  return (
    <motion.div
    ref={ref}
    initial = 'hidden'
    variants={imageVariants}
    animate={inView ? 'visible' : 'hidden'}
    custom={index}
    >


    </motion.div>
  )
}

export default SkillDataProvider