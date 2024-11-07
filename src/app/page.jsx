"use client"

import { motion } from "framer-motion";

import Image from "next/image";

const Homepage = () => {
  return(
    // let the text be invisible at before the animation
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}> 
      <div className="h-full flex flex-col items-center justify-center lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 lg:pb-24">
        {/*image */}
        
        <div
          className="relative lg:w-full h-full flex justify-center items-center lg:flex-1 z-0"
          style={{ width: "calc(50vh - 3rem)", height: "calc(50vh - 3rem)" }}
        >
          <Image
            src="/star.png"
            alt="Patrick Star"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* <div className="relative" style={{ width: "calc(50vh - 3rem)", height: "calc(50vh - 3rem)" }}>
          <Image src="/star.png" alt="Patrick Star" fill className="object-contain object-center" />
        </div> */}


        {/* text */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center mt-8 lg:flex-1">
          {/* TITLE */}
          <h1 className="text-4xl font-bold">Welcome to my website🥱!</h1>
          <p className="">I'm Benjamin Zeng, a second year student in Electrical Engineering @ the University of Waterloo. </p>
          <div className="flex gap-12">
            <button className="p-4 rounded-lg right-black bg-black text-white">View my work</button>
            <button className="p-4 rounded-lg right-black">Contact</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
