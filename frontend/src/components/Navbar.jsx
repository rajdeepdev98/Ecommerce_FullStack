import { Badge } from '@/components/ui/badge.jsx';
import React from 'react'
import { SlMagnifier } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import { Heart, ShoppingCartIcon } from 'lucide-react';
import { Button } from './ui/button.jsx';
import { Avatar, AvatarImage } from './ui/avatar.jsx';
import { AvatarFallback } from '@radix-ui/react-avatar';
import BookLogo  from "../assets/books.png";

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img
            src={BookLogo}
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            YourBooks
          </span>
        </a>
        {/* <div className="flex md:order-2">
        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
      </button>
        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
        </div>
        <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
        <div className="relative mt-3 md:hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
        </div>
        <ul
          className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#"
              className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page">Home</a>
          </li>
          <li>
            <a href="#"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
        </ul>
      </div> */}
      <div className='w-[500px]'>
      <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="pl-2 pr-4 py-2 border rounded-lg focus-within:outline-none w-full"
            />
            <div
              className="absolute inset-y-0 right-0 pl-3  pr-2
                    flex items-center  
                    pointer-events-none"
            >
              <SlMagnifier />
            </div>
            {/* <div>
            <Badge variant={"outline"}></Badge>
          </div> */}
          </div>
      </div>
        <div className="flex flex-row justify-between items-center gap-4">
          
          <div className="relative inline-block">
            <Button
              onMouseOver={() => {
                // alert("focus");
              }}
              onClick={() => {
                // alert("lol");
              }}
              variant="ghost"
              size="icon"
              className="rounded-full"
            >
              <ShoppingCartIcon className="h-6 w-6" />
            </Button>
            <Badge className="absolute -top-2 -right-2 bg-black text-white rounded-full px-2 py-0.5 text-xs font-medium">
              3
            </Badge>
          </div>
          <div>
            <Button variant="ghost">
              <Heart />
            </Button>
          </div>
          <div className='h-15 w-15'>
            {/* <Button variant="ghost" className="rounded-full h-full w-full"> */}
            <Avatar className="rounded-full h-full w-full cursor-pointer ">
              <AvatarImage src="https://githb.com/shad.png" />
              <AvatarFallback className="h-full w-full items-center justify-center rounded-full text-white bg-slate-400 hover:bg-slate-800 p-2">RD</AvatarFallback>
            </Avatar>
            {/* </Button> */}
          </div>
          {/* <span className="rounded-full border-black border-solid text-red-600 border-2 bg-yellow-200 outline-blue-300">
            RD
          </span> */}
        </div>
      </div>
    </nav>
  );
}

