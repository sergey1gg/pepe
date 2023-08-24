import React from 'react'
import { useState } from 'react'
import Cart from './Cart';
const Header = () => {
  const [card, openCard]=useState(false)

  const toggleCard = () => {
    openCard(!card);
    if (!card) {
      //document.body.style.overflow = 'hidden';
    } else {
      //document.body.style.overflow = 'auto';
    }
  };
  return (
    <>
    <div>
    <div className="flex items-center justify-between flex-row-reverse mt-[32px] left-0 w-auto text-mid ">
    <div className="right-[30px] rounded-3xs flex flex-row items-end justify-start gap-[8px] text-mini">
            <div className="cursor-pointer rounded-21xl bg-white flex flex-row p-3.5 items-start justify-start">
                <img
                    className=" w-6 h-6 overflow-hidden shrink-0"
                    src="/search.svg"
                />
            </div>
            <div className="cursor-pointer rounded-21xl bg-white flex flex-row p-3.5 items-start justify-start" onClick={toggleCard}>
                <img
                    className=" w-6 h-6 overflow-hidden shrink-0"
                    src="/shoppingbag.svg"
                />
            </div>
            <div className="cursor-pointer hidden md:flex rounded-131xl bg-white  flex-row py-3.5 px-8 items-start justify-start">
                <div className=" leading-[24px] uppercase">
                    Connect wallet
                </div>
            </div>
            <div className="flex xl:hidden rounded-21xl bg-white flex-row p-3.5 items-start justify-start">
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="#081C00"/>
</svg>
</div>
        </div>
        <div className="cursor-pointer absolute xl:flex hidden left-1/2 transform -translate-x-1/2 rounded-131xl bg-white flex-row p-1 items-start justify-start gap-[3px]">
            <div className="rounded-21xl hover:bg-black w-[33%] flex flex-row py-3 px-4 box-border items-center justify-between hover:text-white">
                <div className="  uppercase">Home</div>
            </div>
            <div className="rounded-21xl hover:bg-black hover:text-white w-[33%] flex flex-row py-3 px-4 box-border items-center justify-between">
                <div className="  uppercase">Shop</div>
            </div>
            <div className="rounded-21xl hover:bg-black hover:text-white w-[34%] flex flex-row py-3 px-4 box-border items-center justify-between">
                <div className=" uppercase">About</div>
            </div>
        </div>

        <img
            className=" top-[calc(50% - 29px)] left-[27px] w-16 h-[58px] object-cover"
            src="/logo@2x.png"
        />
    </div>

</div>

<div className=" text-center md:mt-48 mt-28">

<div
    className="mx-auto my-a text-xl md:text-21xl leading-[44px] uppercase font-rubik-bubbles text-center [-webkit-text-stroke:1px_#fff] "
  >MERCH STORE</div>
  <img
    className=" mx-auto my-auto w-[310px]
    h-[46px] lg:w-[896px] lg:h-[128px] md:w-[720px] md:h-[102px]  object-cover"
    src="/asset-18x-11@2x.png"
  />
  </div>


<div className="top-[0px] left-[0px] w-full ">
  <div
    className="absolute top-[209px] left-[calc(50%_-_97px)] leading-[24px] uppercase [-webkit-text-stroke:4px_#fff]"
  ><p className="m-0">&nbsp;</p></div><div
    className="absolute top-[400.65px] md:top-[500px] lg:top-[574.65px] left-[calc(50%_-_147.59px)] rounded-21xl [background:radial-gradient(50%_50%_at_50%_50%,_#525252,_#282828)] shadow-[0px_-4px_10px_rgba(255,_255,_255,_0.5)_inset,_0px_4px_10px_rgba(255,_255,_255,_0.5)_inset] box-border w-[292px] flex flex-row py-6 px-10 items-center justify-center [transform:_rotate(-3deg)] [transform-origin:0_0] text-mid text-white border-[6px] border-solid border-white"
  ><div className="relative leading-[20px] uppercase">Shop now</div></div><img
    className=" absolute top-[550px] lg:top-[428px] left-0 w-[188px] h-[188.24px] lg:w-[511px] lg:h-[522.24px] object-cover"
    src="/group-11@2x.png"
  /><div
    className="absolute top-[137.89px] md:right-5 right-32 md:w-[183.27px] h-[115.38px] w-auto scale-50 md:scale-100 [transform-origin:0_0]"
  ><img
      className="absolute top-[18.09px] left-[-55.12px] w-[251.27px] h-[183.38px] object-cover"
      src="/asset-18x1@2x.png"
    /><div
      className="absolute top-[65.89px] left-[-10.63px] rounded-[50%] bg-yellow w-[145.53px] h-[10.67px] [transform:_rotate(24.64deg)] [transform-origin:0_0]"
    /><img
      className="absolute top-[79.11px] left-[45.92px] w-[15px] h-[15px] object-cover"
      
      src="/frame-1805-11@2x.png"
    /></div><img
    className=" absolute top-[500px] transform scale-x-[-1] right-0 w-[183.9px] h-[252.28px]  lg:w-[366.9px] lg:h-[494.28px]"
    
    src="/group-7.svg"
  /><div
    className="absolute top-[188.7px] scale-50 md:scale-100 [transform-origin:0_0]"
  ><img
      className="absolute top-[-103.7px] left-[-14px] w-[284.27px] h-[275.19px] object-cover"
      
      src="/asset-28x-22@2x.png"
    /><img
      className="absolute top-[-38.82px] left-[50.01px] w-[85.28px] h-[63.18px] object-cover"
      
      src="/image-402@2x.png"
    /></div></div>
     {card && <Cart toggleCard={toggleCard} />}
  </>
  )
}

export default Header
