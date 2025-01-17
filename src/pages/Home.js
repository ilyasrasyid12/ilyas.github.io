import React from 'react';
//import images
import myImg from '../img/foto_sendiri/2.jpg';
//import link
import {Link} from 'react-router-dom'
import cvIlyas from "../cv/CV_Ilyas.pdf";
//import motion
import {motion} from 'framer-motion';
//import transition
import { transition1 } from '../transitions';

const Home = () => {
  return(
    <motion.section 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={transition1}  
    className='section'
      >
      <div className='container mx-auto h-full relative'>
        {/* text & img wrapper */}
        <div className='flex flex-col justify-center'>
          {/* text */}
          <motion.div 
          initial={{opacity: 0, y: '-50%'}}
          animate={{opacity: 1, y: '0'}}
          exit={{opacity: 0, y: '-50%'}}
          transition={transition1} 
          className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>
            AI Software Engineer<br/> & UIX Designer
            </h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Singaraja, Bali</p>
            <a className='btn mb-[30px]' href={cvIlyas} download="cv-ilyas.pdf">Download CV Saya</a>
          </motion.div>
          {/* img */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div 
              initial={{scale: 0}}
              animate={{scale: 1}}
              exit={{scale: 0}}
              transition={transition1} 
              className='relative lg:right-100 lg:max-w-[600px]'>
              <img src={myImg}></img>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
