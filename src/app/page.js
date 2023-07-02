"use client";
import Drawer from "@/components/Drawer/Drawer";
import { useState } from "react";

export default function Home() {
   const [isOpen, setIsOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      <main className="flex">
         {/* <form>
            <input
               type="text"
               className=" p-5 shadow-[inset_0_5px_5px_0_#2422225b] rounded-full bg-[#3b383823] outline-none focus:border-2 border-gray-500"
               placeholder=""
               //todo: add placeholder
            />
         </form> */}

         <div>
            <Drawer handleToggle={handleToggle} isOpen={isOpen}></Drawer>
         </div>
         <div className="container mx-auto">How are you?</div>
      </main>
   );
}
