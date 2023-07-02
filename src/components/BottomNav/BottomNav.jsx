"use client";
import React from "react";
import { FaHome } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
import { BsCardChecklist, BsColumnsGap } from "react-icons/bs";
import { PiCirclesFour } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNav = () => {
   const pathname = usePathname();

   return (
      <div className="lg:hidden sticky z-[100] bg-blue-950 text-white bottom-0">
         <ul className="flex justify-around items-center text-xl">
            <li className={`${pathname === "/...." && "border-b-4 border-red-600"} px-4 py-3`}>
               <Link href="#">
                  <BsColumnsGap></BsColumnsGap>
               </Link>
            </li>
            <li className={`${pathname === "/..." && "border-b-4 border-red-600"} px-4 py-3`}>
               <Link href="#">
                  <PiCirclesFour></PiCirclesFour>
               </Link>
            </li>
            <li
               className={`${
                  pathname === "/" && "border-b-4 border-red-600 text-2xl"
               } duration-300 px-4 py-3`}
            >
               <Link href="#">
                  <FaHome></FaHome>
               </Link>
            </li>
            <li className={`${pathname === "/." && "border-b-4 border-red-600"} px-4 py-3`}>
               <Link href="#">
                  <TiMessages></TiMessages>
               </Link>
            </li>
            <li className={`${pathname === "/.." && "border-b-4 border-red-600"} px-4 py-3`}>
               <Link href="#">
                  <BsCardChecklist></BsCardChecklist>
               </Link>
            </li>
         </ul>
      </div>
   );
};

export default BottomNav;
