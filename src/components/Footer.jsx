
const Footer = () => {
    return (
        <footer className="bg-[#121212] w-full">
            <div className="mx-auto my-0 py-[3.75rem] max-w-[79.375rem] flex flex-col gap-8 px-4">
                <div className="flex justify-between">
                    <div className="flex gap-8">
                        <img className="w-[3.75rem]" src="/image/logo.svg" alt="" />
                        <p className="text-white">Твой проводник<br /> в мир ставок</p>
                    </div>
                    <ul className="flex gap-6">
                        <li>
                            <a target="_blank" href="https://t.me/glg_support\">
                                <img src="/image/telegram.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.tiktok.com/@glg_sport?_t=8V3IMWLHTkc&_r=1">
                                <img className="h-[24px]" src="/image/tiktok.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-between sm:flex-row flex-col-reverse">
                    <p className="text-white">
                        &copy; GLG 2023
                    </p>
                    <div className="flex gap-3">
                        <a
                        target="_blank"
                        href="/pdf/otkaz.pdf"
                        className="text-[#bdbdbd] hover:text-white duration-300"
                        >
                            Отказ от ответственности
                        </a>
                        <a
                        target="_blank"
                        href="/pdf/politics.pdf"
                        className="text-[#bdbdbd] hover:text-white duration-300"
                        >
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
