import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import { getProductById } from '../api/items-api'
import { useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../utils/addCart'
import Notification from '../utils/Notification'

const serverUrl = process.env.REACT_APP_SERVER_URL;

const Product = () => {
  const [showNotification, setShowNotification] = useState(false);

  const { id } = useParams<{ id: string }>()
  const [desc, openDesc] = useState<Boolean>(false)

  const [featuresData, setFeaturesData] = useState<any>(undefined);
  const [quantity, setQuantity]=useState<number>(1)

  const [colorChoice, selectedColor]=useState<string>("")
  const [sizeChoice, selectedSize]=useState<string>("")

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductById(id);
        setFeaturesData(products)
      } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
      }
    };
    fetchProducts();
  }, []);
  console.log(featuresData)
  if (!featuresData) {
    return (
      <div>Loading</div>
    )
  }
  const handleAddCart = () => {
    if (colorChoice && quantity && sizeChoice){
    addToCart(featuresData, colorChoice, quantity, sizeChoice);

    setShowNotification(true);
    console.log(featuresData,colorChoice, sizeChoice)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    }
  };
  return (
    <main className=" bg-primary w-full h-full text-left text-xl text-black font-h-1">
      <Header />
      {showNotification && (
        <Notification img={featuresData.images[0]} color={colorChoice} size={sizeChoice} name={featuresData.name}/>
      )}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">

        <div className='flex flex-col items-center'>

          <img
            className=" top-[144px] left-[58px] rounded-31xl xl:w-[600px] xl:h-[600px] lg:w-[478px] lg:h-[478px]
        w-[320px] h-[320px] md:w-[720px] md:h-[720px] object-cover"
            alt=""
            src={`${serverUrl}/public/tovars/${featuresData?.images && featuresData.images[0]}`}
          />
          <div className="grid md:grid-cols-4 grid-cols-3 top-[756px] left-[58px] xl:w-[600px] lg:w-[478px]
        w-[320px] md:w-[720px] h-auto  flex-row items-start justify-start gap-[12px] mt-3">
            <img
              className="flex-1 relative rounded-xl max-w-full overflow-hidden xl:h-[169px] lg:h-[110px] md:h-[171px] h-[98px] object-cover w-full
          hover:border-[2px] hover:border-solid hover:border-black"
              alt=""
              src={`${serverUrl}/public/tovars/${featuresData?.images?.length > 1 ? featuresData.images[1] : featuresData.images[0]}`}
            />
            <img
              className="flex-1 relative rounded-xl max-w-full overflow-hidden xl:h-[169px] lg:h-[110px] md:h-[171px] h-[98px] object-cover w-full"
              alt=""
              src={`${serverUrl}/public/tovars/${featuresData?.images?.length > 1 ? featuresData.images[2] : featuresData.images[0]}`}
            />
            <img
              className="flex-1 relative rounded-xl max-w-full overflow-hidden xl:h-[169px] lg:h-[110px] md:h-[171px] h-[98px] object-cover w-full"
              alt=""
              src={`${serverUrl}/public/tovars/${featuresData?.images?.length > 1 ? featuresData.images[3] : featuresData.images[0]}`}
            />
            <img
              className=" md:block hidden flex-1 relative rounded-xl max-w-full overflow-hidden xl:h-[169px] lg:h-[110px] md:h-[171px] h-[98px] object-cover w-full"
              alt=""
              src={`${serverUrl}/public/tovars/${featuresData?.images?.length > 1 ? featuresData.images[4] : featuresData.images[0]}`}
            />
          </div>
          
        </div>

        <div className=" top-[144px] left-[745px] rounded-31xl bg-white w-auto h-auto overflow-hidden flex flex-col xl:p-11 md:p-8 p-5">
          <div className=" top-[52px] left-[44px] w-auto flex flex-col items-start justify-start gap-[16px] text-21xl">
            
            <div className="self-stretch relative leading-[44px] uppercase">
              {featuresData?.name}
            </div>
            <div className="relative text-5xl leading-[28px] uppercase text-center">
              ${featuresData?.cost}
            </div>
          </div>
          <div className=" top-[180px] left-[44px] w-auto flex flex-col items-start justify-start gap-[52px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[173px]">
                <div className="flex-1 relative leading-[24px] uppercase my-5">
                  Select size
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-5">
              {featuresData.sizes?.map((size: any, index: any) => (
                <div className="flex flex-col">
               
                  <div key={index} className=" rounded-2xl flex flex-row py-3 px-5 items-center justify-center text-black border-[1px] border-solid border-surface"
                  style={{borderColor: sizeChoice===size? '#87E464': ''}}
                  onClick={()=> selectedSize(size)}>
                    <div className="relative leading-[24px] uppercase">{size}</div>
                  </div>
                </div>
                ))}
              </div>

            </div>
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[24px] uppercase">
                Select color
              </div>
              <div className="w-auto flex flex-row items-start justify-start gap-[8px]">
              {featuresData.colors?.map((color: any, index: any) => (
                <div key={index} className="relative rounded-[50%]  box-border w-7 h-7 border-[2px] border-solid border-gainsboro" style={{background: `${color}`,
                 borderColor: colorChoice===color? '#87E464': 'black'}}
                onClick={()=> selectedColor(color)}/>
              ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[16px] w-full">
              <div className="self-stretch relative leading-[24px] uppercase">
                Quantity
              </div>
              <div className="rounded-131xl bg-surface xl:w-[300px] w-full overflow-hidden flex flex-row p-1.5 box-border items-center justify-center gap-[10px] text-center">
                <div className="relative rounded-131xl bg-primary w-12 h-12 overflow-hidden shrink-0 flex justify-center items-center"
                onClick={()=> {quantity>1 ? setQuantity(prev => prev-1): null}}>
                  <img
                    className=" top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/minus.svg"
                  />

                </div>
                <div className="flex-1 relative leading-[24px] uppercase">{quantity}</div>
                <div className="relative rounded-131xl bg-primary w-12 h-12 overflow-hidden shrink-0 flex justify-center items-center"
                 onClick={()=> setQuantity(prev => prev+1)}>
                  <img
                    className=" top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 overflow-hidden"
                    alt=""
                    src="/plus.svg"
                  />

                </div>
              </div>
            </div>
          </div>
          <div className=" xl:mt-[72px] mt-[28px] rounded-131xl bg-primary w-auto h-auto flex flex-row py-5 px-10 box-border items-center justify-center text-center text-mini"
          onClick={handleAddCart}>
            <div className="flex-1 relative leading-[24px] uppercase">
              Add to cart
            </div>
          </div>
          <div className=" rounded-xl bg-surface w-auto flex flex-row my-5 py-1 pr-5 pl-1 box-border items-center justify-start gap-[20px] text-mini">
            <div className="rounded-mini bg-white overflow-hidden flex flex-row py-3 px-4 items-start justify-start">
              <img
                className="relative rounded-31xl md:w-16 h-auto "
                alt=""
                src="/coins.svg"
              />
            </div>
            <div className="relative leading-[24px] uppercase flex w-auto shrink-0 text-[12px] md:text-[15px]">
              pay with PNDC or PEPE
            </div>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[12px]">
            <div className="rounded-xl bg-surface w-full flex flex-col p-7 box-border items-center justify-center gap-[28px]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative leading-[24px] uppercase">
                  Description
                </div>
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src={desc ? '/minus.svg' : '/plus.svg'}
                  onClick={()=> openDesc(!desc)}
                />
              </div>
              <div className={`self-stretch relative text-mini leading-[24px] font-body ${desc? 'block': 'hidden'}`}>
               {featuresData.description}
              </div>
            </div>
            <div className="rounded-xl bg-surface w-full flex flex-row p-7 box-border items-center justify-center gap-[10px]">
              <div className="flex-1 relative leading-[24px] uppercase">
                Product details
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className="rounded-xl bg-surface w-full flex flex-row p-7 box-border items-center justify-center gap-[10px]">
              <div className="flex-1 relative leading-[24px] uppercase">
                Sizing
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className="rounded-xl bg-surface w-full flex flex-row p-7 box-border items-center justify-center gap-[10px]">
              <div className="flex-1 relative leading-[24px] uppercase">{`Shipping `}</div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
            <div className="rounded-xl bg-surface w-full flex flex-row p-7 box-border items-center justify-center gap-[10px]">
              <div className="flex-1 relative leading-[24px] uppercase">
                Returns
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
            </div>
          </div>

        </div>

      </div>
      <Footer />
    </main>
  )
}

export default Product
