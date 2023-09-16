import React, { useState, useEffect } from 'react'
import Description from './Description'
import { getPondPrice, getPrice, getTransactions } from '../../api/pay-api';
import { useAccount } from 'wagmi';
import Succespay from '../Succespay';



interface PayProps {
    currentStep: React.Dispatch<React.SetStateAction<number>>;
    totalAmount: number
    // другие ожидаемые пропсы
  }
const Pay: React.FC<PayProps> = ({currentStep, totalAmount}) => {
  
  const {address} =useAccount()
  const email = JSON.parse(localStorage.getItem('shippingData') || '{}').email;

  const shippingData= JSON.parse(localStorage.getItem('shippingData') || '{}')
  const cart =JSON.parse(localStorage.getItem('cart') || '{}')
  const initialAddress = ' 0x11Ee12594aEcF93B6941cFF29A01074d6A899FdF';

  const [pondCount, setPondCount]=useState<number>()
  const [pepeCount, setPepeCount]=useState<number>()
  const [remainingTime, setRemainingTime] = useState(600);

  useEffect(()=>{
  const fetchPrice=async ()=>{
    try{
      const dataPepe = await getPrice(); 
      const dataPond = await getPondPrice(); 
      
      const PepeinUsd = dataPepe.price.data[dataPepe.id].quote.USDT.price;
      setPepeCount(Math.round(totalAmount / PepeinUsd));
      
      const PondinUsd = dataPond.price.data[dataPond.id].quote.USDT.price;
      setPondCount(Math.round(totalAmount / PondinUsd));
    } catch(error){
      console.log(error)
    }
  }  
  fetchPrice()  
  },[])

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timer);
        // Таймер истек, выполните необходимые действия
      }
    }, 1000);
  
    return () => clearInterval(timer);
  }, [remainingTime]);

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response =  await getTransactions(address, email, pepeCount, pondCount, JSON.stringify(shippingData), JSON.stringify(cart)); 
        if (response) {
          if(response.result===true){
            window.location.href="/success"
          }
        }
      } catch (error) {
        console.error('Ошибка при проверке оплаты:', error);
      }
    };
  
    const paymentStatusTimer = setInterval(checkPaymentStatus, 30000);
  
    return () => clearInterval(paymentStatusTimer); 
  }, []);

  
  const [walletAddress, setWalletAddress] = useState(initialAddress);
  const copyToClipboard = (text: string ) => {
    navigator.clipboard.writeText(text)
  };

  if(!pepeCount && !pondCount){
    return(
      <div>Loading...</div>
    )
  }
  if(!address){
    return(
      <div ><a href='/'>Please connect your wallet</a></div>
    )
  }
  return (
    <div className='w-auto p-5'>
        <Description currentStep={currentStep}/>
        <div className="w-full h-auto flex-col justify-start items-start gap-4 flex">
  <div className="text-center text-stone-950 text-base font-normal leading-normal">Address for replenishment</div>
  <div className="justify-start items-start gap-2 flex">
    <div className="w-6 h-6 relative">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7C11.7348 7 11.4804 7.10536 11.2929 7.29289C11.1054 7.48043 11 7.73478 11 8V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12V8C13 7.73478 12.8946 7.48043 12.7071 7.29289C12.5196 7.10536 12.2652 7 12 7ZM12 15C11.8022 15 11.6089 15.0586 11.4444 15.1685C11.28 15.2784 11.1518 15.4346 11.0761 15.6173C11.0004 15.8 10.9806 16.0011 11.0192 16.1951C11.0578 16.3891 11.153 16.5673 11.2929 16.7071C11.4327 16.847 11.6109 16.9422 11.8049 16.9808C11.9989 17.0194 12.2 16.9996 12.3827 16.9239C12.5654 16.8482 12.7216 16.72 12.8315 16.5556C12.9414 16.3911 13 16.1978 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15ZM21.71 7.56L16.44 2.29C16.2484 2.10727 15.9948 2.00368 15.73 2H8.27C8.00523 2.00368 7.75163 2.10727 7.56 2.29L2.29 7.56C2.10727 7.75163 2.00368 8.00523 2 8.27V15.73C2.00368 15.9948 2.10727 16.2484 2.29 16.44L7.56 21.71C7.75163 21.8927 8.00523 21.9963 8.27 22H15.73C15.9948 21.9963 16.2484 21.8927 16.44 21.71L21.71 16.44C21.8927 16.2484 21.9963 15.9948 22 15.73V8.27C21.9963 8.00523 21.8927 7.75163 21.71 7.56ZM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4H15.31L20 8.69V15.31Z" fill="#FF8C39"/>
</svg>
    </div>
    <div className="text-center text-orange-400 text-base font-normal leading-normal">Payment takes place only in PNDC/PEPE</div>
  </div>
  <div className="self-stretch h-auto p-3 bg-neutral-100 rounded-2xl flex-col justify-center items-start gap-4 flex">
    <div className="self-stretch h-auto p-4 bg-white rounded-lg flex-col justify-start items-center gap-4 flex">
      <div className="self-stretch h-auto flex-col justify-center items-start gap-7 flex">
        <div className='flex justify-between w-full'>
        <div className="text-stone-950 text-xl font-normal uppercase leading-normal font-h-1">${totalAmount}:</div>
        <div className="text-center text-stone-950 text-5xl font-normal uppercase leading-9 font-h-1">{Math.floor(remainingTime / 60)}:{(remainingTime % 60).toString().padStart(2, '0')}</div>
        </div>
        <div className="self-stretch justify-start items-start gap-3 flex flex-col xl:flex-row text-[12px] md:text-mid">
          <div className="justify-start items-center gap-2 flex">
            <div className="px-2.5 bg-lime-400 rounded-3xl flex-col justify-start items-center gap-2.5 flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-base font-normal uppercase leading-7 font-h-1">$Pepe</div>
              </div>
            </div>
            <div className="text-stone-950 text-base font-normal uppercase leading-7 font-h-1 cursor-pointer"
            onClick={()=>copyToClipboard(`${pepeCount}`)} >{pepeCount || null}</div>
            <div className="w-6 h-6 relative cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6V3C7.5 2.73478 7.60536 2.48043 7.79289 2.29289C7.98043 2.10536 8.23478 2 8.5 2H20.5C20.7652 2 21.0196 2.10536 21.2071 2.29289C21.3946 2.48043 21.5 2.73478 21.5 3V17C21.5 17.2652 21.3946 17.5196 21.2071 17.7071C21.0196 17.8946 20.7652 18 20.5 18H17.5V21C17.5 21.552 17.05 22 16.493 22H4.507C4.37513 22.0008 4.2444 21.9755 4.12232 21.9256C4.00025 21.8757 3.88923 21.8022 3.79566 21.7093C3.70208 21.6164 3.62779 21.5059 3.57705 21.3841C3.52632 21.2624 3.50013 21.1319 3.5 21L3.503 7C3.503 6.448 3.953 6 4.51 6H7.5ZM5.503 8L5.5 20H15.5V8H5.503ZM9.5 6H17.5V16H19.5V4H9.5V6Z" fill="#ABABAB"/>
</svg>

            </div>
          </div>
          <div className="h-auto rounded-3xl justify-start items-center gap-2.5 flex">
            <div className="grow shrink basis-0 h-px bg-lime-400" />
            <div className="text-stone-950 text-sm font-normal uppercase leading-7 font-h-1">or</div>
            <div className="grow shrink basis-0 h-px bg-lime-400" />
          </div>
          <div className="grow shrink basis-0 h-auto justify-start items-center gap-2 flex">
            <div className="px-2.5 bg-lime-400 rounded-3xl flex-col justify-start items-center gap-2.5 flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="text-stone-950 text-base font-normal uppercase leading-7 font-h-1">$PNDC</div>
              </div>
            </div>
            <div className="text-stone-950 text-base font-normal uppercase leading-7 font-h-1 cursor-pointer"
            onClick={()=>copyToClipboard(`${pondCount}`)} >{pondCount || null}</div>
            <div className="justify-start items-center gap-2.5 flex">
            <div className="w-6 h-6 relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6V3C7.5 2.73478 7.60536 2.48043 7.79289 2.29289C7.98043 2.10536 8.23478 2 8.5 2H20.5C20.7652 2 21.0196 2.10536 21.2071 2.29289C21.3946 2.48043 21.5 2.73478 21.5 3V17C21.5 17.2652 21.3946 17.5196 21.2071 17.7071C21.0196 17.8946 20.7652 18 20.5 18H17.5V21C17.5 21.552 17.05 22 16.493 22H4.507C4.37513 22.0008 4.2444 21.9755 4.12232 21.9256C4.00025 21.8757 3.88923 21.8022 3.79566 21.7093C3.70208 21.6164 3.62779 21.5059 3.57705 21.3841C3.52632 21.2624 3.50013 21.1319 3.5 21L3.503 7C3.503 6.448 3.953 6 4.51 6H7.5ZM5.503 8L5.5 20H15.5V8H5.503ZM9.5 6H17.5V16H19.5V4H9.5V6Z" fill="#ABABAB"/>
</svg>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
      <div className="self-stretch h-auto pl-5 pr-1 py-3 bg-white rounded-lg justify-start items-center gap-4 flex">
      <div className="grow shrink basis-0 text-stone-950 text-base font-normal text-[10px] md:text-mid">
          <React.Fragment>
            {walletAddress}
            <br className='block md:hidden' />
          </React.Fragment>
      </div>
      {/* SVG элемент с обработчиком события click */}
      <div
        className="w-16 h-16 p-2 bg-lime-400 rounded justify-center items-center gap-2 flex"
        onClick={()=>copyToClipboard(`${walletAddress}`)}
        style={{ cursor: 'pointer' }}
      >
        <div className="w-6 h-6 relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 6V3C7.5 2.73478 7.60536 2.48043 7.79289 2.29289C7.98043 2.10536 8.23478 2 8.5 2H20.5C20.7652 2 21.0196 2.10536 21.2071 2.29289C21.3946 2.48043 21.5 2.73478 21.5 3V17C21.5 17.2652 21.3946 17.5196 21.2071 17.7071C21.0196 17.8946 20.7652 18 20.5 18H17.5V21C17.5 21.552 17.05 22 16.493 22H4.507C4.37513 22.0008 4.2444 21.9755 4.12232 21.9256C4.00025 21.8757 3.88923 21.8022 3.79566 21.7093C3.70208 21.6164 3.62779 21.5059 3.57705 21.3841C3.52632 21.2624 3.50013 21.1319 3.5 21L3.503 7C3.503 6.448 3.953 6 4.51 6H7.5ZM5.503 8L5.5 20H15.5V8H5.503ZM9.5 6H17.5V16H19.5V4H9.5V6Z"
              fill="black"
            />
          </svg>

            </div>
        </div>
      </div>
    </div>
    <div className="self-stretch justify-start items-center gap-4 flex">
      <div className="w-28 h-28 relative rounded-lg">
        <img src="/qr.svg" />
        </div>
      <div className="w-auto text-stone-950 text-base font-normal leading-normal">This address accepts only ERC-20(Ethereum) network, transferring here any other coin will result in fund loss.</div>
      <img className="w-36 h-36 -rotate-12 lg:block hidden" src="/image-38@2x.svg" />
    </div>
  </div>
</div>
<div className="mt-20 w-auto flex flex-row box-border items-center justify-between text-mini text-black font-button">
    <div className='font-h-1 cursor-pointer' onClick={()=> currentStep(prev => prev-1)}>Back</div>
                                <div className="rounded-131xl bg-primary  py-3 px-10  leading-[24px] uppercase font-h-1">
                                    Continue to shiping
                                </div>
                            </div>
        </div>
  )
}

export default Pay
