"use client"

import { useEffect } from 'react';
import Image from 'next/image';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import DropDownBtn from "@/app/components/layout/dropDownBtn";
import { navlinks } from "@/app/components/layout/navLinksArray";

export default function Nav() {

    useEffect(() => {
        const dropdownIcon = document.getElementById('dropdown-icon');
        const dropdownMenu = document.getElementById('dropdown-menu');
        
        const toggleDropdown = () => {
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('hidden');
            }
        };

        if (dropdownIcon) {
            dropdownIcon.addEventListener('click', toggleDropdown);
        }

        // Cleanup event listener on component unmount
        return () => {
            if (dropdownIcon) {
                dropdownIcon.removeEventListener('click', toggleDropdown);
            }
        };
    }, []);

    return (
        <div className="container mx-auto space-y-4 section-width">
            <header className="flex flex-wrap sm:justify-start py-8 sm:flex-nowrap w-full bg-gray-800 text-sm dark:bg-white">
                <nav className="w-full mx-auto sm:flex sm:items-center page-padding sm:justify-between">
                    <div className="flex items-center justify-between">
                        <Image
                            src="/cropped_logo-removebg-preview.png"
                            alt="Takudzwa Chikanga Logo"
                            width={200}
                            height={50}
                            blurDataURL="data:..." 
                            placeholder="blur" // Optional blur-up while loading
                        />
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-2 rounded-lg border border-gray-700 font-medium bg-gray-800 text-gray-400 shadow-sm align-middle hover:bg-gray-700/20 focus:outline-none focus:bg-gray-700/20 text-sm dark:bg-white dark:hover:bg-gray-100 dark:border-gray-200 dark:text-gray-600 dark:focus:bg-gray-100" id="hs-navbar-dark-collapse" aria-expanded="false" aria-controls="hs-navbar-dark" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-dark">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                <span className="sr-only">Toggle</span>
                            </button>
                        </div>
                    </div>
                    <div id="hs-navbar-dark" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-dark-collapse">
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                            {navlinks.map((nav, index) => (
                                <a key={index} className="font-medium text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400" href={nav.link} >{nav.name}</a>
                            ))}
                            <DropDownBtn />
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
