import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import thumbOne from "../../../assets/img/bank.png";
import thumbTwo from "../../../assets/img/dollar.png";
import thumbThree from "../../../assets/img/fashion.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import "./style/port.css";
import ProjectSlideBtn from "./projectslidebutton/ProjectSlideBtn";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "The Kingsman Banking website is a modern, user-friendly platform created using React. It showcases a sleek and professional design, providing users with a seamless banking experience. The site includes features such as account management, transaction history, and customer support, all aimed at enhancing user convenience and satisfaction.",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "Javascript" }],
    image: thumbOne,
    link: "",
    github: "",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "project 2",
    description:
      "The Virtual Kings-Money website facilitates currency exchange and allows you to send money to anyone, anywhere",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "MongoDB" }],
    image: thumbTwo,
    link: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend ",
    title: "project 2",
    description:
      "This is a website for all my fashion designers lovers, made this website where you can post your work or showcase your work",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Javascript" }],
    image: thumbThree,
    link: "",
    github: "",
  },
];

const Portfolio = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //* To get the current slide index
    const currentIndex = swiper.activeIndex;
    //* Update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <section className="section" id="portfolio">
      <h2 className="section__title">Projects Done</h2>
      <span className="section__subtitle">Witness My Lve Projects</span>

      <div className="mainCont  min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="mx-auto container">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* //! outline num */}
                <div className="  max-md:text-3xl max-lg:text-7xl xl:text-8xl leading-none font-extrabold  text-gray-950">
                  {project.num}
                </div>

                {/* //! Project Category */}
                <h2 className="text-[42px] font-bold leading-none text-black  transition-all duration-500  capitalize">
                  {project.category} Project
                </h2>
                {/* //! Project  description*/}
                <p className="text-black/60">{project.description}</p>
                {/* //! Stack */}
                <ul className="flex gap-4 ">
                  {project.stack.map((stack, index) => {
                    return (
                      <li className="text-xl" key={index}>
                        {stack.name}
                        {/* //! To remove the last coma */}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* //! border */}
                <div className="border border-black/20 w-[500px] max-md:w-[300px]"></div>
                {/* //! Buttons */}
                <div className="flex items-center gap-4">
                  {/* //! Live project button */}
                  <a href={project.link}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center group">
                          <AiOutlineGlobal className="text-white text-2xl " />
                        </TooltipTrigger>
                        <TooltipContent className="bg-black text-white p-2 rounded-sm mb-2">
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>

                  {/* //! Github button */}
                  <a href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center group">
                          <BsGithub className="text-white text-2xl " />
                        </TooltipTrigger>
                        <TooltipContent className="bg-black text-white p-2 rounded-sm mb-2">
                          <p>Github Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] max-md:h-[300px] relative group flex justify-center items-center bg-pink-50">
                        {/* //! overlay container */}
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        {/* //! Image for each project */}
                        <div className="relative w-full h-full">
                          <img
                            src={project.image}
                            className="object-cover w-full h-full"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* //! slider buttons */}
                <ProjectSlideBtn
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-black text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center max-md:bg-green-500 max-md:text-white "
                />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
