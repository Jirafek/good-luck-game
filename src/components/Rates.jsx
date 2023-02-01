import { m } from 'framer-motion';
import Contact from './Contact';
import { useState } from 'react';
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

const Rates = () => {

    const [contsctState, setContactState] = useState('');

    const textData1 = [
        'Не менее 28 прогнозов',
        'Винрейт 60+%',
        'Идеально для проверки'
    ];

    const textData2 = [
        'Не менее 62 прогнозов',
        'Винрейт 60+%',
        'Минимальные просадки'
    ];

    const textData3 = [
        'Не менее 186 прогнозов',
        'Винрейт 60+%',
        'Возврат средств за подписку при просадке вашего банка',
    ];

    const textData4 = [
        '1 прогноз',
        'Винрейт 85+%',
        'Бесплатный прогноз для проверки нашей работы',
    ];

    function createText(texts) {
        const items = texts.map((el, i) => {
            return (
                <div key={i} className="flex gap-5 items-center">
                    <img className="h-5 w-5" src="/image/ok.png" alt="" />
                    <p>
                        {el}
                    </p>
                </div>
            );
        })
        return items;
    }

    return (
        <section id="rates" className="w-full bg-[#1a1a1a] flex justify-center relative">
            <div className="flex flex-col py-28 max-w-[77.5rem] items-center">
                <p className="text-white uppercase font-bold mb-[7.5rem] lg:text-[5rem] text-[2rem] text-center">Выбери подписку</p>
                <m.div
                    variants={heading}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }} 
                    className="flex items-center lg:flex-row flex-col gap-y-10 mb-10"
                >
                    <div className="flex flex-col p-10 duration-300 bg-[#333] hover:bg-[#000] xl:w-[25.5rem] w-[20.5rem] items-center h-[37.8125rem] justify-between relative">
                        <img className="absolute right-10 top-6" src="/image/icon-fire.png" alt="" />
                        <m.div variants={headingLines2} className="flex flex-col items-center">
                            <div className="mb-[3.75rem] flex flex-col items-center">
                                <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                                <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 2 недели</p>
                                <p className="text-[#50d083] text-[2.125rem] font-bold">170 BYN</p>
                            </div>
                            <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                                {createText(textData1)}
                            </div>
                        </m.div>
                        <Link 
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        >
                            <button onClick={() => setContactState('на 2 недели')} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                                ПОДПИСАТЬСЯ
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col p-14 duration-300 bg-[#333] hover:bg-[#000] xl:w-[26.5rem] w-[20.5rem] items-center h-[41rem] justify-between border-2 border-[#ffd15c] relative">
                        <img className="absolute right-10 top-6" src="/image/icon-diamond.png" alt="" />
                        <m.div variants={headingLines2} className="flex flex-col items-center">
                            <div className="mb-[3.75rem] flex flex-col items-center">
                                <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                                <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 1 месяц</p>
                                <p className="text-[#f1ec3f] text-[2.125rem] font-bold">300 BYN</p>
                            </div>
                            <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                                {createText(textData2)}
                            </div>
                        </m.div>
                        <Link 
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        >
                            <button onClick={() => setContactState('на 1 месяц')} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                                ПОДПИСАТЬСЯ
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col p-10 duration-300 bg-[#333] hover:bg-[#000] xl:w-[25.5rem] w-[20.5rem] items-center h-[37.8125rem] justify-between relative">
                        <img className="absolute right-10 top-6 w-[3.125rem]" src="/image/bitc.png" alt="" />
                        <m.div variants={headingLines2} className="flex flex-col items-center">
                            <div className="mb-[3.75rem] flex flex-col items-center">
                                <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                                <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 3 месяца</p>
                                <p className="text-[#50d083] text-[2.125rem] font-bold">850 BYN</p>
                            </div>
                            <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                                {createText(textData3)}
                            </div>
                        </m.div>
                        <Link 
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        >
                            <button onClick={() => setContactState('на 3 месяца')} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                                ПОДПИСАТЬСЯ
                            </button>
                        </Link>
                    </div>
                </m.div>
                <div className="flex flex-col p-10 duration-300 bg-[#333] hover:bg-[#000] xl:w-[25.5rem] w-[20.5rem] items-center h-[37.8125rem] justify-between relative">
                    <m.div variants={headingLines2} className="flex flex-col items-center">
                        <div className="mb-[3.75rem] flex flex-col items-center">
                            <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                            <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 1 день</p>
                            <p className="text-[#50d083] text-[2.125rem] font-bold">Бесплатно</p>
                        </div>
                        <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                            {createText(textData4)}
                        </div>
                    </m.div>
                        <Link 
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        >
                            <button onClick={() => setContactState('на 1 день')} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                                ПОДПИСАТЬСЯ
                            </button>
                        </Link>
                </div>
                <Contact bet_name={contsctState} />
            </div>
        </section>
    );
}

export default Rates;
