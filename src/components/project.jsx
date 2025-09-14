import React from 'react'
import { PROJECTS } from '../constants'
import{motion} from "framer-motion"

const project = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projects
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-10">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="relative bg-neutral-900 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-all duration-300 group overflow-visible"
                    >
                        {/* Gradient shadow below the card */}
                        <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 w-4/5 h-8 z-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"
                            style={{background: 'linear-gradient(90deg, #a78bfa 0%, #f472b6 60%, #64748b 100%)'}}></div>
                        <div className="relative z-10 w-full flex flex-col items-center">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-40 h-40 object-cover rounded-xl mb-4 border border-neutral-800"
                            />
                            <h6 className="mb-2 font-semibold text-lg text-center">{project.title}</h6>
                            <p className="mb-4 text-neutral-400 text-center text-sm">{project.description}</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="rounded bg-purple-200 px-2 py-1 text-xs font-medium text-purple-900"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default project