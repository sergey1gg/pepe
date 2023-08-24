import React from 'react'

interface ShippingProps {
  currentStep: React.Dispatch<React.SetStateAction<number>>;
  // другие ожидаемые пропсы
}
const ShippingAddress: React.FC<ShippingProps> = ({currentStep}) => {
  return (
<>
<div className=" top-[124px] left-[28px] w-auto flex flex-col items-end justify-start gap-[36px] text-black p-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[48px]">
                                <div className="flex flex-col items-start justify-start gap-[20px]">
                                    <div className="w-full flex flex-col items-start justify-start gap-[16px]">
                                        <div className="relative leading-[24px]">Contact</div>
                                           <input type="text" name="" id="" className='rounded-xl w-full bg-surface overflow-hidden flex flex-row py-3.5  pl-5 box-border items-start justify-start relative gap-[16px] text-left text-mini text-darkgray-100
                                           placeholder:font-body'
                                           placeholder='Email'/> 
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[12px] text-left text-[14px] text-black">
                                        <div className="relative w-6 h-6">
                                            <div className=" top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] rounded bg-primary w-5 h-5" />
                                            <img
                                                className=" top-[calc(50%_-_4px)] left-[calc(50%_-_5px)] w-[10.54px] h-[7.67px]"
                                                alt=""
                                                src="/vector.svg"
                                            />
                                        </div>
                                        <div className="relative leading-[24px]">
                                            Email me with news and offers
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-mini text-darkgray-100">
                                    <div className="relative text-mid leading-[24px] text-black text-center">
                                        Shipping address
                                    </div>
                                    <div className="self-stretch flex xl:flex-row flex-col justify-start gap-[16px]">
                                        <div className="flex-1 rounded-mini bg-surface overflow-hidden flex flex-row py-3.5 pl-5 items-start justify-start relative gap-[16px]">
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0 hidden z-[0]"
                                                alt=""
                                                src="/search2.svg"
                                            />
                                            <div className="flex-1 relative leading-[24px] z-[1]">
                                                Country/Region
                                            </div>
                                            <img
                                                className="relative w-6 h-6 overflow-hidden shrink-0 z-[2]"
                                                alt=""
                                                src="/angledown.svg"
                                            />
                                            <img
                                                className=" my-0 mx-[!important] top-[9px] right-[-40.67px] w-[47px] h-[46px] object-cover hidden z-[3]"
                                                alt=""
                                                src="/image-382@2x.png"
                                            />
                                        </div>
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='First name'/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Last name'/> 
                                    </div>
                                    <div className="self-stretch  flex xl:flex-row flex-col justify-start gap-[16px]">
                                    <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Company'/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Address'/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Apartment, suit, etc'/> 
                                    </div>
                                    <div className="self-stretch flex xl:flex-row flex-col justify-start gap-[16px]">
                                    <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='City'/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Post code'/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Phone'/> 
                                    </div>
                                </div>
                            </div>
                            <div className="font-h-1 rounded-131xl bg-primary md:w-auto w-full flex flex-row py-3 px-10 box-border items-center justify-center text-mini text-black font-button"
                            onClick={()=> currentStep(prev => prev+1)}>
                                <div className="flex-1 relative leading-[24px] uppercase">
                                    Continue to shiping
                                </div>
                            </div>
                        </div>
</>
  )
}

export default ShippingAddress
