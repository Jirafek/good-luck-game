import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
  color: '#52af77',
  height: 6,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: '#52af77',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});

const Numi = () => {
    const moneyData = [
        {
            name: 'Июль 2022',
            x: 28
        },
        {
            name: 'Август 2022',
            x: 58
        },
        {
            name: 'Сентябрь 2022',
            x: 64
        },
        {
            name: 'Октябрь 2022',
            x: 43
        },
        {
            name: 'Ноябрь 2022',
            x: 51
        },
        {
            name: 'Декабрь 2022',
            x: 73
        },
        {
            name: 'Январь 2023',
            x: 50
        }
    ]

    const [moneyState, setMoneyState] = useState(10);

    function rangeChange(e) {
        const target = e.target;
        setMoneyState(target.value);
    }

    function setMonthes() {
        let items = moneyData.map((el, i) => {
            const total = moneyState*el.x;
            return (
                <div key={i} className="flex flex-col gap-2">
                    <p className="text-lg text-[#828282]">
                        {el.name}
                    </p>
                    <p style={total > 0 ? {color: '#50d083'} : {color: '#e9463a'}} className="font-bold text-[2.5rem] w-56">
                        {total} BYN
                    </p>
                </div>
            );
        })
        return items;
    }

    return (
        <section id="numi" className="flex justify-center">
            <div className="flex flex-col items-center py-12">
                <h2 className="uppercase font-bold lg:text-7xl sm:text-[2.5rem] text-[1rem] mb-14">Калькулятор дохода</h2>
                <p className="lg:text-[1.875rem] sm:text-base text-[0.775rem] lg:max-w-[51.875rem] sm:max-w-[28.75rem] max-w-[15.75rem] sm:mb-20 mb-12">Узнай сколько ты мог бы заработать исходя из статистики предыдущих месяцев, просто подставь свой рабочий флет</p>
                <div className="flex flex-col">
                    <p className="text-[#828282] text-lg mb-4">Ваш средний флет</p>
                    <p className="duration-300 border border-[#bdbdbd] p-5 text-lg font-bold border-b-0">
                        {moneyState} BYN
                    </p>
                    <Box sx={{ width: 300 }} className="mb-10">
                        <PrettoSlider
                        defaultValue={10}
                        min={10}
                        max={800}
                        step={10}
                        onChange={rangeChange}
                        />
                    </Box>
                </div>
                <div className="flex flex-wrap justify-center gap-x-10">
                    {setMonthes()}
                </div>
            </div>
        </section>
    );
}

export default Numi;
