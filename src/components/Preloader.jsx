import React from 'react';
import './Preloader.css';
import { motion, AnimatePresence } from 'framer-motion';

function Preloader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeOut" } }} // Corrected easing to "easeOut"
        >
          <div className="loader">
            <svg viewBox="0 0 120 120" className="curve">
              <text x="10" y="67" fill="white">Kay Ai</text>
              <path d="M 0, 60 a 60,60 0 0 1 120,0 a 60,60 0 0 1 -120,0 " stroke="white" strokeWidth="2"  strokeDasharray="377 377" strokeDashoffset="0"></path>
            </svg>
            <div className="blackhole">
              <div className="blackhole-circle"></div>
              <div className="blackhole-disc"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
