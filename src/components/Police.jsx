
const Police = () => {
    return (
        <section className="sm:bg-white bg-black flex">
            <div className="bg-black py-16 flex my-14 max-w-7xl items-center sm:flex-row flex-col">
                <img className="h-[9rem]" src="/image/doodle.png" alt="" />
                <p className="lg:text-[1.875rem] text-[1.375rem] text-white text-center">
                    На нашем сайте вы не увидите НИКАКОЙ рекламы. НИКАКИХ реферальных ссылок. Это должно убедить вас в том что это не обман, которых в интернете очень много.
                </p>
                <img className="h-[9rem] sm:block hidden" src="/image/doodle.png" alt="" />
            </div>
        </section>
    );
}

export default Police;
