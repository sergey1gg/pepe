import React from 'react'
import {useState} from 'react'
const featuresData = [
    {
        id: 1,
        name: 'SELECT PRODUCT',
        img: '/img.svg',
    },
    {
        id: 2,
        name: 'ADD TO CART',
        img: '/frame-1808@2x.png',
    },
    {
        id: 3,
        name: 'CHECKOUT',
        img: '/img1.svg',
    },
    {
        id: 4,
        name: 'PAYMENT',
        img: '/img2.svg',
    },
    {
        id: 5,
        name: 'SPANW',
        img: '/img3.svg',
    },


];
const HowToBuy = () => {
    const [card,setActiveCard]=useState<number>()
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % featuresData.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + featuresData.length) % featuresData.length);
    };
  
    const getVisibleSlidesCount = () => {
      if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    };
  
    const visibleSlidesCount = getVisibleSlidesCount();
    return (
        <div  className='md:p-5 p-0' id='how-buy'>
            <div className="flex flex-col items-center justify-start gap-[28px] w-full mt-[68px] lg:mt-[40px]  ">
                <div className="self-stretch flex flex-row items-start justify-start">
                    <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="rounded-131xl bg-white flex flex-row py-5 px-[10px] items-center justify-center">
                            <div className="relative leading-[24px] uppercase text-mini lg:text-xl">
                                How to buy
                            </div>
                        </div>
                    </div>
                    <div className="rounded-121xl bg-white flex flex-row p-1 items-start justify-start gap-[4px]">
                        <img
                            className="relative rounded-131xl w-14 h-14"
                            alt=""
                            src="/1.svg"
                            onClick={prevSlide}
                        />
                        <img
                            className="relative rounded-131xl w-14 h-14"
                            alt=""
                            src="/2.svg"
                            onClick={nextSlide}
                        />
                    </div>
                </div>

                <div className="w-full gap-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-row items-start justify-start  text-left">
                {featuresData.map((item,index) => ( 
                <div key={item.id} className={`relative rounded-31xl bg-white  overflow-hidden shrink-0
                ${
                    (index >= currentSlide && index < currentSlide + visibleSlidesCount) ? 'block' : 'hidden'
                  }`}>
              <img
                className="w-full scale-95 rounded-21xl  overflow-hidden"
                alt=""
                src={item.img}
              />
              {item.name !=="" ?(
              <div className="my-10 leading-[24px] uppercase text-center">
              {item.name}
            </div>
              ):(
                ""
              )}

            </div>
            ))}
                       
                </div>       
            </div>
        </div>
    )
}

export default HowToBuy
