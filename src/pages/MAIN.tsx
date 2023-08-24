import { FunctionComponent } from "react";
import Header from "../components/Header";
import Featured from "../components/Featured";
import About from "../components/About";
import HowToBuy from "../components/HowToBuy";
import NewsDrop from "../components/NewsDrop";
import About2 from "../components/About2";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

const MAIN: FunctionComponent = () => {
  return (
    <>
    <main className=" bg-primary w-full h-full text-left text-xl text-black font-h-1">
      <Header/>
      <Featured/>
      <About/>
      <HowToBuy/>
      <NewsDrop/>
      <About2/>
      <Categories/>
      <Footer/>
      
    </main>
    </>
  );
};

export default MAIN;
