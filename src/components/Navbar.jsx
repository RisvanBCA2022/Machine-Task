    import React, { useEffect } from "react";
    import { useCookies } from "react-cookie";
    import { Link, useNavigate } from "react-router-dom";

    const Navbar = () => {
    const [cookies, removeCookie] = useCookies();

    const navigate = useNavigate();
    const handleSignup = () => {
        navigate("/signup");
    };
    const handlLogin = () => {
        navigate("/login");
    };

    const Logout = () => {
        removeCookie("userToken");
        navigate("/login");
    };

    useEffect(() => {
    }, [cookies]);

    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-full px-4 md:px-8">
        <div className="md:h-16 h-20 mx-auto container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="text-indigo-500 md:order-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
            </svg>
            </div>
            <div className="text-gray-500 order-3 w-full md:w-auto md:order-2 max-[280px]:text-sm">
            <ul className="flex font-semibold justify-between">
                <li className="md:px-2 md:py-2 text-indigo-500">
                <Link to='/'>Items</Link>
                </li>
                <li className="md:px-2 md:py-2 hover:text-indigo-400">
                <Link to='/updateuser'>Update user</Link>
                </li>
                <li className="md:px-2 md:py-2 hover:text-indigo-400">
                <Link to="/deleteuser">Delete user</Link>
                </li>
            </ul>
            </div>
            {cookies.userToken ? (
            <div className="order-2 md:order-3 flex gap-3">
                <button
                className="px-2 py-1 bg-red-500 hover:bg-red-600 text-gray-50 rounded-xl flex items-center justify-center gap-1 w-16"
                onClick={Logout}
                >
                Logout
                </button>
            </div>
            ) : (
            <div className="order-2 md:order-3 flex gap-3">
                <button
                className="px-2 py-1 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center justify-center gap-1 w-16"
                onClick={handlLogin}
                >
                <span>Login</span>
                </button>
                <button
                className="px-2 py-1 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center justify-center gap-1 w-16"
                onClick={handleSignup}
                >
                <span>Signup</span>
                </button>
            </div>
            )}
        </div>
        </nav>
    );
    };

    export default Navbar;
