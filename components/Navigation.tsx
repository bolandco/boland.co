'use client'

import { useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/Popover"

export default function Navigation() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   return (
      <div className="fixed top-5 inset-x-0 z-50 aos-init aos-animate" data-aos="fade-down" data-aos-duration="1500">
         <div className="lg:max-w-4xl mx-auto px-8">
            <div className="w-full mx-auto">
               <div className="relative flex flex-col w-full p-5 mx-auto bg-darkGray/70 border border-white/5 shadow-thick backdrop-blur-xl backdrop-filter rounded-2xl lg:px-8">
                  <div className="flex flex-row items-center justify-between lg:justify-start">
                     <Link href="/" className="text-lg font-bold tracking-tighter text-white transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8">
                        <div>Boland Co.</div>
                     </Link>
                     <nav
                        className="flex-col flex-grow lg:py-0 lg:items-end justify-center hidden md:flex"
                     >
                        <ul className="space-y-2 list-none md:space-y-0 lg:ml-auto items-center md:inline-flex justify-center text-center md:text-left">
                           <li>
                              <a href="#process" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 Process
                              </a>
                           </li>
                           <li>
                              <a href="#benefits" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300 hover:border-blue-500">
                                 Benefits
                              </a>
                           </li>
                           <li>
                              <a href="#pricing" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 Pricing
                              </a>
                           </li>
                           <li>
                              <a href="/faq" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 FAQ
                              </a>
                           </li>
                           <li>
                              <a href="/submit" className="px-2 lg:px-6 py-10 md:px-3 text-sm text-slate-400 hover:text-blue-300">
                                 Contact
                              </a>
                           </li>
                           <li className='text-white hover:text-blue-300'>
                              <Link
                                 href="#"
                                 target="_blank"
                                 className="rounded-lg bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/20"
                              >
                                 Login
                              </Link>
                           </li>
                        </ul>
                     </nav>
                     <Popover onOpenChange={(e: boolean) => setMobileMenuOpen(e)}>
                        <PopoverTrigger className='flex justify-center'>
                           <div
                              className="inline-flex justify-center text-slate-400 hover:text-blue-300 focus:outline-none focus:text-white md:hidden"
                           >
                              <button className="flex  cursor-pointer w-10 h-10 relative justify-center items-center" >
                                 <span
                                    aria-hidden="true"
                                    className={classNames("block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out", mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5')}
                                 />
                                 <span
                                    aria-hidden="true"
                                    className={classNames("block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out", mobileMenuOpen && 'opacity-0')} />
                                 <span
                                    aria-hidden="true"
                                       className={classNames("block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out", mobileMenuOpen ? "-rotate-45" : "translate-y-1.5")} />
                              </button>
                           </div>
                        </PopoverTrigger>
                        <PopoverContent className='bg-darkGray/70 opacity-100 border border-white/5 shadow-thick backdrop-blur-xl backdrop-filter rounded-2xl mt-8 md:hidden'>
                           <div>
                              <ul className="space-y-4 list-none md:space-y-0 lg:ml-auto items-center md:inline-flex justify-center text-center md:text-left my-4">
                                 <li>
                                    <a href="#process" className="text-sm text-slate-400 hover:text-blue-300">
                                       Process
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#benefits" className="text-sm text-slate-400 hover:text-blue-300 hover:border-blue-500">
                                       Benefits
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#pricing" className="text-sm text-slate-400 hover:text-blue-300">
                                       Pricing
                                    </a>
                                 </li>
                                 <li>
                                    <a href="/faq" className="text-sm text-slate-400 hover:text-blue-300">
                                       FAQ
                                    </a>
                                 </li>
                                 <li>
                                    <a href="/submit" className="text-sm text-slate-400 hover:text-blue-300">
                                       Contact
                                    </a>
                                 </li>
                                 <li className='text-white hover:text-blue-300 pt-4'>
                                    <Link
                                       href="#"
                                       target="_blank"
                                       className="rounded-lg bg-black/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/20"
                                    >
                                       Login
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </PopoverContent>
                     </Popover>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}