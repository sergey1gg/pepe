import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate=useNavigate()
  return (
    <div  className='md:p-5 p-0'>
    <div className='rounded-31xl bg-white'>
    <div className="flex xl:flex-row flex-col w-full h-auto overflow-hidden shrink-0 text-left text-mini mt-[40px] lg:mt-[68px] items-center">
    <div className=" top-[20px] left-[20px] rounded-t-31xl bg-primary w-full h-auto overflow-hidden text-center text-[21px] font-body scale-95">
        <img
          className=" w-full h-full object-cover"
          alt=""
          src="/footer.svg"
        />
    </div>
    <div className="w-full top-[20px] left-[664px] rounded-11xl bg-surface h-auto overflow-hidden">
      <div className=" top-[10px] left-[10px] w-full h-auto flex flex-col items-start justify-start gap-[12px] scale-95">
        <div className="flex self-stretch relative rounded-xl bg-white w-full h-auto overflow-hidden shrink-0">
          <div className="w-full lg:h-[122px] h-auto flex lg:flex-row flex-col items-center justify-start gap-[8px] p-3">
            <div className="self-stretch flex-1 rounded-xl bg-surface flex flex-row  items-center justify-center p-3"
            onClick={()=>navigate("/shop")}>
              <div className=" leading-[24px] uppercase">
                Shop
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-surface flex flex-row  items-center justify-center p-3">
              <a href='#copenothing' className=' text-black no-underline'>
              <div className=" leading-[24px] uppercase">
                CopeNothing
              </div>
              </a>
            </div>
            
            <div className="self-stretch flex-1 rounded-xl bg-surface flex flex-row  items-center justify-center p-3">
              <a href='#how-buy' style={{textDecoration: "none", color: 'black'}}>
              <div className=" leading-[24px] uppercase">
                How to buy
              </div>
              </a>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-surface flex flex-row  items-center justify-center p-3">
            <a href='#about2' style={{textDecoration: "none", color: 'black'}}>
              <div className=" leading-[24px] uppercase">
                Tokens
              </div>
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch relative rounded-xl bg-white h-[335px] overflow-hidden shrink-0 text-center">
          <div className="absolute top-[calc(50%_-_71.5px)] left-[calc(50%_-_155px)] flex flex-col items-center justify-start gap-[24px]">
            <div className="relative leading-[24px] uppercase inline-block w-[310px]">
              Are there any issues with the delivery or payment
              confirmation?
            </div>
            <div className="rounded-131xl bg-primary w-[310px] flex flex-row py-3 px-10 box-border items-center justify-center">
              <div className="flex-1 relative leading-[24px] uppercase">
                {" "}
                contact support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
  <div className=" rounded-11xl bg-primary border-8 border-surface border-solid flex flex-col py-5 px-10 my-5 box-border items-start justify-start text-mini">
      <div className="self-stretch flex lg:flex-row flex-col-reverse items-center justify-center gap-[40px]">
        <div className="flex-1 relative leading-[24px] uppercase text-center">
          Copyright 2023 CopeNothing. All rights reserved
        </div>
        <div className="relative leading-[24px] uppercase">
          Terms of service
        </div>
        <div className="relative leading-[24px] uppercase">
          Privacy policy
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Footer
