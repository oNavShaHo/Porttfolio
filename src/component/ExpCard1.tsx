import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ReactImage from "../images/React.png";
import FireBase from "../images/node.png";
import BlueRed from "../images/Digital.jpg";
type Props = {};

const ExpCard1 = (props: Props) => {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-screen md:w-[80vw] xl:w-[60vw]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden justify-center
    "
    >
      <div className="">
        <div className="flex items-center gap-[10px]">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full xl:w-[100px] xl:h[100px] object-cover object-center"
            src={BlueRed.src}
          />
       
      
            <h4 className="text-2xl font-light">REACT JS DEVELOPER</h4>
            </div>
          <p className="font-bold text-1xl-mt-2 mt-3 ml-2 item-center ">
            DIGITAL CODE TECHNOLOGY - [January 2023 -April 2023]
          </p>

          <div className="flex space-x-2 my-2">
            <Image
              className="h-10 w-10 rounded-full"
              src={ReactImage}
              alt="a"
            />

            <Image
              className="h- bg-transparent w-10 rounded-full"
              src={FireBase}
              alt=""
            />

            {/* Tech used */}
            {/* Tech used */}
            {/* Tech used */}
          </div>
      

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Created a Quiz for a startup in Singapore</li>
          <li>
            Led frontend development and collaborated with UI/UX and backend
            teams for timely project delivery
          </li>
          <li>
            Utilized API to integrate backend with frontend and converted three
            websites from Figma to React code
          </li>
          <li className="font-bold text-cyan-600 ">
            <a href="https://drive.google.com/file/d/1oAMawV8DOvT-dt92ujXDAQOsAsqH0wu3/view?usp=sharing">
              click here for Certificate
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExpCard1;
