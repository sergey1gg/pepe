import React, { useEffect, useState } from 'react'

interface Description {
  currentStep: React.Dispatch<React.SetStateAction<number>>;

}
const Description: React.FC<Description> = ({currentStep}) => {
  const [email,setEmail]=useState()
  const [spawn,setSpawn]=useState<string>()
  useEffect(()=>{
    const storedShippingData = JSON.parse(localStorage.getItem('shippingData') || '{}');
    setEmail(storedShippingData.email)
    setSpawn(`${storedShippingData.country}, ${storedShippingData.city}, ${storedShippingData.address},
    ${storedShippingData.apartment}, ${storedShippingData.postCode}`);
  },[])
  return (
    <div className="flex h-auto my-5 p-5 bg-neutral-100 rounded-2xl flex-col justify-start items-start gap-3 ">
    <div className="md:self-stretch items-start gap-4 flex md:flex-row flex-col justify-between">
      <div className=" shrink basis-0 text-neutral-500 text-xs font-normal leading-normal">Email</div>
      <div className="w-auto text-stone-950 text-xs font-normal leading-normal">{email} </div>
      <div className="w-auto text-lime-400 text-xs font-normal leading-normal cursor-pointer"
      onClick={()=> currentStep(2)}> Change</div>
    </div>
    <div className="md:self-stretch items-start gap-4 flex md:flex-row flex-col justify-between">
      <div className=" shrink basis-0 text-neutral-500 text-xs font-normal leading-normal">Spawn to</div>
      <div className="w-auto text-left md:text-center text-stone-950 text-xs font-normal leading-normal">{spawn}</div>
      <div className="w-auto text-lime-400 text-xs font-normal leading-normal cursor-pointer"
      onClick={()=>currentStep(2)}> Change</div>
    </div>
  </div>
  )
}

export default Description
