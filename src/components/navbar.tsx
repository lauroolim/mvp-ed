import React from "react";
import { auth } from "@clerk/nextjs/server";

export const Navbar: React.FC = async () => {
    const { userId } = await auth();
    const isAuth = !!userId;
    return (
        <nav className="flex items-center justify-between w-full p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-semibold">EducaIA</h1>
            <div className="flex items-center">
                {isAuth ? null : (<a href="/sign-in" className="text-blue-500">Sign In</a>)}
                {isAuth ? null : (<a href="/sign-up" className="ml-4 text-blue-500">Sign Up</a>)}
                {isAuth ? (<a href="/sign-out" className="ml-4 text-blue-500">Sign Out</a>) : null}
            </div>
        </nav >
    );
}