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
    const [displayState, setDisplayState] = useState('block');
    const [menuState, setMenuState] = useState({
        z: '-1',
        opacity: '0'
    })

    function openMenu() {
        if (displayState === 'block') {
            setDisplayState('none') // menu opening
            setMenuState({
                z: '30',
                opacity: '1'
            });
        } else {
            setDisplayState('block'); // menu closing
            setMenuState({
                z: '-1',
                opacity: '0'
            });
        }
    }

    function closeMenu() {
        setDisplayState('block'); // menu closing
        setMenuState({
            z: '-1',
            opacity: '0'
        });
    }

    return (
        <>
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
                            <div onClick={openMenu} className="1920:hidden flex flex-col gap-y-[6px] cursor-pointer w-[30px]">
                                <span style={{ display: displayState }} className="h-[2px] w-full bg-black duration-500"></span>
                                <span style={{ display: displayState }} className="h-[2px] w-full bg-black duration-500"></span>
                                <span style={{ display: displayState }} className="h-[2px] w-full bg-black duration-500"></span>
                                <img 
                                    style={ displayState === 'block' ? {display: 'none'} : {display: 'block'} } 
                                    className="w-full" 
                                    src="/image/cross.png" 
                                    alt="" 
                                />
                            </div>
                        </div>
                    </ul>
            </m.div>
        </header>
        <div
            style={{ zIndex: menuState.z, opacity: menuState.opacity }}
            className="absolute text-[1rem] font-bold tracking-[.1em] bg-[#333] text-white rounded-2xl top-[7.5rem] flex flex-col right-4 duration-500 h-48 w-40 py-6 justify-around z-30 items-center"
        >
            <Link 
            to="whoarewe"
            smooth={true}
            duration={800}
            spy={true}
            className="duration-300 hover:text-[#f1ec3f]"
            onClick={closeMenu}
            >
                О НАС
            </Link>
            <Link 
            to="numi"
            smooth={true}
            duration={800}
            spy={true}
            className="duration-300 hover:text-[#f1ec3f]"
            onClick={closeMenu}
            >
                КАЛЬКУЛЯТОР
            </Link>
            <Link 
            to="rates"
            smooth={true}
            duration={800}
            spy={true}
            className="duration-300 hover:text-[#f1ec3f]"
            onClick={closeMenu}
            >
                ТАРИФЫ
            </Link>
        </div>
        </>
    );
}

export default Header;
