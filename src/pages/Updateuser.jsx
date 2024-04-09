// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import instance from "../api/AxiosInstance";
import createAxiosInstance from "../api/AxiosInstance";


export default function UpdateUser() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cookies] = useCookies();
    const navigate = useNavigate();
  
    const handleUpdate = async (e) => {
      e.preventDefault();
  
      try {
        const instance = createAxiosInstance(cookies);
        const response = await instance.put("/update-user", { name, password });
        console.log(response.data);
        if(response.data){
            navigate('/')
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    useEffect(()=>{
        if(!cookies.userToken){
            navigate('/login')
        }
    },[cookies])
  
  return (
    <div className="flex max-h-screen items-center justify-center bg-gray-100 p-4 mt-16">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
        </div>
        <div className="rounded-md bg-white p-8 shadow-sm">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Update User Profile
          </h2>
          <form
            action="#"
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={handleUpdate}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-6">
                <label className="sr-only" htmlFor="email-address">
                  Email address
                </label>
                <input
                  className="rounded-sm p-2 focus:border-2 focus:border-indigo-600 w-full h-8"
                  id="name"
                  placeholder="Name To change"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="pb-6">
                <label className="sr-only" htmlFor="password">
                  Password
                </label>
                <input
                  className="rounded-sm p-2 focus:border-2 focus:border-indigo-600 w-full h-8"
                  id="password"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
             
              </div>
             
            </div>
            <div>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full bg-green-600 hover:bg-green-700 bg-primary text-primary-foreground hover:bg-primary/90 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-8">
                Update profile
              </button>
            </div>
        
         
          </form>
        </div>
      </div>
    </div>
  );
}


