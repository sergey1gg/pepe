import React from 'react'

const Succespay = () => {
  return (
    <main className=" bg-primary w-full h-full text-left text-xl text-black font-h-1">
    <div className="relative bg-primary w-full h-[100vh] py-4 overflow-hidden text-center text-mini text-black font-button">
    <div className=" top-[30px] left-[30px] rounded-[30px] bg-white w-full h-full overflow-hidden">
           <div className="h-screen flex flex-col items-center justify-center gap-[48px]">
        <img
          className="relative bg-primary rounded-[40px] w-[175px] h-[175px]"
          alt=""
          src="/mailsend.svg"
        />
        <div className="flex flex-col items-center justify-start gap-[28px]">
          <div className="relative leading-[24px] uppercase inline-block w-auto md:w-[589px]">
            <p className="m-0">
              <span>{`email with information about your order has spawn. If you have any problems, `}</span>
              <span className="text-[#FF8C39] cursor-pointer">contact us.</span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-start gap-[12px]">
            <div className="flex flex-col items-center justify-start">
              <div className="rounded-131xl bg-primary w-80 flex flex-row py-4 px-10 box-border items-center justify-center">
                <div className="flex-1 relative leading-[24px] uppercase cursor-pointer"
                onClick={()=> window.location.href="/"}>
                  Go to Mail
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start">
              <div className="rounded-131xl box-border w-80 flex flex-row py-4 px-10 items-center justify-center border-[1px] border-solid border-primary">
                <div className="flex-1 relative leading-[24px] uppercase cursor-pointer" 
                onClick={()=> window.location.href="/"}>
                  Back to shopping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  </main>
  )
}

export default Succespay
