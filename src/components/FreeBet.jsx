import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
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

const FreeBet = () => {
    const [betState, setBetState] = useState({
        team: "",
        counter: "",
        name: ""
    })

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Jirafek/DB-glg/FreeBet')
        .then((res) => res.json())
        .then((json) => setBetState(json))
        .catch(err => console.log(err));
    }, [])


    return (
        <section className="bg-white">
            <m.div 
                variants={heading}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}  
                className='py-[20px] flex flex-col items-center gap-2 px-6'>
                <h1 variants={headingLines2} className='text-black sm:text-[25px] text-[20px] font-bold mb-2 text-center'>Бесплатная ставка на сегодня</h1>
                <h2 variants={headingLines2} className='text-[20px] font-medium'>
                    {betState.team}
                </h2>
                <h2 variants={headingLines2} className='text-[20px] font-medium'>
                    {betState.counter}
                </h2>
                <h2 variants={headingLines2} className='text-[20px] font-medium mb-7'>
                    {betState.name}
                </h2>
                <h1 variants={headingLines2} className='text-black sm:text-[25px] text-[20px] font-extrabold text-center'>Хочешь большего коэффициента? Переходи в раздел <Link 
            to="rates"
            smooth={true}
            duration={800}
            spy={true}
            className="duration-300 hover:text-[#f1ec3f] text-blue-600"
            >
                подписки
            </Link>
            </h1>
            </m.div>
        </section>
    );
}

export default FreeBet;
