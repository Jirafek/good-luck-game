import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import { Link, animateScroll as scroll } from "react-scroll";
import { m } from 'framer-motion';
import 'swiper/css';

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

const About = () => {
    const imageData = [
        '/image/basket.png',
        '/image/dota.png',
        '/image/hockey.png',
    ];

    SwiperCore.use([Autoplay]);

    function createSlides() {
        const items = imageData.map((src, i) => {
            return (
                <SwiperSlide key={i}>
                    <img className="1920:p-0 sm:py-20 py-10 max-w-md mx-auto my-0 rounded-3xl sm:h-auto h-[380px]" src={src} alt="" />
                </SwiperSlide>
            );
        })

        return items;
    }

    return (
        <section className="bg-[url('/image/bg.jpeg')] h-[56.25rem] relative bitch-sec"> {/* 40rem */}
            <m.div
            variants={heading}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className="h-full"
            >
            <m.h2 variants={headingLines2} className="z-[2] sm:absolute pt-[7.5rem] sm:pt-0 mx-auto my-0 uppercase 1920:text-[6.25rem] sm:text-[3.5rem] text-[1.5rem] font-black 1920:max-w-[61rem] sm:max-w-[35rem] max-w-[16rem] sm:-translate-x-0 -translate-x-1/2  sm:left-[unset] left-1/2 sm:top-1/2 top-[7rem] sm:-translate-y-1/3 sm:ml-14">
                <span className="text-[#f1ec3f]">Good Luck Game</span> - твой проводник в мир ставок
            </m.h2>
            <Link
            to="subscribe"
            smooth={true}
            duration={800}
            spy={true}
            className="absolute bottom-7 left-14 z-20 group"
            >
                <m.button variants={headingLines2} className="flex items-center duration-300 md:py-4 md:px-8 py-2 px-4 text-white bg-black cursor-pointer hover:text-black hover:bg-[#f1ec3f] text-[.875rem]">
                    Выбрать подписку
                    <img className="w-[25px] h-[25px] ml-3 mr-2 mt-1 group-hover:ml-5 group-hover:mr-0 duration-200" src="/image/ra.png" alt="" />
                </m.button>
            </Link>
          <Swiper
            allowTouchMove={false}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            speed={1000}
            className="absolute sm:top-1/2 left-1/2 -translate-x-1/2 1920:-translate-y-1/2 sm:-translate-y-1/5 top-0"
          >
            {createSlides()}
          </Swiper>
            </m.div>
        </section>
    );
}

export default About;
