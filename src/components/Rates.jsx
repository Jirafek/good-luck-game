import { m } from 'framer-motion';
import { useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';

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
    const clipboard = useClipboard();

    const [topState, setTopState] = useState(0);

    const [state, setState] = useState({
        text: '',
        cost: '',
        z: '-2',
        opacity: '0'
    });

    const buyData = [
        {
            days: 'на 2 недели',
            cost: '170 BYN',
            top: 220
        },
        {
            days: 'на 1 месяц',
            cost: '300 BYN',
            top: 920
        },
        {
            days: 'на 3 месяца',
            cost: '850 BYN',
            top: 1590
        },
        {
            days: 'на 5 дней',
            cost: 'бесплатно',
            top: 2230
        },
    ];

    const textData1 = [
        'Не менее 28 прогнозов',
        'Винрейт 55+%',
        'Идеально для проверки'
    ];

    const textData2 = [
        'Не менее 62 прогнозов',
        'Винрейт 55+%',
        'Минимальные просадки'
    ];

    const textData3 = [
        'Не менее 186 прогнозов',
        'Винрейт 55+%',
        'Возврат средств за подписку при просадке вашего банка',
    ];

    const textData4 = [
        'Не менее 5 прогнозов',
        'Винрейт 55+%',
        'Бесплатный прогноз на каждый день',
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

    function closeBuyMenu() {
        setTopState(0);
        setState({
            text: '',
            cost: '',
            z: '-2',
            opacity: '0'
        });
    }

    function getRate(data) {
        const windowWidth = window.innerWidth;
        const TRANSLATE_WIDTH = 1024;
        setState({
            text: data.days,
            cost: data.cost,
            z: '5',
            opacity: '1'
        });

        if (windowWidth < TRANSLATE_WIDTH) {
            setTopState(data.top)
        } else {
            setTopState(545)
        }
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
                        <button onClick={() => getRate(buyData[0])} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                            ПОДПИСАТЬСЯ
                        </button>
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
                        <button onClick={() => getRate(buyData[1])} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                            ПОДПИСАТЬСЯ
                        </button>
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
                        <button onClick={() => getRate(buyData[2])} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                            ПОДПИСАТЬСЯ
                        </button>
                    </div>
                </m.div>
                <div className="flex flex-col p-10 duration-300 bg-[#333] hover:bg-[#000] xl:w-[25.5rem] w-[20.5rem] items-center h-[37.8125rem] justify-between relative">
                    <m.div variants={headingLines2} className="flex flex-col items-center">
                        <div className="mb-[3.75rem] flex flex-col items-center">
                            <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                            <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 5 дней</p>
                            <p className="text-[#50d083] text-[2.125rem] font-bold">Бесплатно</p>
                        </div>
                        <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                            {createText(textData4)}
                        </div>
                    </m.div>
                    <button onClick={() => getRate(buyData[3])} className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                        ПОДПИСАТЬСЯ
                    </button>
                </div>
            </div>
            <div
                style={{ zIndex: state.z, opacity: state.opacity, top: topState }}
                className={`rounded-[25px] py-6 px-5 flex flex-col items-center text-black bg-[#f1ec3f] h-[41rem] sm:w-[27rem] w-[21rem] absolute left-1/2 -translate-x-1/2 duration-500`}
            >
                <img className="self-end" onClick={closeBuyMenu} width="30" src="/image/cross.png" alt="" />
                <p className="sm:text-[2rem] text-[1.575rem] font-bold">Оформить подписку</p>
                <p className="text-[2rem] font-bold mb-20">
                    {state.text}
                </p>
                <p ref={clipboard.target} className="text-center">
                    
                </p>
                <textarea
                    className="border-0 bg-transparent sm:text-[2rem] text-[1.5rem] mb-4 h-64 outline-0 text-center" 
                    ref={clipboard.target} 
                    value={`Здравствуйте, я хочу оформить подписку ${state.text} по цене ${state.cost}`}
                    readOnly 
                />
                <button onClick={clipboard.copy} className="text-[1rem] mb-[3.25rem] rounded-2xl text-white text-center py-4 px-8 cursor-pointer bg-[#333]">Скопировать</button>
                <a target="_blank" className="w-full" href="https://t.me/glg_support\">
                    <button className="text-[1rem] text-white text-center rounded-2xl py-4 px-8 w-full cursor-pointer bg-[#333]">
                        Написать менеджеру
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Rates;
