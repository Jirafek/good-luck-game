import { m } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import emailjs from '@emailjs/browser';



const heading = {
  hidden: {
    y: 10,
    opacity: 0,
    visibility: 'hidden',
  },
  visible: {
    y: 0,
    opacity: 1,
    visibility: 'visible',
    // clipPath: ['inset(0px 0px 100% 0px)', 'inset(0px 0px 0% 0px)'],
    transition: {
      delay: 0.5,
    },
  },
};

const Contact = ({bet_name}) => {
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const { name, contact, text } = e.target;
  
      const data = {
        name: name.value,
        contact: contact.value,
        text: text.value,
        subsk: bet_name
      }
  
      emailjs.send("service_2osf5d8","template_bhwozgg",data,"6f4XT4cncBc-MqNgx")
      .then((result) => {
          console.log(result.text);
          setLoading(false);
      }, (error) => {
          console.log(error.text);
          setLoading(false);
      }); // sending to email
  
      setLoading(true);
    };



    return (
    <div id="contact" className="bg-[#1a1a1a] mt-[11rem] mx-0">
        <div className='container flex flex-col items-center'>
          <m.h2
            className='heading text-center text-white'
            variants={heading}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            Напишите нам
          </m.h2>
  
          <form
            className='mt-10 flex flex-col gap-6 lg:flex-row lg:items-center'
            onSubmit={handleSubmit}
          >
            <input
              name='name'
              type='text'
              className='rounded-md border-2 border-black py-3 px-6 text-black transition-colors focus:border-primary focus:outline-none disabled:border-gray-500 lg:text-lg'
              placeholder="Имя"
              required
              disabled={loading}
            />
            <input
              name='contact'
              type='text'
              className='rounded-md border-2 border-black py-3 px-6 text-black transition-colors focus:border-primary focus:outline-none disabled:border-gray-500 lg:text-lg'
              placeholder="Телеграм или почта"
              required
              disabled={loading}
            />
            <input
              name='text'
              type='text'
              className='rounded-md border-2 border-black py-3 px-6 text-black transition-colors focus:border-primary focus:outline-none disabled:border-gray-500 lg:text-lg'
              placeholder="Иная информация"
              required
              disabled={loading}
            />
            <button type='submit' className='button' disabled={loading}>
              {loading && (
                <svg
                  className='mr-3 h-5 w-5 animate-spin'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
              {loading ? 'Отправляю' : 'Отправить'}
            </button>
          </form>
        </div>
    </div>
    );
}

export default Contact;
