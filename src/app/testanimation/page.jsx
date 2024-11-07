"use client"

import { motion } from "framer-motion"

const TextPage = () => {
    const variants = {
        variant1: {
            x:400, y:300, opacity: 0.5,
            transition: {
                duration: 3
            }
        },
        variant2: {
            x: 100, y:-300, rotation: 90,
        }
    }
    return <div className="flex items-center justify-center hidden">
        <motion.div    
            className="w-96 h-96 bg-red-300 rounded" 
            variants={variants}
            animate="variant2"
            transition={{delay:2, duration: 4}}
            >
        </motion.div>
    </div>
}

export default TextPage;