import React from 'react'

const Categories = () => {
  return (
    <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-start justify-start gap-[20px] text-11xl mt-[48px] lg:mt-[60px]">
          <div className="flex flex-col rounded-31xl bg-white w-full h-auto overflow-hidden shrink-0">
            <img
              className=" w-full h-auto object-cover"
              alt=""
              src="/cover@2x.png"
            />
            <div className="flex flex-row items-center justify-center gap-[20px] py-2">
              <div className=" leading-[36px] uppercase">Caps</div>
              <div className="rounded-131xl bg-primary w-[104px] flex flex-row py-7 px-10 box-border items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/angleright.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-31xl bg-white w-full h-auto overflow-hidden shrink-0">
            <img
              className=" w-full h-auto object-cover"
              alt=""
              src="/cover@2x.png"
            />
            <div className="flex flex-row items-center justify-center gap-[20px] py-2">
              <div className=" leading-[36px] uppercase">Caps</div>
              <div className="rounded-131xl bg-primary w-[104px] flex flex-row py-7 px-10 box-border items-center justify-center">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/angleright.svg"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Categories
