"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MarketStories = ({ isOpen }) => {
   const [stories, setStories] = useState([]);
   useEffect(() => {
      fetch("./stories.json")
         .then((res) => res.json())
         .then((data) => setStories(data));
   }, []);

   return (
      <div
         className={`grid ${
            isOpen ? "grid-cols-1" : "lg:grid-cols-2"
         } gap-4 mx-10 lg:overflow-y-auto lg:max-h-screen scroll-bar lg:pr-6 mt-4`}
      >
         {stories.map((story, index) => (
            <div key={index} className="relative">
               <Image src={story.image} alt="" width={400} height={200} className="w-full h-60 rounded-lg" />
               <p className="bg-black bg-opacity-50 text-white absolute bottom-0 p-3 rounded-lg">
                  {story.post}
               </p>
            </div>
         ))}
      </div>
   );
};

export default MarketStories;
