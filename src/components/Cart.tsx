import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'

const serverUrl = process.env.REACT_APP_SERVER_URL;


interface CartProps {
  toggleCard: () => void;

}
const Cart: React.FC<CartProps> = ({ toggleCard }) => {
  const navigate =useNavigate()
  const [cart, setCart] = useState<{ product: any; size: string; color: string; quantity: number }[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);

    const newTotalAmount = storedCart.reduce((total: number, item: any) => {
      return total + item.product.cost * item.quantity;
    }, 0);

    setTotalAmount(newTotalAmount);
    console.log("effectcart")
  }, []); 

  console.log(cart)

  
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

  return (
    <>
    <div className="z-20  fixed top-[32px] w-full flex overflow-hidden text-left text-mid text-black  ">
    <div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      <div className={`z-30 relative  left-0 right-0 mx-auto rounded-[30px] bg-white h-auto overflow-hidden text-center text-mini flex items-center flex-col
      ${cart.length<1? 'w-[320px]': 'w-auto'}`}>
        <img
          className="w-6 h-6 overflow-hidden cursor-pointer ml-auto p-4"
          alt=""
          src="/close3.svg"
          onClick={toggleCard}
        />
        <div className=" text-xl leading-[24px] uppercase">
          Your cart ({cart.length})
        </div>

        <div className="  flex flex-col items-start justify-start gap-[12px] text-left">
          {cart?.map((item: any,index)=>(


          <div key={index} className="w-full flex flex-row items-center justify-start gap-[5px]">
            <img
              className=" w-auto h-[88px] object-cover"
              alt=""
              src={`${serverUrl}/public/tovars/${item?.product?.images[0]}`}
            />
            <div className="w-full flex flex-col items-start justify-start gap-[16px] p-5">
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
                <div className="flex-1  leading-[20px] uppercase">
                  {item.product.name}
                </div>
                <div className=" leading-[20px] uppercase text-center">
                  {" "}
                  ${item.product.cost*item.quantity}
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-center">
                <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                  <div className="rounded-21xl bg-primary flex flex-col py-0.5 px-3 items-start justify-start">
                    <div className=" leading-[20px] uppercase inline-block w-6">
                    {item.size}
                    </div>
                  </div>
                  <div className=" rounded-[50%] box-border w-5 h-5 border-[1px] border-solid border-gainsboro" 
                  style={{background: item.color}}/>
                </div>
                <div className="rounded-131xl bg-whitesmoke w-[105px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-center gap-[10px]">
                  <div className=" rounded-131xl bg-primary w-6 h-6 overflow-hidden shrink-0"
                  onClick={() => removeItem(index)}>
                    <img
                      className=" top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] w-5 h-5 overflow-hidden"
                      alt=""
                      src="/trashalt1.svg"
                    />
                    <img
                      className=" top-[80px] left-[125px] w-[88px] h-[85px] object-cover opacity-[0]"
                      alt=""
                      src="/pinclipart-24@2x.png"
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
                      className=" top-[80px] left-[125px] w-[88px] h-[85px] object-cover opacity-[0]"
                      alt=""
                      src="/pinclipart-25@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>

        <div className="rounded-[20px] bg-whitesmoke w-full flex flex-col py-7 px-4 box-border items-start justify-start gap-[10px] text-left font-bod mt-48 lg:mt-72">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex-1  leading-[20px] uppercase font-medium">
              Discount
            </div>
            <div className=" leading-[20px] uppercase font-caption text-primary text-center">
              –$0
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex-1  leading-[20px] uppercase font-medium">
              Subtotal
            </div>
            <div className=" leading-[20px] uppercase font-caption text-center">
              ${totalAmount}
            </div>
          </div>
        </div>
        <div className=" rounded-131xl bg-primary w-full flex flex-row py-3 px-10 box-border items-center justify-center">
          <div className="flex-1  leading-[24px] uppercase" onClick={()=> navigate("/payment")}>
            Checkout
          </div>
        </div>
        <div className="text-[14px] leading-[24px] font-body inline-block w-auto">
          <span>By clicking the button I agree<br/>with the </span>
          <span className="text-primary">Privacy Policy</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart
