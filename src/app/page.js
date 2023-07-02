"use client";
import Drawer from "@/components/Drawer/Drawer";
import MainContentNav from "@/components/MainContentNav/MainContentNav";
import { useState } from "react";

export default function Home() {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <main className="flex">
         <section>
            <Drawer handleToggle={handleToggle} isOpen={isOpen}></Drawer>
         </section>
         <section
            className={`w-full mt-5 lg:grid ${
               isOpen ? "grid-cols-3" : "grid-cols-2"
            } justify-center max-w-screen-[1600px] lg:px-10 mx-auto`}
         >
            <div className={`${isOpen && "col-span-2"}`}>
               <h2 className="text-red-500 hidden lg:block text-3xl pl-5 font-semibold">Discussion Forum</h2>
               <div className={`${isOpen && "pl-10"} mx-10 mt-5`}>
                  <MainContentNav></MainContentNav>
               </div>
            </div>
            <div>
               <h2 className="text-red-500 hidden lg:block text-3xl pl-5 font-semibold">Market Stories</h2>
            </div>
         </section>
      </main>
   );
}
