import { FunctionComponent, useEffect, useState } from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import HowToBuy from "../components/HowToBuy";
import NewsDrop from "../components/NewsDrop";
import About2 from "../components/About2";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import MainHeaderImg from "../utils/MainHeaderImg";
import { getProducts } from "../api/items-api";

const MAIN: FunctionComponent = () => {

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
  if (window.location.hash) {
    const elementId = window.location.hash.substring(1); // Удалите "#" из хеша
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const filteredData = featuresData.filter(item => item.featured === true);
  const NewsDropData = featuresData.filter(item => item.newsDrop === true);
  return (
    <>
    <main className=" bg-primary w-full h-full text-left text-xl text-black font-h-1">
      <Header/>
      <MainHeaderImg/>
      <Featured featuresData={filteredData}/>
      <About/>
      <HowToBuy/>
      <NewsDrop featuresData={[...NewsDropData, ...NewsDropData,...NewsDropData,...NewsDropData,...NewsDropData]}/>
      <About2/>
      <Categories/>
      <Footer/>
      
    </main>
    </>
  );
};

export default MAIN;
