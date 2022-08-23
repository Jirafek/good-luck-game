import { m } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';

const heading = {
    hidden: {},  
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  };

const headingLines2 = {
    hidden: {
      y: 10,
      opacity: 0,
      clipPath: 'inset(100% 0px 0px)',
    },
    visible: {
      y: 0,
      opacity: 1,
      clipPath: 'inset(0% 0px 0px)',
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
  };

const Header = () => {
    const [state, setState] = useState({
      
    });

    function openMenu() {
    }

    return (
        <header className="absolute top-0 z-10 w-full bg-transparent">
            <m.div
            variants={heading}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="flex md:h-40 h-24 items-center vsm:px-12 px-4 justify-between">
                <m.img variants={headingLines2} className="sm:rounded-[30px] rounded-[15px] sm:h-[90%] h-[70%]" src="/image/logo.svg" alt="" />
                    <ul className="md:flex gap-12 text-3xl font-bold tracking-[.1em] items-center">
                        <Link 
                        to="whoarewe"
                        smooth={true}
                        duration={800}
                        spy={true}
                        >
                            <li className="duration-300 1920:block hidden hover:text-[#f1ec3f]">
                                О НАС
                            </li>
                        </Link>
                        <Link 
                        to="numi"
                        smooth={true}
                        duration={800}
                        spy={true}
                        >
                            <li className="duration-300 1920:block hidden hover:text-[#f1ec3f]">
                                КАЛЬКУЛЯТОР
                            </li>
                        </Link>
                        <Link 
                        to="rates"
                        smooth={true}
                        duration={800}
                        spy={true}
                        >
                            <li className="duration-300 1920:block hidden hover:text-[#f1ec3f]">
                            ТАРИФЫ
                            </li>
                        </Link>
                        <div className="flex gap-6 items-center">
                            <a href="https://t.me/glg_support\" target="_blank">
                                <li className="duration-300 md:py-4 md:px-8 py-2 px-4 text-white bg-black cursor-pointer hover:text-black hover:bg-[#f1ec3f] sm:text-[.875rem] text-[.675rem]">
                                    ЗАДАТЬ ВОПРОС
                                </li>
                            </a>
                            <div onClick={openMenu} className="1920:hidden flex flex-col gap-y-[6px] cursor-pointer">
                                <span style={{ display: '' }} className="h-[2px] w-[30px] bg-black delay-500"></span>
                                <span style={{ display: '' }} className="h-[2px] w-[30px] bg-black delay-500"></span>
                                <span style={{ display: '' }} className="h-[2px] w-[30px] bg-black delay-500"></span>
                            </div>
                        </div>
                    </ul>
            </m.div>
        </header>
    );
}

export default Header;
