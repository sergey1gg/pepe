import React from 'react'

const Description = () => {
  return (
    <div className="flex h-auto my-5 p-5 bg-neutral-100 rounded-2xl flex-col justify-start items-start gap-3 ">
    <div className="md:self-stretch items-start gap-4 flex md:flex-row flex-col justify-between">
      <div className=" shrink basis-0 text-neutral-500 text-xs font-normal leading-normal">Email</div>
      <div className="w-auto text-stone-950 text-xs font-normal leading-normal">Mishunin.666@mail.ru </div>
      <div className="w-auto text-lime-400 text-xs font-normal leading-normal"> Change</div>
    </div>
    <div className="md:self-stretch items-start gap-4 flex md:flex-row flex-col justify-between">
      <div className=" shrink basis-0 text-neutral-500 text-xs font-normal leading-normal">Spawn to</div>
      <div className="w-auto text-left md:text-center text-stone-950 text-xs font-normal leading-normal">Eşref Bitlis Blv Çetin Apt. 11/A, 38000 Melikgazi, Turkey.666@mail.ru </div>
      <div className="w-auto text-lime-400 text-xs font-normal leading-normal"> Change</div>
    </div>
  </div>
  )
}

export default Description
