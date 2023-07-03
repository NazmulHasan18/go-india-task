"use client";
import { FaPlus } from "react-icons/fa";
import PostModal from "@/components/PostModal/PostModal";
import { useState } from "react";
import Drawer from "@/components/Drawer/Drawer";
import MainContentNav from "@/components/MainContentNav/MainContentNav";
import MarketStories from "@/components/MarketStories/MarketStories";

export default function Home() {
   const [isOpen, setIsOpen] = useState(false);
   const [showContent, setShowContent] = useState("showDiscussion");
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const handleModalOpen = () => {
      document.getElementById("root").classList.add("overflow-hidden");
      setIsModalOpen(true);
   };

   const handleModalClose = () => {
      document.getElementById("root").classList.remove("overflow-hidden");
      setIsModalOpen(false);
   };

   return (
      <>
         <main className="flex relative">
            <section>
               <Drawer handleToggle={handleToggle} isOpen={isOpen}></Drawer>
            </section>
            <section
               className={`w-full mt-5 lg:grid ${
                  isOpen ? "grid-cols-3" : "grid-cols-2"
               } justify-center max-w-screen-[1600px] lg:px-10 mx-auto`}
            >
               <div className="flex bg-blue-950 text-white lg:hidden">
                  <button
                     className="w-1/2 focus:bg-[#11113d] py-2 font-semibold"
                     onClick={() => setShowContent("showDiscussion")}
                  >
                     Discussion Forum
                  </button>
                  <button
                     className="w-1/2 focus:bg-[#11113d] py-2 font-semibold"
                     onClick={() => setShowContent("showStories")}
                  >
                     Market Stories
                  </button>
               </div>
               <div
                  className={`${isOpen && "col-span-2"} ${
                     showContent !== "showDiscussion" && "hidden"
                  } lg:block`}
               >
                  <h2 className="text-red-500 hidden lg:block text-3xl pl-5 font-semibold">
                     Discussion Forum
                  </h2>
                  <div className={`${isOpen && "pl-10"} mx-10 mt-5`}>
                     <MainContentNav></MainContentNav>
                  </div>
               </div>
               <div className={`${showContent !== "showStories" && "hidden"} lg:block`}>
                  <h2 className="text-red-500 hidden lg:block text-3xl pl-5 font-semibold">Market Stories</h2>
                  <div>
                     <MarketStories isOpen={isOpen}></MarketStories>
                  </div>
               </div>
            </section>
         </main>
         <section>
            <div
               className="lg:p-5 p-3 lg:text-2xl text-xl rounded-full bg-blue-950 text-white fixed w-11 lg:w-16 bottom-20 lg:bottom-10 flex right-10"
               onClick={handleModalOpen}
            >
               <p>
                  <FaPlus />
               </p>
            </div>

            <PostModal isOpen={isModalOpen} onClose={handleModalClose}></PostModal>
         </section>
      </>
   );
}
