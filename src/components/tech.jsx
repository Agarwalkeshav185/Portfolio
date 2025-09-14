import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiHtml5, SiCss3, SiJavascript, SiPython, SiMysql } from "react-icons/si";
import { DiRedis, DiJava } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";
import cpp from "../assets/cpp.svg"
import python from "../assets/python.png"

const iconvariants = (dura) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: dura,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Tech = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className='my-20 text-center text-4xl'>
            Technologies
        </motion.h1>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className='flex flex-wrap items-center justify-center gap-4'>

            
            {/* <motion.div variants={iconvariants(1.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs className='text-7xl' />
            </motion.div>
            
            <motion.div variants={iconvariants(1)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis className='text-7xl text-red-700' />
            </motion.div>
            
            <motion.div variants={iconvariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className='text-7xl text-sky-700' />
            </motion.div> */}

            {/* New Icons */}
            <motion.div variants={iconvariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiHtml5 className='text-7xl text-orange-500' />
            </motion.div>
            <motion.div variants={iconvariants(1.8)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCss3 className='text-7xl text-blue-500' />
            </motion.div>
            <motion.div variants={iconvariants(2.2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJavascript className='text-7xl text-yellow-500' />
            </motion.div>
            <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400' />
            </motion.div>
            <motion.div variants={iconvariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500' />
            </motion.div>
            <motion.div variants={iconvariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500' />
            </motion.div>
            <motion.div
          variants={iconvariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img
            src= {cpp}  // Update the path to your actual C++ SVG file
            alt="C++ Logo"
            className="text-7xl"
            style={{ width: '64px', height: '64px' }}  // Adjust size if needed
          />
        </motion.div>
            <motion.div variants={iconvariants(3)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
            <img
            src= {python}  // Update the path to your actual C++ SVG file
            alt="C++ Logo"
            className="text-7xl"
            style={{ width: '64px', height: '64px' }}  // Adjust size if needed
          />
            </motion.div>
            <motion.div variants={iconvariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl' style={{ color: '#00758F' }} />
            </motion.div>


        </motion.div>
    </div>
  );
};

export default Tech;
