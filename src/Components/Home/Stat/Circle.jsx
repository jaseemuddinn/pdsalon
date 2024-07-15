import React from 'react';
import { motion } from 'framer-motion';

const Circle = () => {
  return (
    <motion.div
      className="left-0 top-1/2 transform -translate-y-1/2"
      style={{ width: '200px', height: '200px' }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
    >
        
      {/* <div className="relative w-full h-full"> */}
      <div className=''>
        <p className='invisible'>Jaseemuddin Naseem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio cupiditate, iure ex harum corrupti atque ad!</p>
        <div className="absolute w-full h-full border-dotted border-4 border-gray-500 rounded-full" />
      </div>

      {/* </div> */}
    </motion.div>
  );
};

export default Circle;
