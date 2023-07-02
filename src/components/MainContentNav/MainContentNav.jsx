import React from "react";
import { FaSearch } from "react-icons/fa";
import DiscussionForum from "../DiscussionForum/DiscussionForum";

const MainContentNav = () => {
   return (
      <div className="w-full">
         <h4 className="text-2xl font-semibold mb-4">Filters</h4>
         <nav className="flex justify-between items-center w-full p-5 gap-2 lg:gap-5 bg-white rounded-lg">
            <p className="py-1 px-2 lg:px-4  text-[10px] lg:text-base font-semibold bg-red-600 text-white rounded-full">
               Sector 1
            </p>
            <p className="py-1  px-2 lg:px-4  text-[10px] lg:text-base font-semibold bg-blue-600 text-white rounded-full">
               Sector 2
            </p>
            <p className="py-1 px-2 lg:px-4  text-[10px] lg:text-base font-semibold bg-yellow-500 text-white rounded-full">
               Sector 3
            </p>
            <div className="relative">
               <FaSearch className="absolute text-xs lg:text-2xl left-1 top-2 lg:top-3 lg:left-5"></FaSearch>
               <input
                  type="text"
                  className="lg:text-xl text-xs w-[100px] lg:w-full placeholder:text-center px-2 lg:px-4 py-1 lg:py-2 shadow-[inset_0_5px_5px_0_#2422225b] rounded-full bg-[#3b383823] outline-none focus:border-2 border-gray-500"
                  placeholder="Search here"
               />
            </div>
         </nav>
         <DiscussionForum></DiscussionForum>
      </div>
   );
};

export default MainContentNav;
