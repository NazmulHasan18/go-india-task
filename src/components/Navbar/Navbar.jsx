"use client";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import image1 from "@/assets/brand/Brand1.jpg";
import image2 from "@/assets/brand/Brand2.png";
import image3 from "@/assets/brand/Brand3.png";
import image4 from "@/assets/brand/Brand4.jpg";
import image5 from "@/assets/brand/Brand5.jpg";
import image6 from "@/assets/brand/Brand6.jpg";
import image7 from "@/assets/brand/Brand7.jpg";
import image8 from "@/assets/brand/Brand8.png";
import image9 from "@/assets/brand/Brand9.png";
import image10 from "@/assets/brand/Brand10.png";
import image11 from "@/assets/brand/Brand11.jpg";
import image12 from "@/assets/brand/Brand12.jpg";

const Navbar = () => {
   const [stocks, setStocks] = useState([]);

   useEffect(() => {
      fetch("./stocks.json")
         .then((res) => res.json())
         .then((data) => setStocks(data));
   }, []);

   return (
      <>
         <nav className="flex p-5 gap-6 bg-white">
            <Image
               src="https://www.goindiastocks.com/Content/assets/images/logewithname.png"
               alt=""
               width={130}
               height={70}
               className="w-auto h-auto"
            />

            <div className="flex-grow mr-8">
               <div className="relative max-w-xl">
                  <input
                     type="text"
                     className="w-full py-2 px-5 shadow-[inset_0_5px_5px_0_#2422225b] rounded-lg bg-[#3b383823] outline-none focus:border-2 border-gray-500 "
                     placeholder=""
                     //todo: add placeholder
                  />
                  <FaSearch className="absolute right-2 text-xl top-3 cursor-pointer" />
               </div>
            </div>
            <div className="flex justify-center gap-4 items-center">
               <Link href="https://www.goindiastocks.com/GIA/Contactus">Contact Us</Link>
               <button className="py-2 px-4 border-2 border-gray-500 rounded-md hover:bg-slate-100 hover:border-gray-100">
                  Sign Up
               </button>
               <button className="py-2 px-4 border-2 border-gray-500 rounded-md hover:bg-slate-100 hover:border-gray-100">
                  Sign In
               </button>
            </div>
         </nav>
         <Marquee className="bg-black py-1 text-white" direction="right">
            {stocks.map((stock, index) => (
               <div key={index} className="flex gap-9 mr-9">
                  <p>{stock.symbol}</p>
                  <p>{stock.price}</p>
                  <p className={index % 2 === 0 ? "text-green-500" : "text-red-600"}>
                     {stock.percentage_change}%
                  </p>
               </div>
            ))}
         </Marquee>
         <h2 className="text-red-500 text-3xl font-semibold">Feature Companies</h2>
         <Marquee className="bg-sky-100">
            <div className="flex gap-10 py-4 mr-4 justify-center items-center">
               <Image src={image1} alt="brand" width={100} height={100} />
               <Image src={image2} alt="brand" width={100} height={100} />
               <Image src={image3} alt="brand" width={100} height={100} />
               <Image src={image4} alt="brand" width={100} height={100} />
               <Image src={image5} alt="brand" width={100} height={100} />
               <Image src={image6} alt="brand" width={100} height={100} />
               <Image src={image7} alt="brand" width={100} height={100} />
               <Image src={image8} alt="brand" width={100} height={100} />
               <Image src={image9} alt="brand" width={100} height={100} />
               <Image src={image10} alt="brand" width={100} height={100} />
               <Image src={image11} alt="brand" width={100} height={100} />
               <Image src={image12} alt="brand" width={100} height={100} />
            </div>
         </Marquee>
      </>
   );
};

export default Navbar;
