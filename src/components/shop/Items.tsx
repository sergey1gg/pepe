import React from 'react'
import { useState, useEffect } from 'react';
import { getProducts } from '../../api/items-api';
import { useNavigate } from 'react-router-dom';


const serverUrl = process.env.REACT_APP_SERVER_URL;
interface Items {
  featuresData: any;
}
const Items: React.FC<Items> = ({featuresData}) => { 

  const navigate=useNavigate()

const [card,setActiveCard]=useState<number>()
    return (
      <div  className='p-5 '>
      <div className="flex flex-col items-center justify-start gap-[28px] w-full mt-[16px] lg:mt-[40px]  ">
          <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-3 flex-row items-start justify-start gap-[20px] text-left">
              {featuresData?.map((item: any,index: any) => (

                  <div key={index} className={`relative rounded-3xl bg-white overflow-hidden h-auto`}>
                      {card === item._id ? (
                         <div className="w-full h-auto bg-white rounded-tl-2xl rounded-tr-2xl rounded-bl-3xl rounded-br-3xl">
                        
                         <div className="mt-10 px-5 flex justify-start items-start gap-4">
                           <div className="grow shrink basis-0 text-stone-950 text-xl font-normal uppercase leading-normal">{item.name}</div>
                           <div className="text-center text-stone-950 text-2xl font-normal uppercase leading-7">${item.cost}</div>
                         </div>
                         <div className="px-5 flex flex-col justify-start items-start gap-7 ">
                           <div className="flex-col justify-start items-start gap-3 flex">
                             <div className="justify-start items-center xl:gap-44 lg:gap-30 gap-1 gap inline-flex">
                               <div className=" text-stone-950 text-base font-normal uppercase leading-tight">Select size</div>
                             </div>

                             <div className="flex-col justify-start items-start flex">
                               <div className=" justify-start items-start inline-flex">
                               {item.sizes.map((size: string) =>(
                                 <div className="xl:px-5 py-3 px-1 rounded-2xl border hover:border-stone-950 border-neutral-100 justify-center items-center gap-2.5 flex">
                                   <div className="text-center hover:text-stone-950 text-neutral-400 text-base font-normal uppercase leading-normal">{size}</div>
                                 </div>
                                ))}
                               </div>
                             </div>

                           </div>
                           <div className="flex-col justify-start items-start gap-3 flex">
                             <div className=" text-stone-950 text-base font-normal uppercase leading-tight">Select color</div>
                             <div className=" justify-start items-start gap-2 inline-flex">
                             {item.colors.map((color: string) =>(
                               <div className="w-7 h-7  rounded-full border border-black" style={{border: '1px solid black', background: `${color}`}} />
                               ))}
                             </div>
                           </div>
                         </div>
                         <div className="my-7 py-5 w-full bg-primary rounded-full ">
                           <div className=" grow shrink basis-0 text-center text-stone-950 text-base font-normal uppercase leading-normal"
                           onClick={()=>setActiveCard(undefined)}>Add to cart</div>
                         </div>
                       </div>
                      ):
                      (
                          <>
                      <div className='' onClick={()=> navigate(`/product/${item._id}`)}>
                      <div className=" xl:top-[512px] top-[352px] left-[36px] flex flex-row items-start justify-end gap-[0] lg:gap-0 xl:gap-[150px] md:gap-[57px]">
                      <div className="  rounded-21xl bg-overlay [backdrop-filter:blur(40px)] flex flex-row py-2.5 px-5 m-5 items-center justify-center text-center text-mini">
                          <div className=" leading-[20px] uppercase">20/50</div>
                      </div>
                      </div>
                      
                          <img
                          className=" w-full xl:h-[300px] h-auto overflow-hidden object-cover scale-95 "
                          alt=""
                          src={`${serverUrl}/public/tovars/${item.images[0]}`}
                      />
                      </div>
                      <div className='flex justify-around items-center mb-3'>
                     <div className="flex flex-col items-start justify-start gap-[16px] text-mini md:text-mid">
                              <div className=" leading-[24px] uppercase">
                                  
                                  {item.name}
                              </div>
                              <div className=" text-5xl leading-[28px] uppercase text-center">
                                  {item.cost}$
                              </div>
                             
                          </div>
                          <div className="rounded-131xl bg-primary xl:w-[124px] md:w-[50px] hidden md:flex flex-row py-7 px-10 box-border items-center justify-center cursor-pointer "
                          onClick={()=> navigate(`/product/${item._id}`)}>
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

    )
}

export default Items
{/**

*/}