import React from 'react'
import { EDUCATION } from '../constants/index.js'
import{motion} from "framer-motion"

const education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Education</motion.h2>
        <div> 
            {EDUCATION.map((edu,index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration: 1}}
                        className='w-full lg:w-1/4 flex justify-center items-start'>
                        <img 
                            width={150}
                            height={150}
                            src={edu.image}
                            alt={edu.title}
                            className='mb-6 rounded bg-white p-2 border border-neutral-800 object-contain'
                        />
                    </motion.div>
                    <motion.div
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x:100}}
                        transition={{duration:1}}
                        className='w-full max-w-xl lg:w-3/4 flex flex-col justify-center'>
                        <div className="flex gap-2 mb-2 flex-wrap items-center">
                            <span className="bg-neutral-800 text-white text-xs px-3 py-1 rounded-full font-semibold">{edu.timePeriod}</span>
                            <span className="bg-blue-200 text-blue-900 text-xs px-3 py-1 rounded-full font-semibold">PERCENT: {edu.percent}</span>
                        </div>
                        <h6 className='mb-1 font-bold text-lg'>{edu.title}</h6>
                        <div className='text-sm text-neutral-400 mb-1'>{edu.institution}{edu.board && `, ${edu.board}`}</div>
                        <div className='text-xs text-neutral-500 mb-2'>{edu.location}</div>
                        <p className='mb-2 text-neutral-300 text-sm'>{edu.description}</p>
                        {edu.achievements && edu.achievements.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-2">
                                {edu.achievements.map((ach, i) => (
                                    <span key={i} className="rounded bg-purple-200 px-2 py-1 text-xs font-medium text-purple-900">
                                        {ach}
                                    </span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </div>
            ))}
        </div>



    </div>
  )
}

export default education