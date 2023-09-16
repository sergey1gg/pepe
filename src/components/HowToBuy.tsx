import React from 'react'
import {useState, useEffect} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        name: 'SPAWN',
        img: '/img3.svg',
    },


];
const HowToBuy = () => {
  const slider = React.useRef<any>(null);

    const [card,setActiveCard]=useState<number>()
    const [currentSlide, setCurrentSlide] = useState(0);

    const getVisibleSlidesCount = () => {
      if (window.innerWidth >= 1440) {
        return 4;
      } else if (window.innerWidth >= 1024) {
        return 3;
      } else if (window.innerWidth >= 768) {
        return 2;
      } else {
        return 1;
      }
    };
  
    const visibleSlidesCount = getVisibleSlidesCount();
    const settings = {
      speed: 500, // Скорость анимации перехода между слайдами (миллисекунды)
      infinite: false,
      slidesToShow: visibleSlidesCount, // Количество отображаемых слайдов
      slidesToScroll: 1, // Количество слайдов, переключаемых за один раз
    };
    return (
        <div  className='md:px-3 px-0' id='how-buy'>
            <div className=" gap-[28px] w-full block mt-[68px] lg:mt-[40px]  ">
                <div className="self-stretch flex flex-row items-start justify-start md:px-2 px-0 mb-[28px]">
                    <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="rounded-131xl bg-white flex flex-row py-5 px-[10px] items-center justify-center">
                            <div className="relative leading-[24px] uppercase text-mini lg:text-xl">
                                How to buy
                            </div>
                        </div>
                    </div>
                    <div className="rounded-121xl bg-white flex flex-row p-1 items-start justify-start gap-[4px]">
                        <img
                            className="relative rounded-131xl w-14 h-14 cursor-pointer"
                            alt=""
                            src="/1.svg"
                            onClick={() => slider?.current?.slickPrev()}
                        />
                        <img
                            className="relative rounded-131xl w-14 h-14 cursor-pointer"
                            alt=""
                            src="/2.svg"
                            onClick={() => slider?.current?.slickNext()}
                        />
                    </div>

                    
                </div>

                <Slider {...settings} ref={slider} arrows={false} >
          {featuresData.map((item, index) => (
            <div key={item.id} className="relative rounded-31xl bg-white overflow-hidden md:scale-95 scale-100">
              <img
                className="w-full scale-95 rounded-21xl overflow-hidden"
                alt=""
                src={item.img}
              />
              {item.name !== "" ? (
                <div className="my-10 leading-[24px] uppercase text-center">
                  {item.name}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </Slider>
        </div>
      </div>

  );
};

export default HowToBuy
