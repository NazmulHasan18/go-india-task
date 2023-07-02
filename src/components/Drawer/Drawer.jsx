"use client";
import React, { useState } from "react";
import { FaBell, FaCaretDown, FaCaretRight, FaUser } from "react-icons/fa";
import { BiSolidMessageDetail, BiSolidDollarCircle } from "react-icons/bi";
import Link from "next/link";

const Drawer = ({ handleToggle, isOpen }) => {
   const [dropdown, setDropdown] = useState(false);

   const linkItems = [
      { link: "Sentiment", href: "sentiment" },
      { link: "Market", href: "market" },
      { link: "Sector", href: "sector" },
      { link: "Watch List", href: "watch_list" },
      { link: "Events", href: "events" },
      { link: "News/Interview", href: "news/interview" },
   ];
   return (
      <div className="sticky top-0 w-full bg-slate-800 bg-opacity-25">
         <div
            className={`min-h-[calc(100vh-250px)] bg-blue-950 ${
               isOpen ? "w-80" : "w-0"
            } absolute lg:relative duration-300`}
         >
            <div className={`${!isOpen && "scale-0"}`}>
               <h3 className="text-white font-bold text-xl flex gap-4 items-center justify-center py-5 border-b border-white">
                  <FaUser className="rounded-full text-2xl"></FaUser> Hello User{" "}
                  <FaBell className="text-2xl" />
               </h3>
               <div className="text-white">
                  <p
                     className="text-xl flex gap-4 items-center justify-center cursor-pointer px-4 py-2 mt-4"
                     onClick={() => setDropdown(!dropdown)}
                  >
                     <BiSolidMessageDetail className="text-2xl" />{" "}
                     <span className="flex-grow font-semibold">Disscussion Fourm</span>{" "}
                     <FaCaretDown className={`${dropdown && "rotate-180"} duration-300`}></FaCaretDown>
                  </p>
                  <ul className={`${!dropdown && "scale-0"} font-semibold duration-300`}>
                     <li>
                        <Link
                           href="market_stories"
                           className="text-xl flex font-semibold gap-4 items-center cursor-pointer px-4 py-2"
                        >
                           <BiSolidDollarCircle className="text-2xl" /> Market Stories
                        </Link>
                     </li>
                     {linkItems.map((item, index) => (
                        <li key={index} className="mb-4 pl-14">
                           <Link href={item.href} className="text-xl">
                              {item.link}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
            <p
               className={`absolute duration-300 cursor-pointer py-10 px-1 rounded-r-md bg-blue-950 text-white -right-6 top-1/2`}
               onClick={handleToggle}
            >
               <FaCaretRight className={`${isOpen && "rotate-180 "}duration-300 text-xl`}></FaCaretRight>
            </p>
         </div>
      </div>
   );
};

export default Drawer;
