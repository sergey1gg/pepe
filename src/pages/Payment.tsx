import React, { useEffect } from 'react'
import ShippingAddress from '../components/payment/ShippingAddress'
import { useState } from 'react'
import SpawnMethod from '../components/payment/SpawnMethod';
import Pay from '../components/payment/Pay';

const serverUrl = process.env.REACT_APP_SERVER_URL;
const Payment = () => {

  const [cart, setCart] = useState<{ product: any; size: string; color: string; quantity: number }[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [shippingCost, setShippingCost]=useState(0)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
    const newTotalAmount = storedCart.reduce((total: number, item: any) => {
      return total + (item.product.cost * item.quantity);
    }, 0);

    setTotalAmount(newTotalAmount);
    console.log("effectcart")
  }, []); 

  useEffect(()=>{
    const shpCost=JSON.parse(localStorage.getItem('shippingCost') || '0')
    setShippingCost(shpCost)
  },)


  
  const updateQuantity = (index: number, newQuantity: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateTotalAmount(updatedCart);
  };
  const removeItem = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    updateTotalAmount(updatedCart);
  };
  
  const updateTotalAmount = (cartItems: any[]) => {
    const newTotalAmount = cartItems.reduce((total, item) => {
      return total + item.product.cost * item.quantity;
    }, 0);

    setTotalAmount(newTotalAmount);
  };

    const [step, currentStep] = useState<number>(2);
    return (
        <main className=" bg-primary w-full h-full text-left text-xl text-black font-h-1">
            <div className="relative bg-primary w-auto h-auto overflow-hidden text-left text-mini text-black md:px-5 px-0 pt-5">
                <div className='lg:grid lg:grid-cols-3 gap-4 flex flex-col'>
                    <div className=" lg:col-span-2 col-span-3 top-[30px] left-[30px] rounded-11xl bg-white h-full overflow-hidden text-center text-mid font-body">
                        <div className=" top-[28px] left-[28px] flex flex-row items-start justify-start p-5">
                            <div className={`rounded-131xl bg-primary flex flex-row py-3 px-6 items-center justify-center 
                            ${step === 1 ? '' : ''}`}>
                                <div className="relative leading-[24px]">Cart</div>
                            </div>
                            <div className={`rounded-131xl flex flex-row py-3 px-6 items-center justify-center 
                             ${step === 2 ? 'border-[1px] border-solid border-black' : ''} ${step > 2 ? ' bg-primary' : 'bg-surface '}`}>
                                <div className="relative leading-[24px]">Information</div>
                            </div>
                            <div className={`rounded-131xl  flex flex-row py-3 px-6 items-center justify-center
                            ${step === 3 ? 'bg-surface border-[1px] border-solid border-black' : ''} ${step > 3 ? ' bg-primary' : 'bg-surface '}`}>
                                <div className="relative leading-[24px]">Spawn</div>
                            </div>
                            <div className={`rounded-131xl flex flex-row py-3 px-6 items-center justify-center
                            ${step === 4 ? 'bg-surface border-[1px] border-solid border-black' : ''} ${step > 4 ? ' bg-primary' : 'bg-surface '}`}>
                                <div className="relative leading-[24px]">Payment</div>
                            </div>
                            <div className="rounded-131xl bg-surface flex flex-row py-3 px-6 items-center justify-center">
                                <div className="relative leading-[24px]">Review</div>
                            </div>
                        </div>
                        {step === 2 ? (
                            <ShippingAddress currentStep={currentStep}/>
                        ) : step === 3 ? (
                            <SpawnMethod currentStep={currentStep} shippingCost={setShippingCost}/>
                        ) : step === 4 ? (
                            <Pay currentStep={currentStep} totalAmount={totalAmount+shippingCost}/> 
                        ): null}
                    </div>
                    <div className=" flex flex-col items-center justify-between rounded-11xl bg-white h-full overflow-hidden p-2">
                        <div className="w-full top-[24px] left-[20px] flex flex-col items-center justify-start gap-[12px] font-button">
                            <div className="w-full flex flex-col items-center justify-center gap-[5px] ">
                            {cart?.map((item: any,index)=>(
                                <div key={index} className='flex w-full lg:scale-90 scale-100 xl:scale-100'>
                                <img
                                key={index}
                                    className="relativew-auto h-[88px] lg:h-[74px] xl:h-[88px] object-cover"
                                    alt=""
                                    src={`${serverUrl}/public/tovars/${item?.product?.images[0]}`}
                                />
                                <div className="p-5 flex-1 flex flex-col items-start justify-start gap-[5px]">
                                    <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                                        <div className="flex-1 relative leading-[20px] uppercase">
                                            {item.product.name}
                                        </div>
                                        <div className="relative leading-[20px] uppercase text-center">
                                          
                                            ${item.product.cost*item.quantity}
                                        </div>
                                    </div>
                                    <div className=" self-stretch flex flex-row items-start justify-start gap-[16px] text-center">
                                        <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                                            <div className="rounded-21xl bg-primary flex flex-col py-0.5 px-3 items-start justify-start">
                                                <div className="relative leading-[20px] uppercase inline-block w-6">
                                                    {item.size}
                                                </div>
                                            </div>
                                            <div className="relative rounded-[50%] box-border w-5 h-5 border-[1px] border-solid border-gainsboro" 
                                            style={{background: item.color}}/>
                                        </div>
                                        <div className="rounded-131xl bg-surface w-[105px] overflow-hidden shrink-0 flex flex-row p-1.5 box-border items-center justify-center gap-[10px]">
                                            <div className="relative rounded-131xl bg-primary w-6 h-6 overflow-hidden shrink-0"
                                             onClick={() => removeItem(index)}>
                                                <img
                                                    className=" top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] w-5 h-5 overflow-hidden"
                                                    alt=""
                                                    src="/trashalt1.svg"
                                                />
                                                <img
                                                    className=" top-[80px] left-[125px]w-auto h-[85px] object-cover opacity-[0]"
                                                    alt=""
                                                    src="/pinclipart-2@2x.png"
                                                />
                                            </div>
                                            <div className="flex-1 relative leading-[20px] uppercase">{item.quantity}</div>
                                            <div className="relative rounded-131xl bg-primary w-6 h-6 overflow-hidden shrink-0"
                                            onClick={() => updateQuantity(index, item.quantity + 1)}>
                                                <img
                                                    className=" top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] w-5 h-5 overflow-hidden"
                                                    alt=""
                                                    src="/plus.svg"
                                                />
                                                <img
                                                    className=" top-[80px] left-[125px]w-auto h-[85px] object-cover opacity-[0]"
                                                    alt=""
                                                    src="/pinclipart-21@2x.png"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                ))}
                            </div>

                            <div className="w-full flex">

                            <input className="w-full rounded-21xl bg-surface overflow-hidden  py-3.5  pl-5 box-border relative gap-[16px] text-darkgray-300 font-body" placeholder='Gift card or discount'
                style={{background: 'url(image-38@2x.svg) no-repeat scroll right center', backgroundColor: 'rgb(245 245 245 / var(--tw-bg-opacity))'}} />
                
                            </div>
                        </div>

                        <div className="my-5 bottom-[8px] left-[calc(50%_-_187px)] rounded-xl bg-surface w-full flex flex-col py-7 px-4 box-border items-start justify-start gap-[10px]">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                                <div className="flex-1 relative leading-[20px] uppercase font-medium">
                                    Subtotal
                                </div>
                                <div className="relative leading-[20px] uppercase font-button text-center">
                                    ${totalAmount}
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                                <div className="flex-1 relative leading-[20px] uppercase font-medium">
                                    Shipping
                                </div>
                                <div className="relative leading-[20px] uppercase font-button text-center">
                                    {shippingCost === 0? '--': '$'+shippingCost}
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                                <div className="flex-1 relative leading-[20px] uppercase font-medium">
                                    Total
                                </div>
                                <div className="relative leading-[20px] uppercase font-button text-center">
                                    ${totalAmount+shippingCost}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Payment
