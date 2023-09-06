import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const serverUrl = process.env.REACT_APP_SERVER_URL;

const NewsDrop: React.FC<{ featuresData: any[] }> = ({ featuresData }) => {

  const navigate = useNavigate()

  const slider = React.useRef<any>(null);
  const [card, setActiveCard] = useState<boolean>()
  const [currentSlide, setCurrentSlide] = useState(0);


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
  const settings = {
    speed: 500, 
    infinite: false,
    slidesToShow: visibleSlidesCount, 
    slidesToScroll: 1, 
  };
  return (
    <div  className='md:px-3 px-0' id='how-buy'>
    <div className=" gap-[28px] w-full block mt-[68px] lg:mt-[40px]  ">
        <div className="self-stretch flex flex-row items-start justify-start md:px-2 px-0">
            <div className="flex-1 flex flex-row items-start justify-start">
                <div className="rounded-131xl bg-white flex flex-row py-5 px-[10px] items-center justify-center">
                    <div className="relative leading-[24px] uppercase text-mini lg:text-xl">
                        News Drop
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
 <div className=" xl:top-[512px] top-[352px] left-[36px] flex flex-row items-start justify-start gap-[0] lg:gap-0 xl:gap-[150px] md:gap-[57px]">
                      <div className="  rounded-21xl bg-overlay [backdrop-filter:blur(40px)] flex flex-row py-2.5 px-5 m-5 items-center justify-center text-center text-mini">
                        <div className=" leading-[20px] uppercase">{item.ostatok}/{item.count}</div>
                      </div>
                    </div>

                    <img
                      className=" w-full h-auto overflow-hidden object-cover scale-95 "
                      alt=""
                      src={`${serverUrl}/public/tovars/${item.images[0]}`}
                    />
                    <div className='flex justify-around items-center mb-3'>
                      <div className="flex flex-col items-start justify-start gap-[16px]">
                        <div className=" leading-[24px] uppercase">

                          {item.name}
                        </div>
                        <div className=" text-5xl leading-[28px] uppercase text-center">
                          {item.cost}$
                        </div>

                      </div>
                      <div className="rounded-131xl bg-primary xl:w-[124px] w-[50px] flex flex-row py-7 px-10 box-border items-center justify-center cursor-pointer "
                        onClick={() => navigate(`/product/${item._id}`)}>
                        <img
                          className=" w-6 h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/shoppingbag.svg"
                        />
                      </div>
                    </div>
    </div>
  ))}
</Slider>
</div>
      </div>

  )
}

export default NewsDrop

