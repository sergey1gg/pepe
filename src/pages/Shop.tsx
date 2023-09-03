import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Items from '../components/shop/Items'
import Footer from '../components/Footer'
import Filter from '../components/shop/Filter'
import { getProducts } from '../api/items-api'
const serverUrl = process.env.REACT_APP_SERVER_URL;

const Shop = () => {
const [tags, selectedTags] =useState<string[]>([])
const [filter, openFilter] =useState(false)
const [featuresData, setFeaturesData] = useState<any[]>([]);

useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setFeaturesData(products) 

      } catch (error) {
        alert(error);
      }
    };
    fetchProducts();
  }, []);

  const filteredData = featuresData.filter(item => {
    // Проверяем, есть ли хотя бы один выбранный тег в категории товара
    if (tags.includes(item.category)) {
      return true;
    }
    
    // Проверяем, есть ли хотя бы один выбранный тег в размерах товара
    if (tags.some(tag => item.sizes.includes(tag))) {
      return true;
    }
    
    // Проверяем, есть ли хотя бы один выбранный тег в цветах товара
    if (tags.some(tag => item.colors.includes(tag))) {
      return true;
    }
    
    return false; // Если ни одно условие не выполнено, товар не соответствует выбранным тегам
  });
  console.log(filteredData, tags)
    return (
        <main className=" bg-primary w-full h-full text-left text-xl text-black font-h-1">
            <Header />
            {filter? (
            <Filter closeFilter={openFilter} selectedTags={selectedTags} featuresData={featuresData}/>
            ): ''}
            <div className="w-auto flex px-5 flex-col md:flex-row gap-3 mt-[32px] md:mt-[61px]">
                <div className='flex flex-row w-full'>
                    <input className="w-full rounded-21xl bg-surface overflow-hidden  py-3.5  pl-5 box-border relative gap-[16px] text-darkgray-300 font-body" placeholder='Gift card or discount'
                        style={{ background: 'url(image-38@2x.svg) no-repeat scroll right center', backgroundColor: 'rgb(245 245 245 / var(--tw-bg-opacity))' }} />

                    <div className="relative rounded-[40px] bg-white box-border w-auto flex flex-row px-3 items-center justify-start gap-[8px] text-left text-mid text-black font-links border-[1px] border-solid border-black"
                    onClick={()=> openFilter(true)}>
                        <img
                            className=" items-center relative w-6 h-6 overflow-hidden shrink-0"
                            alt=""
                            src="/filter.svg"
                        />
                    </div>
                </div>
                <div className='gap-3 flex justify-center px-5'>
                    <div className="relative rounded-[40px] bg-white box-border w-auto flex flex-row py-2.5 lg:pr-6 pr-2 pl-2 items-center justify-start gap-[8px] text-left text-mid text-black font-links border-[1px] border-solid border-black">
                        <div className="rounded-[50px] bg-primary flex flex-row p-1 items-start justify-start">
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/arrowup.svg"
                            />
                        </div>
                        <div className="relative leading-[20px] uppercase">Popular</div>
                    </div>
                    <div className="relative rounded-[40px] bg-white box-border w-auto flex flex-row py-2.5 lg:pr-6 pr-2 pl-2 items-center justify-start gap-[8px] text-left text-mid text-black font-links border-[1px] border-solid border-black">
                        <div className="rounded-[50px] bg-primary flex flex-row p-1 items-start justify-start">
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/arrowup.svg"
                            />
                        </div>
                        <div className="relative leading-[20px] uppercase">Price</div>
                    </div>
                </div>
            </div>

                {tags.length>0? (
            <div className='gap-3 flex justify-between flex-wrap px-5 mt-5'>
                <div className='flex gap-3'>
                {tags.map((tag, index) =>(
                    <div className="relative rounded-[10px] bg-white box-border w-auto flex flex-row py-1 lg:pr-6 pr-2 pl-2 items-center justify-start gap-[8px] text-left text-mid text-black font-links border-[1px] border-solid border-black">
                        <div className="rounded-[50px] bg-primary flex flex-row p-1 items-start justify-start"
                        onClick={()=>  selectedTags(tags.filter(item => item !== tag))}>
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/close2.svg"
                            />
                        </div>
                        <div className="relative leading-[20px] uppercase">{tag}</div>
                    </div>
                ))}
                </div>
                    <div className="relative rounded-[10px] bg-white box-border w-auto flex flex-row py-1  pr-2 pl-2 items-center justify-start gap-[8px] text-left text-mid text-black font-links border-[1px] border-solid border-black"
                    onClick={()=> selectedTags([])}>
                        <div className="relative leading-[20px] uppercase">Clear</div>
                        <div className="rounded-[50px] bg-primary flex flex-row p-1 items-start justify-start">
                            <img
                                className="relative w-6 h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/trashalt1.svg"
                            />
                        </div>
                    </div>
                </div>
                ): ''}
            <Items featuresData={filteredData.length>0? filteredData: featuresData}/>
            <Footer/>
        </main>
    )
}

export default Shop
