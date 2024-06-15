import React from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import Jewelry from '../Jewelry/JewelryCard';


const jewelry=[1,1,1,1,1,1,1,1]
const Home = () => {
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
        <p className="text-7xl lg:text-9xl font-bold z-10 py-5 text-yellow-400">Jewelry</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4x1">
            Trao Niem Tin Cho Chung Toi Trao Lai Ban Su Uy Tinh
          </p>
        </div>
        <div className="cover absolute top-0 left-0 right-0"></div>
        <div className="fadout"></div>
      </section>
      <section className="p-10 lg:py-10 lg:px-20">
        <p className="text-2xl font-semibold text-blue-1000 py-3 pb-10">
          Top Product
        </p>
        <MultiItemCarousel/>
      </section>
      <section className="px-5 lg:px-20 pt-5" >
<h1 className="text-2xl font-semibold text-blue-1000 py-5">
  Order here
</h1>
<div className="flex flex-wrap items-center justify-around gap-5">
  {
jewelry.map((item)=><Jewelry/>)
  }

</div>
      </section>

    </div>
  );
};

export default Home;
