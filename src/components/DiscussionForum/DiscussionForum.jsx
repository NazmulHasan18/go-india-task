"use client";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import Image from "next/image";
import { FaRegHeart, FaHeart, FaRegCommentAlt, FaEye, FaShareAlt } from "react-icons/fa";

const DiscussionForum = ({ discussions }) => {
   const [click, setClick] = useState(0);

   const calculatePostingTime = (postingDate, postingTime) => {
      const postingDateTime = moment(`${postingDate} ${postingTime}`, "YYYY-MM-DD HH:mm:ss");
      const now = moment();
      const duration = moment.duration(now.diff(postingDateTime));
      const days = Math.floor(duration.asDays());
      const hours = Math.floor(duration.asHours()) - days * 24;
      const minutes = Math.floor(duration.asMinutes()) - days * 24 * 60 - hours * 60;

      let formattedTime = "";
      if (days > 0) {
         formattedTime += `${days} ${days === 1 ? "day" : "days"} `;
      }
      if (hours > 0) {
         formattedTime += `${hours} ${hours === 1 ? "hour" : "hours"} `;
      }
      if (minutes > 0) {
         formattedTime += `${minutes} ${minutes === 1 ? "min" : "min"}`;
      }

      return `${formattedTime} ago`;
   };

   return (
      <div className="mt-5 lg:overflow-y-auto lg:max-h-[calc(100vh-200px)] scroll-bar lg:pr-4">
         {discussions.map((discussion, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg mb-5">
               <p className="text-right p-4 text-blue-600 font-semibold">
                  {calculatePostingTime(discussion.posting_date, discussion.posting_time)}{" "}
               </p>
               <Image
                  src={discussion.post.image_url}
                  alt=""
                  width={300}
                  height={200}
                  className="h-auto w-auto mx-auto"
               ></Image>
               <div className="flex gap-6 items-center px-1 lg:px-8 py-4">
                  <Image
                     src={discussion.author.image}
                     alt=""
                     width={60}
                     height={60}
                     className="h-16 w-16 object-cover rounded-full"
                  />
                  <h3 className="text-xl lg:text-2xl font-bold">{discussion.author.name}</h3>
                  <p
                     className={`text-white py-1 px-4 rounded-full ${
                        discussion.sector === "sector1"
                           ? "bg-red-600"
                           : discussion.sector === "sector2"
                           ? "bg-blue-600"
                           : "bg-yellow-500"
                     }`}
                  >
                     {discussion.sector === "sector1"
                        ? "Sector 1"
                        : discussion.sector === "sector2"
                        ? "Sector 2"
                        : "Sector 3"}
                  </p>
               </div>
               <p className="px-6 lg:px-20 py-3">{discussion.post.content}</p>
               <div className="flex justify-around items-center py-4">
                  <p className="flex items-center gap-2 lg:gap-4">
                     <FaHeart
                        className={`lg:text-2xl cursor-pointer`}
                        id={index}
                        onClick={() => {
                           const element = document.getElementById(`${index}`).classList;
                           if (element.contains("text-red-600")) {
                              setClick(click - 1);
                              element.remove("text-red-600");
                           } else {
                              setClick(click + 1);
                              element.add("text-red-600");
                           }
                        }}
                     />

                     {discussion.metrics.like + click}
                  </p>

                  <p className="flex items-center gap-2 lg:gap-4">
                     <FaEye className="lg:text-2xl" /> {discussion.metrics.share}
                  </p>
                  <p className="flex items-center gap-2 lg:gap-4">
                     <FaRegCommentAlt className="lg:text-2xl" /> {discussion.metrics.comment} Comments
                  </p>
                  <p className="flex items-center gap-2 lg:gap-4">
                     <FaShareAlt className="lg:text-2xl" /> Share
                  </p>
               </div>
            </div>
         ))}
      </div>
   );
};

export default DiscussionForum;
