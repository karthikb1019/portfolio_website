import React, { useState, useEffect, useCallback, memo } from "react"
import { Github, Linkedin, Mail, ExternalLink, Instagram, Sparkles,Globe } from "lucide-react"
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Memoized Components
const StatusBadge = memo(() => (
  <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
      <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
        <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
        </span>
      </div>
    </div>
  </div>
));

const MainTitle = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
          AI & ML Data
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
        <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          Engineer
        </span>
      </span>
    </h1>
  </div>
));

const TechStack = memo(({ tech }) => (
  <div className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
    {tech}
  </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

// Medium Icon
const MediumIcon = () => (
  <svg width="18" height="18" viewBox="0 0 1043.63 592.71" fill="currentColor" xmlns="medium.svg">
    <path d="M588.67 296.48a296.48 296.48 0 1 1-592.96 0 296.48 296.48 0 0 1 592.96 0zM747.83 296.48c0 160.38-66.39 290.41-148.26 290.41-81.87 0-148.26-130.03-148.26-290.41 0-160.38 66.39-290.41 148.26-290.41 81.87 0 148.26 130.03 148.26 290.41zM1043.63 296.48c0 145.77-28.03 263.85-62.58 263.85s-62.58-118.08-62.58-263.85 28.03-263.85 62.58-263.85 62.58 118.08 62.58 263.85z"/>
  </svg>
);
// Power BI Icon
const PowerBIIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" xmlns="powerbi.svg">
    <path d="M19.87 9.5l-1.75-.25c-.33-.05-.64.18-.69.51l-2 13.25c-.05.33.18.64.51.69l1.75.25c.33.05.64-.18.69-.51l2-13.25c.05-.33-.18-.64-.51-.69zM4.87 2.5L3.12 2.75c-.33.05-.56.36-.51.69l2 13.25c.05.33.36.56.69.51l1.75-.25c.33-.05.56-.36.51-.69L6.3 3.45c-.05-.33-.36-.56-.69-.51zm4 2l-1.75.25c-.33.05-.56.36-.51.69l2 13.25c.05.33.36.56.69.51l1.75-.25c.33-.05.56-.36.51-.69l-2-13.25c-.05-.33-.36-.56-.69-.51zm8 2l-1.75.25c-.33.05-.56.36-.51.69l2 13.25c.05.33.36.56.69.51l1.75-.25c.33-.05.56-.36.51-.69l-2-13.25c-.05-.33-.36-.56-.69-.51z" />
  </svg>
);

// Tableau Icon
const TableauIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" width="18" height="18" xmlns="tableau.svg">
    <path d="M256 144h32v32h-32v32h-32v-32h-32v-32h32v-32h32v32zm64 112h32v32h-32v32h-32v-32h-32v-32h32v-32h32v32zm-192 0h32v32h-32v32h-32v-32H96v-32h32v-32h32v32zm96 96h32v32h-32v32h-32v-32h-32v-32h32v-32h32v32zm0-192h32v32h-32v32h-32v-32h-32v-32h32v-32h32v32z" />
  </svg>
);


// Constants
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 1000;
const WORDS = ["Amazon & MPHI Alum", "LLMs","AI Agents", "Hugging Face", "n8n Automation", "MLOps/DataOps", "AWS Devops Professional Certified"];
const TECH_STACK = [];
const SOCIAL_LINKS = [
  { icon: Github, link: "https://github.com/karthikb1019/" },
  { icon: Linkedin, link: "https://www.linkedin.com/in/karthiksuman/" },
  { icon: () => <img src="medium.svg" alt="Medium" className="w-5 h-5" />, link: "https://medium.com/@karthiksuman53" },
  { icon: () => <img src="powerbi.svg" alt="Power BI" className="w-5 h-5" />, link: "https://github.com/karthikb1019/" },
  { icon: () => <img src="tableau.svg" alt="Tableau" className="w-5 h-5" />, link: "https://github.com/karthikb1019/" },
];

const Home = () => {
  const [text, setText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // Optimize AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: true,
        offset: 10,
       
      });
    };

    initAOS();
    window.addEventListener('resize', initAOS);
    return () => window.removeEventListener('resize', initAOS);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);

  // Optimize typing effect
  const handleTyping = useCallback(() => {
    if (isTyping) {
      if (charIndex < WORDS[wordIndex].length) {
        setText(prev => prev + WORDS[wordIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => setIsTyping(false), PAUSE_DURATION);
      }
    } else {
      if (charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else {
        setWordIndex(prev => (prev + 1) % WORDS.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, isTyping, wordIndex]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);

  // Lottie configuration
  const lottieOptions = {
    src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    },
    style: { width: "100%", height: "100%" },
    className: `w-full h-full transition-all duration-500 ${
      isHovering 
        ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2" 
        : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
    }`
  };

  return (
    <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-[5%] sm:px-6 lg:px-[0%] min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen md:justify-between gap-0 sm:gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-left lg:text-left order-1 lg:order-1 lg:mt-0 pl-0 sm:pl-4 md:pl-6 lg:pl-10"
              data-aos="fade-right"
              data-aos-delay="200">
              <div className="space-y-4 sm:space-y-6">
                <br />
                <br />
                <br />
                <StatusBadge />
                    {/* Company Logos */}
                  <div className="flex flex-wrap items-center gap-4 mb-2" data-aos="fade-up" data-aos-delay="300">
                    <img src="amazon.svg" alt="Amazon" className="h-10 sm:h-12 object-contain" />
                    <img src="osu.svg" alt="Osu" className="h-10 sm:h-12 object-contain" />
                    <img src="mdhhs.svg" alt="Osu" className="h-10 sm:h-12 object-contain" />
                    <img src="mphi.png" alt="Mphi" className="h-10 sm:h-12 object-contain" />
                    {/* Add more logos here */}
                  </div>
                <MainTitle />

                {/* Typing Effect */}
                <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                  <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                    {text}
                  </span>
                  <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                  data-aos="fade-up"
                  data-aos-delay="1000">
                  Welcome to my world of intelligent systems and data-driven innovation. 
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                  {TECH_STACK.map((tech, index) => (
                    <TechStack key={index} tech={tech} />
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                  <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                  <CTAButton href="#Contact" text="Contact" icon={Mail} />
                </div>

                {/* Social Links */}
                <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Optimized Lottie Animation */}
            <div className="w-full py-[10%] sm:py-0 lg:w-1/2 h-auto lg:h-[600px] xl:h-[750px] relative flex items-center justify-center order-2 lg:order-2 mt-8 lg:mt-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              data-aos="fade-left"
              data-aos-delay="600">
              <div className="relative w-full opacity-90">
                <div className={`absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10 rounded-3xl blur-3xl transition-all duration-700 ease-in-out ${
                  isHovering ? "opacity-50 scale-105" : "opacity-20 scale-100"
                }`}>
                </div>

                <div className={`relative z-10 w-full opacity-90 transform transition-transform duration-500 ${
                  isHovering ? "scale-105" : "scale-100"
                }`}>
                <div className="flex justify-center items-center p-4">
                  <img 
                    src="/gifimage.png" 
                    alt="AI Engineer Animation"
                    className={`max-w-[400px] w-full h-auto object-contain transition-all duration-500 ${
                      isHovering 
                        ? "scale-[105%] rotate-1" 
                        : "scale-100"
                    }`} 
                  />
                </div>

                </div>

                <div className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
                  isHovering ? "opacity-50" : "opacity-20"
                }`}>
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite] transition-all duration-700 ${
                    isHovering ? "scale-110" : "scale-100"
                  }`}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
