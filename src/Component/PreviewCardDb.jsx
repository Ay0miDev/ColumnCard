import car01 from '../assets/images/icon-sedans.svg'
import car02 from '../assets/images/icon-suvs.svg'
import car03 from '../assets/images/icon-luxury.svg'

export const cardDetails = [
    {
        id: 1,
        icon: car01,
        header: "SEDANS",
        paragraph: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
        or on your next road trip.`,
    },
    {
        id: 2,
        icon: car02,
        header: "SUVS",
        paragraph: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
        and off-road adventures.`,   
    },
    {
        id: 3,
        icon: car03,
        header: "LUXURY",
        paragraph: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
        rental and arrive in style.`,   
    }
]



/*import React, { useEffect } from 'react'
import { cardDetails } from './PreviewCardDb';
import "./PreviewCard.css"
import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const PreviewCard = () => {
    const [theme, setTheme] = useState(null);

    function toggleTheme() {
        if (theme ==="dark") {
            document.documentElement.classList.add("dark");
        }else if (theme === "light") {
            document.documentElement.classList.remove('dark');
        }else {
            setTheme("light")
        }
    }
useEffect(() => {
    toggleTheme()
}, [theme]);
const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    console.log({theme});
}

const cardList = cardDetails.map((card) => (
    <div 
    key={card.id}
    style={{
        background:
        card.header == "SEDANS"
            ? "hsl(31, 77%, 52%)"
            : card.header == "SUVS"
            ? "hsl(184, 100%, 22%)"
            : "hsl(179, 100%, 13%)",
        borderRadius:
            card.id == 1
            ? "1rem 0 0 1rem"
            : card.id == 3
            ? "0 1rem 1rem 0"
            : "none",
    }}
    className='bg-green-400 p-[2rem] text-white font-lexend'
>

    <img src={card.icon} alt="" className="mb-3 w-[3rem]"/>
    <h1 className='text-2xl mb-4 font-bigs font-medium'>{card.header}</h1>
    <p className='text-[16px] md:text-[10px] mb-6 md:mb-14 leading-6 md:leading-5'>{card.paragraph}</p>
    <button className=''>Learn More</button>
    </div>
))
  return (
    <div className='w-full -auto md:h-screen bg-[hsla(0, 0%, 100%, 0.75)] dark:bg-black flex justify-center items-center flex-row relative'>
        <div className='absolute top-20 right-20'>
            <button onClick={handleThemeSwitch}>
                {theme === "dark" ? <IoSunny className="text-white"/> :<IoMoonSharp />}
            </button>
        </div>
        <div className="flex justify-center items-stretch py-8 md:py-0 px-4 md:px-0 flex-col md:flex-row w-[40rem]">{cardList}</div>
    </div>
  )
}

export default PreviewCard;*/