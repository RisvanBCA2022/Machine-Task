// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
      if (response.data.success) {
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
            Log-in to yout account
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
                Or continue with
              </span>
              <div className="flex-grow border-t border-gray-300" />
            </div>
            <div className="flex justify-center space-x-4">
              <button className="flex w-full items-center justify-center border-solid border-2 border-zinc-500 bg-white text-gray-700 hover:bg-gray-50">
                <ChromeIcon className="h-5 w-5 text-red-500" />
                <span className="ml-2">Google</span>
              </button>
              <button className="flex w-full items-center justify-center bg-white text-gray-700 border-solid border-2 border-zinc-500 hover:bg-gray-50">
                <GithubIcon className="h-5 w-5" />
                <span className="ml-2">GitHub</span>
              </button>
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

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path
        fill="#fbc02d"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#e53935"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4caf50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1565c0"
        d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
}

function GithubIcon(props) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
