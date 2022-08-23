

const Rates = () => {
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
        'Дешёвая стоимость 1 прогноза',
        'Не менее 186 прогнозов',
        'Винрейт 55+%',
        'возврат средств за подписку при просадке вашего банка',
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
        <section id="rates" className="w-full bg-[#1a1a1a] flex justify-center">
            <div className="flex flex-col py-28 max-w-[77.5rem]">
                <p className="text-white uppercase font-bold mb-[7.5rem] lg:text-[5rem] text-[2rem] text-center">Выбери подписку</p>
                <div className="flex items-center lg:flex-row flex-col gap-y-10">
                    <div className="flex flex-col p-10 duration-300 bg-[#333] hover:bg-[#000] xl:w-[25.5rem] w-[21.5rem] items-center h-[37.8125rem] justify-between relative">
                        <img className="absolute right-10 top-6" src="/image/icon-fire.png" alt="" />
                        <div className="flex flex-col items-center">
                            <div className="mb-[3.75rem] flex flex-col items-center">
                                <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                                <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 2 недели</p>
                                <p className="text-[#50d083] text-[2.125rem] font-bold">170 BYN</p>
                            </div>
                            <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                                {createText(textData1)}
                            </div>
                        </div>
                        <button className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                            ПОДПИСАТЬСЯ
                        </button>
                    </div>
                    <div className="flex flex-col p-14 duration-300 bg-[#333] hover:bg-[#000] xl:w-[26.5rem] w-[22.5rem] items-center h-[41rem] justify-between border-2 border-[#ffd15c] relative">
                        <img className="absolute right-10 top-6" src="/image/icon-diamond.png" alt="" />
                        <div className="flex flex-col items-center">
                            <div className="mb-[3.75rem] flex flex-col items-center">
                                <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                                <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 1 месяц</p>
                                <p className="text-[#f1ec3f] text-[2.125rem] font-bold">300 BYN</p>
                            </div>
                            <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                                {createText(textData2)}
                            </div>
                        </div>
                        <button className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                            ПОДПИСАТЬСЯ
                        </button>
                    </div>
                    <div className="flex flex-col p-10 duration-300 bg-[#333] hover:bg-[#000] xl:w-[25.5rem] w-[21.5rem] items-center h-[37.8125rem] justify-between relative">
                        <img className="absolute right-10 top-6 w-[3.125rem]" src="/image/bitc.png" alt="" />
                        <div className="flex flex-col items-center">
                            <div className="mb-[3.75rem] flex flex-col items-center">
                                <p className="uppercase text-[#bdbdbd] text-base font-medium mb-5 tracking-[.2em]">Подписка</p>
                                <p className="uppercase mb-5 text-[#fff] text-[2rem] font-bold">на 3 месяца</p>
                                <p className="text-[#50d083] text-[2.125rem] font-bold">850 BYN</p>
                            </div>
                            <div className="self-start flex flex-col gap-4 text-[#e0e0e0] text-lg">
                                {createText(textData3)}
                            </div>
                        </div>
                        <button className="text-[1rem] text-center py-4 px-8 cursor-pointer min-w-[16.875rem] tracking-[.1em] duration-200 text-black bg-[#f1ec3f]">
                            ПОДПИСАТЬСЯ
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rates;
