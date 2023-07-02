import React from "react";
import { FaSearch } from "react-icons/fa";
import DiscussionForum from "../DiscussionForum/DiscussionForum";

const MainContentNav = () => {
   return (
      <div className="w-full hidden lg:block">
         <h4 className="text-2xl font-semibold mb-4">Filters</h4>
         <nav className="flex justify-between items-center w-full p-5 gap-5 bg-white rounded-lg">
            <p className="py-1 px-6 font-semibold bg-red-600 text-white rounded-full">Sector 1</p>
            <p className="py-1 px-6 font-semibold bg-blue-600 text-white rounded-full">Sector 2</p>
            <p className="py-1 px-6 font-semibold bg-yellow-500 text-white rounded-full">Sector 3</p>
            <div className="relative">
               <FaSearch className="absolute text-2xl top-3 left-5"></FaSearch>
               <input
                  type="text"
                  className="text-xl w-full placeholder:text-center px-4 py-2 shadow-[inset_0_5px_5px_0_#2422225b] rounded-full bg-[#3b383823] outline-none focus:border-2 border-gray-500"
                  placeholder="Search here"
               />
            </div>
         </nav>
         <DiscussionForum></DiscussionForum>
      </div>
   );
};

export default MainContentNav;
