// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cookies, setCookie] = useCookies();


  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
  
    try {
      console.log(password, "pass", email, "email", name, "name");
  
      const response = await axios.post(
        "https://interview-plus.onrender.com/api/register",
        { name, email, password }
      );
  
      console.log(response);
      if (response.data.token) {
        setCookie('userToken', response.data.token);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    } 
  };
  
  return (
    <div className="flex max-h-screen items-center justify-center bg-gray-100 p-4 mt-16">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <PencilLineIcon className="h-12 w-12 text-indigo-600" />
        </div>
        <div className="rounded-md bg-white p-8 shadow-sm">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Create New Account
        
          </h2>
          <form
            action="#"
            className="mt-8 space-y-6"
            method="POST"
            onSubmit={handleRegister}
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-6">
                <label className="sr-only" htmlFor="email-address">
                  Email address
                </label>
                <input
                  className="rounded-sm p-2 focus:border-2 focus:border-indigo-600 w-full h-8"
                  id="email-address"
                  placeholder="Email address"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value); // Log the updated email value
                  }}                />
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                    console.log(e.target.value); // Log the updated password value
                  }}                />
              </div>
              <div>
                <label className="sr-only" htmlFor="username">
                  Username
                </label>
                <input
                  className="rounded-sm p-2 focus:border-2 focus:border-indigo-600 w-full h-8"
                  id="username"
                  placeholder="Username"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value); // Log the updated name value
                  }}                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>
              <div className="text-sm">
                <Link
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                  to="#"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div>
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full bg-indigo-600 hover:bg-indigo-700 bg-primary text-primary-foreground hover:bg-primary/90 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md h-8" type="submit">
                Sign up
              </button>
            </div>
            <div className="relative flex items-center">
              <div className="flex-grow border-t border-gray-300" />
              <span className="mx-4 flex-shrink text-sm text-gray-600">
                <Link to='/login' className="text-blue-700">Log in</Link> Already have an account!
              </span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
         
          </form>
        </div>
      </div>
    </div>
  );
}

function PencilLineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
      <path d="m15 5 3 3" />
    </svg>
  );
}

