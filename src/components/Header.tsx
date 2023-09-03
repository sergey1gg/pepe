import React from 'react'
import { useState } from 'react'
import Cart from './Cart';
import { useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
  const location =useLocation()
  const navigate =useNavigate()
  const [card, openCard]=useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentUrl = location.pathname;
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
    <div className='px-5 pt-5'>
    <div className={`flex items-center justify-between flex-row-reverse left-0 w-auto text-mid `}>
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
            <div className="flex xl:hidden rounded-21xl bg-white flex-row p-3.5 items-start justify-start"
            onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="#081C00"/>
</svg>
</div>
        </div>
        <div className="cursor-pointer absolute xl:flex hidden left-1/2 transform -translate-x-1/2 rounded-131xl bg-white flex-row p-1 items-start justify-start gap-[3px]">
            <div className="rounded-21xl hover:bg-black w-[33%] flex flex-row py-3 px-4 box-border items-center justify-between hover:text-white"
            onClick={()=> navigate("/")}>
                <div className="uppercase">Home</div>
            </div>
            <div className="rounded-21xl hover:bg-black hover:text-white w-[33%] flex flex-row py-3 px-4 box-border items-center justify-between"
            onClick={()=> navigate("/shop")}>
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

<div className={` text-center ${currentUrl==='/shop' ||  currentUrl.startsWith('/product/') ? 'mt-[52px]': ' md:mt-48 mt-28'}` }>

<div
    className={`mx-auto my-auto text-xl md:text-21xl leading-[44px] uppercase font-rubik-bubbles text-center [-webkit-text-stroke:1px_#fff] 
    ${currentUrl==='/shop' || currentUrl.startsWith('/product/') ? 'hidden': ''}`}
  >MERCH STORE</div>
  <img
    className={` mx-auto my-auto w-[310px]
    h-[46px] lg:w-[896px] lg:h-[128px] md:w-[720px] md:h-[102px]  object-cover ${ currentUrl.startsWith('/product/')? 'hidden': ''}`}
    src="/asset-18x-11@2x.png"
  />
  </div>

  {isMenuOpen && (
  <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
  <div className=" mx-auto ">
  <div className="flex xl:hidden rounded-21xl bg-white flex-row p-3.5 items-start justify-start"
            onClick={()=> setIsMenuOpen(!isMenuOpen)}>
            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="#081C00"/>
</svg>
</div>
  <div className="cursor-pointer absolute rounded-131xl bg-white flex-row p-1 items-start justify-start gap-[3px]">
    <div
      className="rounded-21xl  flex flex-row py-3 px-4 box-border items-center justify-between hover:text-white"
      onClick={() => navigate("/")}
    >
      <div className="uppercase">Home</div>
    </div>
    <div
      className="rounded-21xl  hover:text-white flex flex-row py-3 px-4 box-border items-center justify-between"
      onClick={() => navigate("/shop")}
    >
      <div className="  uppercase">Shop</div>
    </div>
    <div
      className="rounded-21xl hover:text-white  flex flex-row py-3 px-4 box-border items-center justify-between"
      onClick={() => navigate("")}
    >
      <div className=" uppercase">About</div>
    </div>
  </div>
  </div>
</div>
      )}
     {card && <Cart toggleCard={toggleCard} />}
  </>
  )
}

export default Header
