"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimesCircle } from "react-icons/fa";

const PostModal = ({ isOpen, onClose }) => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const [isLoading, setIsLoading] = useState(false);

   const onSubmit = (data) => {
      setIsLoading(true);
      // Simulate API request
      setTimeout(() => {
         console.log(data);
         setIsLoading(false);
         onClose();
      }, 2000);
   };
   if (!isOpen) {
      return null;
   }

   return (
      <div className="bg-black bg-opacity-70 fixed top-0 z-50 flex justify-center items-center w-full h-screen">
         <div className="modal-content bg-white p-5 w-96 rounded-lg">
            <div className="flex justify-between items-start">
               <h2 className="text-2xl font-bold mb-6">Add Discussion</h2>
               <button className="text-2xl hover:opacity-80" onClick={onClose}>
                  <FaTimesCircle></FaTimesCircle>
               </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="mb-4">
                  <label htmlFor="img" className="block mb-2 text-gray-800">
                     Image URL
                  </label>
                  <input
                     type="text"
                     id="img"
                     {...register("image_url", { required: "Email is required" })}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.image_url && <p className="text-red-500">{errors.email.message}</p>}
               </div>
               <div className="mb-6">
                  <label htmlFor="content" className="block mb-2 text-gray-800">
                     Posts
                  </label>
                  <textarea
                     type="text"
                     id="content"
                     placeholder="Write your text here..."
                     {...register("content", { required: "Password is required" })}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.content && <p className="text-red-500">{errors.password.message}</p>}
               </div>
               <div className="flex justify-end">
                  <button
                     type="submit"
                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     disabled={isLoading}
                  >
                     {isLoading ? "Posting..." : "Post"}
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default PostModal;
