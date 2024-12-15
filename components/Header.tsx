"use client";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";


function Header() {
  const { user } = useUser();
  return (
    <div className="fixed top-0 left-0 w-full px-5 py-3 backdrop-blur-sm bg-black/30 shadow-md z-50">
      <div className="flex justify-between items-center relative z-10">
        {user && (
          <h1 className="text-gray-100 font-semibold text-xl tracking-wide">
            {user?.firstName}'s Space Experience
          </h1>
        )}
      
  
        <div className="flex items-center gap-4">
          {/* Sign In Button */}
          <SignedOut>
            <SignInButton>
              <button className="px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-black/50 to-zinc-800/60 shadow-inner hover:scale-105 transition-transform duration-300">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
  
          {/* User Button */}
          <div className="hover:scale-110 transition-transform duration-300">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
  
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay">
        <div className="w-full h-full bg-gradient-to-r from-black/60 via-zinc-800/50 to-gray-900/50"></div>
        <div
          className="absolute inset-0  opacity-10"
          style={{ backgroundSize: '150px 150px' }} 
        ></div>
      </div>
    </div>
  );
  
}

export default Header;
