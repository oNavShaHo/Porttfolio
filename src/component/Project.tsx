import React, { useRef } from "react";
import { motion } from "framer-motion";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import quiz1 from "../images/dharma.png";
import blue from "../images/hema.png";
import crop from "../images/crop.png";
import moveefy from "../images/moveefy.svg";
import npm from "../images/npm_img.png";

type Props = {};

function Projects({}: Props) {
  const projects = [0, 1, 2, 3, 4]; // Change index to start from 0

  const p: { [key: number]: any } = {
    4: {
      img: quiz1,
      title: "DharmaPlay",
      link: "https://events.dharmaendeavours.com/map/dharma-mela-seo",
    },
   

    3: {
      img: blue,
      title: "Hemastats",
      link: "https://amazing-gnome-e598ea.netlify.app/",
    },
    2: {
      img: crop,
      title: "CropGuard",
      link: "https://astonishing-profiterole-9c2520.netlify.app/",
    },
    1: {
      img: moveefy,
      title: "Moveefy",
      link: "https://moveefy.vercel.app/login",
    },
    0: {
      img: npm,
      title: "code-user-input",
      link: "https://www.npmjs.com/package/code-user-input",
    },
  };

  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToProject = (index: number) => {
    if (containerRef.current) {
      const projectWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: projectWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleLeftClick = () => {
    scrollToProject((projects.length - 1 + projects.length) % projects.length);
  };

  const handleRightClick = () => {
    scrollToProject((1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="  h-screen  flex flex-col relative  overflow-hidden  text-center md:flex-col  justify evenly mx-auto items-center z-0"
    >
      <div className="w-[80vw]">
        <h3 className=" flex-col text-center uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>

        <div className="absolute left-0 top-[46%]" onClick={handleLeftClick}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </div>
        <div className="absolute right-0 top-[46%]" onClick={handleRightClick}>
          <KeyboardArrowRightIcon fontSize="large" />
        </div>

        <div
          ref={containerRef}
          className="relative flex overflow-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-y-hidden snap-x snap-mandatory z-20"
        >
          {projects.map((project) => (
            <div
              key={project}
              className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-44 h-screen"
            >
              <motion.img
                initial={{ y: -300 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={p[project].img.src}
                alt="yo"
                className="h-[30vw]"
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    {p[project].title}
                  </span>
                </h4>
                <p className="text-lg text-center md:text-left">
                  <a className="font-bold text-cyan-600" href={p[project].link}>
                    Click here for the live Website
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
      </div>
    </motion.div>
  );
}

export default Projects;
