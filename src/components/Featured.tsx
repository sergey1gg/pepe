import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const serverUrl = process.env.REACT_APP_SERVER_URL;

const Featured: React.FC<{ featuresData: any[] }> = ({ featuresData }) => {
  console.log(featuresData)
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
    <div  className='md:px-3 px-0' >
    <div className=" gap-[28px] w-full block mt-[68px] lg:mt-[40px]  ">
        <div className="self-stretch flex flex-row items-start justify-start md:px-2 px-0 ">
        <div className="flex-1 flex flex-row items-start justify-start">
            <div className="rounded-131xl bg-white flex flex-row py-5 px-[17px] items-center justify-center">
              <div className="relative leading-[24px] uppercase text-mini lg:text-xl">
                featured item
              </div>
            </div>
            <div className="rounded-131xl bg-white hidden md:flex flex-row py-5 px-[30px] items-center justify-center gap-[4px] ml-3">
              <div className="relative leading-[24px] uppercase text-mini lg:text-xl">ALL</div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/angledown.svg"
              />
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

export default Featured

    {/* 
    <div className='px-0 md:px-5'>
      <div className="flex flex-col items-center justify-start gap-[28px] w-full mt-[450px] lg:mt-[700px]  ">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="rounded-131xl bg-white flex flex-row py-5 px-[17px] items-center justify-center">
              <div className="relative leading-[24px] uppercase text-mini lg:text-xl">
                featured item
              </div>
            </div>
            <div className="rounded-131xl bg-white hidden md:flex flex-row py-5 px-[30px] items-center justify-center gap-[4px] ml-3">
              <div className="relative leading-[24px] uppercase text-mini lg:text-xl">ALL</div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/angledown.svg"
              />
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

        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-row items-start justify-start gap-[20px] text-left">
          {featuresData.map((item, index) => (

            <div key={item._id} className={`relative rounded-31xl bg-white overflow-hidden h-auto
                        ${(index >= currentSlide && index < currentSlide + visibleSlidesCount) ? 'block' : 'hidden'
              }`}>
              {card ? (
                <div className="w-full h-auto bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-3xl rounded-br-3xl">

                  <div className="mt-10 px-5 flex justify-start items-start gap-4">
                    <div className="grow shrink basis-0 text-stone-950 text-xl font-normal uppercase leading-normal">pepka Cap</div>
                    <div className="text-center text-stone-950 text-2xl font-normal uppercase leading-7">$28</div>
                  </div>
                  <div className="px-5 flex flex-col justify-start items-start gap-7 ">
                    <div className="flex-col justify-start items-start gap-3 flex">
                      <div className="justify-start items-center xl:gap-44 lg:gap-30 gap-1 gap inline-flex">
                        <div className=" text-stone-950 text-base font-normal uppercase leading-tight">Select size</div>
                        <div className="justify-start items-start gap-2 flex">
                          <div className="h-11 p-3 rounded-full justify-center items-center gap-2.5 flex">
                            <div className="text-neutral-400 text-base font-normal uppercase leading-tight">Us</div>
                          </div>
                          <div className="h-11 p-3 rounded-full border border-neutral-100 justify-center items-center gap-2.5 flex">
                            <div className="text-stone-950 text-base font-normal uppercase leading-tight">Eu</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col justify-start items-start flex">
                        <div className=" justify-start items-start inline-flex">
                          <div className="xl:px-5 py-3 px-1 rounded-2xl border border-stone-950 justify-center items-center gap-2.5 flex">
                            <div className="text-center text-stone-950 text-base font-normal uppercase leading-normal">41 eu</div>
                          </div>
                          <div className="xl:px-5 py-3 px-1 rounded-2xl border border-neutral-100 justify-center items-center gap-2.5 flex">
                            <div className="text-center text-neutral-400 text-base font-normal uppercase leading-normal">41 eu</div>
                          </div>
                          <div className="xl:px-5 py-3 px-1 rounded-2xl border border-neutral-100 justify-center items-center gap-2.5 flex">
                            <div className="text-center text-stone-950 text-base font-normal uppercase leading-normal">41 eu</div>
                          </div>
                          <div className="xl:px-5 py-3 px-1 rounded-2xl border border-neutral-100 justify-center items-center gap-2.5 flex">
                            <div className="text-center text-neutral-400 text-base font-normal uppercase leading-normal">41 eu</div>
                          </div>
                          <div className="xl:px-5 py-3 px-1 rounded-2xl border border-neutral-100 justify-center items-center gap-2.5 flex">
                            <div className="text-center text-neutral-400 text-base font-normal uppercase leading-normal">41 eu</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-3 flex">
                      <div className=" text-stone-950 text-base font-normal uppercase leading-tight">Select color</div>
                      <div className=" justify-start items-start gap-2 inline-flex">
                        <div className="w-7 h-7 bg-white rounded-full border border-black" style={{ border: '1px solid black' }} />
                        <div className="w-7 h-7 bg-blue-600 rounded-full border border-stone-950" />
                        <div className="w-7 h-7 bg-lime-400 rounded-full border border-neutral-200" />
                        <div className="w-7 h-7 bg-red-600 rounded-full border border-neutral-200" />
                        <div className="w-7 h-7 bg-blue-600 rounded-full border border-neutral-200" />
                      </div>
                    </div>
                  </div>
                  <div className="my-7 py-5 w-full bg-primary rounded-full ">
                    <div className=" grow shrink basis-0 text-center text-stone-950 text-base font-normal uppercase leading-normal"
                      onClick={() => setActiveCard(undefined)}>Add to cart</div>
                  </div>
                </div>
              ) :
                (
                  <>
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
                  </>
                )}



            </div>
          ))}

        </div>

      </div>
    </div>
    */}