import React, { useState } from 'react';
import { Box, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';


function Test() {
	const animationKeyframes = keyframes`
		0% { transform: scale(1) rotate(0); border-radius: 20%; }
		25% { transform: scale(2) rotate(0); border-radius: 20%; }
		50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
		75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
		100% { transform: scale(1) rotate(0); border-radius: 20%; }
	`;
	const animation = `${animationKeyframes} 2s ease-in-out infinite`;
	return (
		<Box
			as={motion.div}
			animation={animation}
			height='40px'
			width='40px'
			// bg='orange.400'
			bgGradient="linear(to-l, #7928CA, #FF0080)"
			drag='x'
			dragConstraints={{ left: -100, right: 100 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition='0.5s linear'
		// not work: transition={{ transition: "0.5", ease: "linear" }}
		/>
	)
}

export default Test;