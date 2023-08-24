import React from 'react'
import Description from './Description';

interface SpawnProps {
    currentStep: React.Dispatch<React.SetStateAction<number>>;
    // другие ожидаемые пропсы
  }

const SpawnMethod: React.FC<SpawnProps> = ({currentStep}) => {
  return (
    <div className='w-auto p-5'>
     <Description/>
<div className="w-auto h-auto flex-col justify-start items-start gap-4 ">
  <div className="text-start text-black text-base font-normal leading-normal">Shipping method</div>
  <div className="self-stretch h-auto xl:flex-row flex-col justify-start items-start gap-4 flex">
    <div className="self-stretch h-auto px-6 py-5 bg-neutral-100 rounded-2xl border border-stone-950 flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch justify-between items-start gap-4 flex">
        <div className=" text-stone-950 text-base font-normal uppercase leading-tight font-h-1">Standard International</div>
        <div className="text-stone-950 text-base font-normal uppercase leading-tight font-h-1"> $10</div>
      </div>
      <div className="w-auto  text-neutral-500 text-base font-normal leading-normal">Estimated delivery Monday, 21 Aug–Monday, 11 Sept</div>
    </div>
    <div className="self-stretch h-auto px-6 py-5 bg-neutral-100 rounded-2xl flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch justify-between items-start gap-4 flex">
        <div className=" text-stone-950 text-base font-normal uppercase leading-tight font-h-1">Fast</div>
        <div className="text-stone-950 text-base font-normal uppercase leading-tight font-h-1"> $50</div>
      </div>
      <div className="w-auto text-neutral-500 text-base font-normal leading-normal">Estimated delivery Monday, 21 Aug–Monday, 11 Sept</div>
    </div>
  </div>
</div>
<div className="mt-20 w-auto flex flex-row box-border items-center justify-between text-mini text-black font-button">
    <div className='font-h-1' onClick={()=> currentStep(prev => prev-1)}>Back</div>
                                <div className="rounded-131xl bg-primary  py-3 px-10  leading-[24px] uppercase font-h-1"
                                onClick={()=> currentStep(prev => prev+1)}>
                                    Continue to shiping
                                </div>
                            </div>
    </div>
  )
}

export default SpawnMethod
