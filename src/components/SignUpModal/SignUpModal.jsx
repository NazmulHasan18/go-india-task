"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaTimesCircle } from "react-icons/fa";

const SignUpModal = ({ isOpen, onClose }) => {
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
      console.log(isOpen);
      return null;
   }
   const customStyles = {
      content: {
         top: "50%",
         left: "50%",
         right: "auto",
         bottom: "auto",
         marginRight: "-50%",
         transform: "translate(-50%, -50%)",
      },
   };

   return (
      <div className="bg-black bg-opacity-70 absolute top-0 z-50 flex justify-center items-center w-full h-screen">
         <div className="modal-content bg-white p-5 w-96 rounded-lg">
            <div className="flex justify-between items-start">
               <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
               <button className="text-2xl hover:opacity-80" onClick={onClose}>
                  <FaTimesCircle></FaTimesCircle>
               </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 text-gray-800">
                     Email
                  </label>
                  <input
                     type="email"
                     id="email"
                     {...register("email", { required: "Email is required" })}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.email && <p className="text-red-500">{errors.email.message}</p>}
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-gray-800">
                     Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     {...register("password", { required: "Password is required" })}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.password && <p className="text-red-500">{errors.password.message}</p>}
               </div>
               <div className="mb-6">
                  <label htmlFor="password" className="block mb-2 text-gray-800">
                     Confirm Password
                  </label>
                  <input
                     type="password"
                     id="password"
                     {...register("confirm_password", { required: "Confirm Password is required" })}
                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {errors.confirm_password && <p className="text-red-500">{errors.password.message}</p>}
               </div>
               <div className="flex justify-end">
                  <button
                     type="submit"
                     className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     disabled={isLoading}
                  >
                     {isLoading ? "Signing Up..." : "Sign Up"}
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default SignUpModal;
