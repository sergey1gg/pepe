import React from 'react'

const About = () => {
  return (
    <div>
              <div className="rounded-31xl bg-white w-full h-full overflow-hidden pb-5 text-mini mt-[48px] lg:mt-[60px]">
          <div className=" gap-[28px] flex items-center flex-col xl:flex-row">
            <div>
          <img
            className=" md:h-[504px] h-[250px] overflow-hidden object-cover items-center p-5"
            alt=""
            src="/frame-1806@2x.png"
          />
          </div>
          <div className='flex flex-col gap-6 text-center items-center'>
            <div className=" text-21xl leading-[44px] uppercase">
              <span>{` About `}</span>
              <span className="text-primary">CopeNothing</span>
            </div>
            <div className="self-stretch text-center px-10 leading-[24px] font-body">{`Are you ready for COPE? Our team has worked hard to create a unique merch for pepe & pndc holders. All our products are manufactured using the most modern technologies and high-quality materials. They are not only stylish and unique, but also comfortable to use. We strive to provide our customers with a high level of satisfaction and joy from shopping.`}</div>
            <div className="rounded-131xl bg-primary w-[213px] flex flex-row py-5 px-10 box-border items-center justify-center gap-[8px]">
              <img
                className=" w-6 h-6 overflow-hidden"
                alt=""
                src="/twitter.svg"
              />
              <div className="flex-1  leading-[24px] uppercase">
                twitter
              </div>
            </div>
          </div>
          </div>
          
          {/* 
          <div className="absolute top-[102px] left-[20px] w-[146px] h-[124.37px] [transform:_rotate(-30deg)] [transform-origin:0_0]">
            <img
              className="absolute top-[-93px] left-[-14px] w-[256.63px] h-[248.71px] object-cover"
              alt=""
              src="/asset-28x-2@2x.png"
            />
            <img
              className="absolute top-[-33.86px] left-[43.62px] w-[74.38px] h-[55.1px] object-cover"
              alt=""
              src="/image-40@2x.png"
            />
          </div>*/}

        </div>
    </div>
  )
}

export default About
