import { m } from 'framer-motion';

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

  const image = {
      hidden: {
        y: 0,
        x: 200,
        opacity: 0,
        clipPath: 'inset(100% 0px 0px)',
      },
      visible: {
        y: 0,
        x: 0,
        opacity: 1,
        clipPath: 'inset(0% 0px 0px)',
        transition: {
          duration: 1,
          ease: 'easeOut',
          delay: 0.3,
        },
      },
    };

const WhoAreWe = () => {
    return (
        <section id="whoarewe" className="bg-[#000000] relative flex justify-center">
            <div className="relative flex 2xl:flex-row flex-col justify-center px-14 sm:py-28 py-14 items-center">
                <m.div 
                variants={heading}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className="2xl:w-1/2 flex flex-col relative"
                >
                    <h2 className="2xl:w-[38.75rem] uppercase absolute md:text-[12.5rem] sm:text-[7.5rem] sm:block hidden leading-[1] font-bold text-white opacity-10">О нас</h2>
                    <m.h3 variants={headingLines2} className="uppercase md:text-[6.25rem] sm:text-[4.25rem] text-[3.25rem] text-white mb-14 font-bold 1920:ml-64 sm:ml-32 md:mt-28 sm:mt-12">Кто мы</m.h3>
                    <m.p variants={headingLines2} className="max-w-[38.75rem] text-white text-2xl 1920:ml-64 sm:ml-32">
                    Мы — разносторонний капперский проект, предлагающий платные и бесплатные прогнозы в TELEGRAM. Наша команда обрабатывает огромный объём информации об игроках, командах и турнирах.Мы стараемя обеспечить вам наилучший и самый удачный результат!
                    </m.p>
                </m.div>
                <m.div
                variants={heading}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }} 
                className="2xl:w-1/2 relative">
                    <m.img variants={image} className="sm:max-w-md mx-auto my-0" src="/image/csgo.jpg" alt="" />
                </m.div>
            </div>
        </section>
    );
}

export default WhoAreWe;
