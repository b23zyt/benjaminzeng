"use client"
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {

    //enable scroll animation
    const containerRef = useRef();
    const {scrollYProgress} = useScroll({container: containerRef});


    //check if skill is in the viewport
    const skillRef = useRef();
    const IsSkillRefInView = useInView(skillRef, {margin: "-100px"}); //"true" when see in viewport

    const experienceRef = useRef();
    const IsExperienceRefInView = useInView(experienceRef, {margin: "-100px"});


    return (

        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}> 
            {/* container */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* text container */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* biography */}
                    <div className="flex flex-col gap-12 justify-center">
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        <p className="text-lg">The most popular sentence generator tool is Wordkraft AI. This AI software uses a sophisticated algorithm to generate unique, grammatically correct sentences based on a large corpus of existing text.</p>
                        <span className="italic">....................</span>
                    

                        <div className="self-end p-0 m-0">
                            <svg 
                                width="165"
                                height="110"
                                viewBox="0 0 370 114"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M215 1.00001C217.163 2.71545 217.837 4.15103 218.355 6.84766C219.898 29.8236 193.487 58.4934 179.562 75.1289C178.093 76.8892 176.638 78.6613 175.188 80.4375C168.593 88.4476 161.439 95.7737 154 103C154.908 103.289 155.815 103.578 156.75 103.875C160 105 160 105 161.906 106.113C164.567 107.24 165.942 106.931 168.746 106.32C169.66 106.133 170.573 105.945 171.515 105.752C172.961 105.441 172.961 105.441 174.438 105.125C196.101 100.892 196.101 100.892 205.875 106.566C211.069 108.949 216.6 109.986 222.162 111.212C227.49 112.386 232.668 113.752 237.858 115.439C241.968 116.515 244.854 115.559 248.562 113.75C251.098 112.044 251.098 112.044 253.258 109.629C258.459 104.643 266.102 99.4988 273.562 99.625C274.697 99.7488 275.831 99.8725 277 100C277.722 99.7731 278.444 99.5463 279.188 99.3125C282.074 98.8148 283.694 100.398 286 102C284.405 110.93 280.277 116.594 273 122C272.67 122.66 272.34 123.32 272 124C273.284 124.081 274.568 124.162 275.891 124.246C283.138 124.975 290.146 126.786 297.217 128.465C341.837 138.992 387.101 146.378 433 147C433 147.99 433 148.98 433 150C392.172 163.609 319.108 137.788 278.099 128.331C273.219 127.214 269.863 126.491 265 128C262.265 129.804 259.679 131.759 257.07 133.742C242.408 144.524 226.399 151.052 208 149C205.477 148.016 204.31 147.364 202.562 145.313C201.843 142.356 202.509 140.476 203.859 137.793C207.703 131.752 213.145 129.269 219.688 126.75C220.639 126.381 220.639 126.381 221.61 126.004C232.958 121.92 244.092 121.766 255.996 122.518C261.668 122.688 265.153 122.512 269.551 118.715C270.734 117.509 271.886 116.27 273 115C273.609 114.339 274.218 113.678 274.845 112.997C277.281 110.325 278.843 108.472 280 105C279.325 105.312 278.649 105.624 277.953 105.945C276.615 106.529 276.615 106.529 275.25 107.125C273.927 107.717 273.927 107.717 272.578 108.32C270 109 270 109 268.012 107.926C267.016 107.468 267.016 107.468 266 107C259.836 109.728 254.523 114.053 250 119C246.255 121.496 243.332 121.432 239 121C236.415 120.313 234.004 119.584 231.5 118.688C224.566 116.344 217.749 114.902 210.523 113.773C206.334 112.854 202.512 111.692 199.585 108.417C197.049 106.15 194.754 106.701 191.492 106.814C187.457 107.115 183.492 107.658 179.5 108.313C178.315 108.489 178.315 108.489 177.105 108.67C169.651 109.86 162.273 111.295 156.5 116.438C152.21 119.955 148.158 122.027 143 124C141.695 124.524 140.39 125.049 139.086 125.574C137.662 126.135 136.238 126.693 134.812 127.25C134.135 127.521 133.458 127.792 132.76 128.071C128.677 129.625 125.357 130.284 121 130C117.747 130 115.244 132.019 112.5 133.625C111.925 133.956 111.35 134.288 110.758 134.629C108.057 136.192 105.37 137.772 102.714 139.41C96.4074 143.284 89.9409 146.592 83.25 149.75C82.1522 150.27 81.0544 150.789 79.9233 151.324C77.677 152.385 75.4294 153.443 73.1807 154.498C70.3462 155.837 67.5271 157.202 64.7109 158.578C50.3299 165.49 35.3846 170.583 20.2734 175.629C19.5984 175.854 18.9233 176.08 18.2277 176.312C13.628 177.833 9.60434 179.143 4.75 179.063C2.89375 179.032 2.89375 179.032 1 179C0.267591 173.263 1.53303 170.053 4.91407 165.395C11.356 158 19.2251 152.485 27.8203 147.863C30.4972 146.295 32.9061 144.64 35.4102 142.82C42.0479 138.127 49.1363 134.355 56.3125 130.563C57.0167 130.189 57.7208 129.815 58.4463 129.43C69.9943 123.323 81.5776 118.096 94 114C95.3766 113.522 96.7529 113.043 98.1289 112.563C109.95 108.548 122.609 105.276 135.109 104.695C146.423 104.181 146.423 104.181 155.312 97.6875C156.876 95.7928 158.439 93.897 160 92C160.993 91.175 161.985 90.35 163.008 89.5C166.034 86.9717 168.198 84.4587 170.562 81.3125C170.979 80.7607 171.395 80.2089 171.824 79.6404C176.585 73.2933 181.223 66.8536 185.836 60.3984C187.745 57.73 189.677 55.0872 191.664 52.4766C202.413 38.2253 210.873 22.6842 214 5.00001C197.129 9.45972 183.01 17.0103 169.095 27.4312C167.018 28.9863 164.927 30.5202 162.832 32.0508C155.317 37.5745 148.074 43.3363 141.008 49.4219C138.226 51.8059 135.408 54.131 132.562 56.4375C129.591 58.8508 126.651 61.2892 123.766 63.8047C116.312 70.3027 108.657 76.3683 100.699 82.2383C97.5757 84.5486 94.5579 86.9623 91.5625 89.4375C84.8433 94.8106 79.1622 98.9614 70.2383 98.4063C66.7025 97.7645 65.175 96.8766 63 94C62.318 90.9981 62.0722 88.0733 62 85C63.98 84.505 63.98 84.505 66 84C66.2681 85.1344 66.5363 86.2688 66.8125 87.4375C67.2044 88.6131 67.5963 89.7888 68 91C72.6787 92.5596 75.955 92.832 80.5156 90.9766C86.6524 87.803 91.8079 83.8769 97.0586 79.418C100.235 76.8071 103.513 74.4244 106.875 72.0625C117.858 64.3138 128.265 56.0181 138.483 47.292C150.751 36.8444 163.627 26.9971 177 18C177.844 17.429 178.689 16.8579 179.559 16.2695C205.633 -0.873468 205.633 -0.873469 215 1.00001ZM138 115C140.094 116.339 140.094 116.339 142.863 115.074C144.002 114.617 145.14 114.159 146.312 113.688C147.443 113.238 148.574 112.788 149.738 112.324C150.815 111.887 151.891 111.45 153 111C154.667 110.333 156.333 109.666 158 109C157.67 108.34 157.34 107.68 157 107C148.194 105.864 144.318 109.091 138 115ZM98.1602 114.84C75.8893 122.339 55.4732 132.917 36 146C35.2564 146.49 34.5127 146.979 33.7466 147.484C25.7809 152.744 18.3219 158.237 11.5 164.938C10.9536 165.469 10.4072 166.001 9.84424 166.549C6.82175 169.653 5.6455 171.767 5 176C14.586 174.175 23.524 171.676 32.6875 168.313C33.8006 167.916 34.9137 167.52 36.0606 167.111C53.1393 160.935 69.5875 153.514 85.8125 145.375C86.68 144.941 87.5475 144.508 88.4412 144.061C108.609 133.947 126.718 122.553 144 108C133.247 102.624 109.132 111.305 98.1602 114.84ZM209.426 138.254C207.858 140.173 207.398 141.577 207 144C215.499 148.387 225.333 145.619 234 143C240.607 140.453 246.553 136.513 252.562 132.813C253.278 132.372 253.994 131.932 254.732 131.478C258.46 129.327 258.46 129.327 261 126C243.017 123.286 223.416 125.712 209.426 138.254Z" fill="black"/>
                            </svg>
                        </div>



                        {/* SCROLL SVG */}
                        <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>                  
                    
                                        
                    {/* skills */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>

                        <motion.h1 initial={{x:"-300px"}} animate={IsSkillRefInView ? {x:"0"} : {}} transition={{delay: 0.2}} className="font-bold text-2xl">SKILLS</motion.h1>

                        {/* skill list */}
                        <motion.div initial={{x:"-300px"}} animate={IsSkillRefInView ? {x:"0"} : {}} className="flex gap-4 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                        </motion.div>


                        {/* SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>


                    {/* experience */}
                    <div className="flex flex-col gap-12 justify-center pb-10" ref={experienceRef}>
                    
                        <motion.h1 initial={{x:"-300px"}} animate={IsExperienceRefInView ? {x:"0"} : {}} transition={{delay:0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
                        {/* experience list */}
                        <motion.div initial={{x: "-300px"}} animate={IsExperienceRefInView ? {x:"0"}:{}} className="">

                            {/* First */}
                            {/* experience list items */}
                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3">
                                    {/* job title*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Software Engineer
                                    </div>
                                    {/* job description */}
                                    <div className="p-3 text-sm italic">
                                        My current employment, better than my previous job
                                    </div>
                                    {/* job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    {/* Organization name */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        University of Toronto
                                    </div>

                                </div>
                                {/* middle  */}
                                <div className="w-1/6">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative"> 
                                        {/* Circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">

                                        </div>
                                    </div>

                                </div>
                                {/* right */}
                                <div className="w-1/3"></div>
                            </div>

                            {/* Second */}
                            {/* experience list items */}
                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3"></div>
                                {/* middle  */}
                                <div className="w-1/6">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative"> 
                                        {/* Circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                                        </div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className="w-1/3">
                                    {/* job title*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Software Engineer
                                    </div>
                                    {/* job description */}
                                    <div className="p-3 text-sm italic">
                                        My current employment
                                    </div>
                                    {/* job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    {/* Organization name */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        University of Toronto
                                    </div>
                                </div>
                            </div>


                            {/* Third */}
                            {/* experience list items */}
                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3">
                                    {/* job title*/}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Software Engineer
                                    </div>
                                    {/* job description */}
                                    <div className="p-3 text-sm italic">
                                        My current employment, better than my previous job
                                    </div>
                                    {/* job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        2024 - Present
                                    </div>
                                    {/* Organization name */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        University of Toronto
                                    </div>
                                </div>
                                {/* middle  */}
                                <div className="w-1/6">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative"> 
                                        {/* Circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                                        </div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className="w-1/3"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* svg container */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
}

export default AboutPage