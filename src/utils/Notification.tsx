import React from 'react'

const serverUrl = process.env.REACT_APP_SERVER_URL;


const Notification: React.FC<{ img: string; color: string; size: string, name: string }> = ({ img, color, size, name }) => {
  return (
    <>
<div className="fixed right-0 top-8 z-30 w-auto h-20 p-2 bg-white rounded-xl border-solid border-2 border-stone-950 justify-start items-center gap-3 inline-flex">
  <img className="w-16 h-16 rounded-2xl" src={`${serverUrl}/public/tovars/${img}`} />
  <div className="grow shrink basis-0 pr-3 flex-col justify-start items-start gap-4 inline-flex">
    <div className="self-stretch h-10 flex-col justify-start items-start gap-1 flex">
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        <div className="w-4 h-4 relative flex justify-center items-center" >
          <img src="/shoppingbag.svg" />
          </div>
        <div className="grow shrink basis-0 text-stone-950 text-base font-body leading-none">Added to cart</div>
      </div>
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        <div className="grow shrink basis-0 text-stone-950 text-xs font-normal uppercase leading-tight">{name}</div>
        <div className="justify-start items-start gap-2 flex">
          <div className="px-1 bg-lime-400 rounded-3xl flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-6 text-center text-stone-950 text-xs font-normal uppercase leading-tight">{size}</div>
          </div>
          <div className="w-5 h-5  rounded-full border border-solid border-neutral-200" style={{background: color}} />
        </div>
      </div>
    </div>
  </div>
</div>
  <div className="timer-bar fixed right-3 w-auto"/>
  </>
  )
}


export default Notification
