import React, { useEffect } from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiItemCarousel";
import Jewelry from '../Jewelry/JewelryCard';
import { useDispatch, useSelector } from 'react-redux'
import { getAllAreaAction } from "../State/Area/Action";
import { findCart } from "../State/Cart/Action";

const areas=[1,1,1,1,1]
const Home = () => {
      const dispatch = useDispatch();
      const jwt = localStorage.getItem("jwt")
      const {area} = useSelector(store=>store)

      console.log("area",area)
      useEffect(()=> {
        dispatch(getAllAreaAction(jwt))
   
      },[])
    
  return (
    <div className="pb-10">
      <section className="banner -z-50 relative flex flex-col justify-center items-center">
        <div className="w-[50vw] z-10 text-center">
        <p className="text-7xl lg:text-9xl font-bold z-10 py-5 text-yellow-400">Jewelry</p>
          <p className="z-10 text-gray-300 text-xl lg:text-4x1">
          Giving Trust to Us, I Give You Prestige
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
    area.areas.map((item)=><Jewelry item ={item}/>)
  }

</div>
      </section>

    </div>
  );
};

export default Home;
