"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";

const items = [
    {
      id: 1,
      color: "from-red-50 to-blue-300",
      title: "ST7735 Display",
      desc: "Detect temperature through TMP102 and display it on a ST7735 Display. Active the buzzer when the termperature exceeds the set temperature",
      img: "/stdisplay.png",
      link: "https://github.com/b23zyt/stm32f4_st7735_tmp102_buzzer",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "FPGA Stop Watch",
      desc: "Developed a Verilog-based stopwatch system on a Cyclone IV FPGA capable of counting time from 0 to 9999.99 seconds.",
      img: "/stopwatch.png",
      link: "https://github.com/b23zyt/FPGA-stop-watch",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Real Estate App",
      desc: "Built a Real-time chat-enabled Real Estate Application using MERN stack and Socket.io.",
      img: "/E7.png",
      link: "https://github.com/b23zyt/Estate_app",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Temperature Monitor",
      desc: "Developed a Sequential VHDL code for temperature monitoring and programmed it on a Cyclone Max 10",
      img: "/temmonitor.png",
      link: "https://github.com/b23zyt/124_vhdl_temperature_monitor",
    },
  ];

const PortfolioPage = () => {
    return (
        <motion.div className="h-full overflow-y-auto" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}> 
            <div className="h-full">
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
                    My Works
                </div>
                    <div className="h-screen flex flex-col items-center ">
                    {items.map((item) => (
                        <div
                            className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b ${item.color} `}
                            key={item.id}
                        >
                            <div className={`flex flex-col gap-4 ${item.id == 1 ? "text-black" : "text-white"} mt-8`}>
                                <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl">
                                    {item.title}
                                </h1>
                                <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[350px] lg:h-[300px] xl:w-[420px] xl:h-[370px] flex items-center justify-center">
                                    <Image src={item.img} alt="" fill />
                                </div>
                                <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                    {item.desc}
                                </p>
                                <Link href={item.link} className="flex justify-end p">
                                    <button className="p-1 text-sm md:p-2 md:text-md lg:p-3 lg:text-lg bg-white text-gray-600 font-semibold m-2 rounded">Explore</button>
                                </Link>
                                <hr className={`w-3/4 mx-auto mt-10 border-t-2 border-black hidden `} />
                                
                            </div>          
                        </div>
                        
                    ))}
                    <div className="w-screen min-h-screen flex flex-col gap-16 items-center justify-center text-center bg-gradient-to-b from-red-300 to-blue-100">
                        <h1 className="text-8xl">Do you have a project?</h1>
                        <div className="relative">
                        <motion.svg
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                            viewBox="0 0 300 300"
                            className="w-64 h-64 md:w-[500px] md:h-[500px] "
                        >
                            <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                            </defs>
                            <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Front-end Developer and UI Designer
                            </textPath>
                            </text>
                        </motion.svg>
                        <Link
                            href="/contact"
                            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                        >
                            Hire Me
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default PortfolioPage