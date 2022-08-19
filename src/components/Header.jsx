import { m } from 'framer-motion';
import { Link, animateScroll as scroll } from "react-scroll";

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

    return (
        <header className="absolute top-0 z-10 w-full bg-transparent">
            <m.div
            variants={heading}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="flex md:h-40 h-24 items-center vsm:px-14 px-4 justify-between">
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
                        <a href="#"><li className="duration-300 1920:block hidden hover:text-[#f1ec3f]">ТАРИФЫ</li></a>
                        <a href="#"><li className="duration-300 1920:block hidden hover:text-[#f1ec3f]">КАЛЬКУЛЯТОР</li></a>
                        <a href="#">
                            <li className="duration-300 1920:block hidden hover:text-[#f1ec3f]">
                                ВЫГОДА
                            </li>
                        </a>
                        <a href="https://t.me/loyreddd" target="_blank">
                            <li className="duration-300 md:py-4 md:px-8 py-2 px-4 text-white bg-black cursor-pointer hover:text-black hover:bg-[#f1ec3f] text-[.875rem]">
                                ЗАДАТЬ ВОПРОС
                            </li>
                        </a>
                    </ul>
            </m.div>
        </header>
    );
}

export default Header;
