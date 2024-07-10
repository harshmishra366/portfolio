"use client"
import { BackgroundGradient } from '@/components/ui/background-gradient'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className=' flex  flex-col mt-[7rem]  p-10 w-100%'>

       <h1 className='px-7 items-center font-bold text-3xl'>Progamming Languages</h1>
        <div className=' px-8 flex flex-row flex-wrap gap-4  w-45 '>

           
            <div className=' flex flex-row flex-wrap gap-4 mt-4'  >
            
           <BackgroundGradient className="rounded-[22px] w-[12rem] h-[14rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div>
            <Image 
             src="/C.png"
             height={120}
             width={120}
             alt='C'
             />



          
        </div>
           </BackgroundGradient>
           </div>
           <div className=' flex flex-row flex-wrap gap-4 mt-4'>
              
           <BackgroundGradient className="rounded-[22px] w-[12rem] h-[14rem] p-4 sm:p-10 bg-black dark:bg-zinc-900">

             <div>
             <Image 
             src="/C++.png"
             height={120}
             width={120}
             alt='C'
             />
              

              
              
             </div>
</BackgroundGradient>

           </div>
           <div className=' flex flex-row flex-wrap gap-4 mt-4'>
              
           <BackgroundGradient className="rounded-[22px]  w-[12rem] h-[14rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div>
            <Image 
             src="/download.jpeg"
             height={140}
             width={140}
             alt='C'
             />
            </div>


         </BackgroundGradient>         
           </div>
        </div>
        <div>
          <h1 className='p-7 items-center font-bold text-3xl'>Frontend</h1>
          <div className=' px-8 flex flex-row flex-wrap gap-4'>
          <BackgroundGradient className="rounded-[22px] w-[12rem] h-[14rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div>
            <Image 
             src="/HTML.png"
             height={120}
             width={120}
             alt='C'
             />



          
        </div>
           </BackgroundGradient>
           <BackgroundGradient className="rounded-[22px] w-[12rem] h-[14rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div>
            <Image 
             src="/Css.png"
             height={160}
             width={160}
             alt='C'
             />



          
        </div>
           </BackgroundGradient>
           <BackgroundGradient className="rounded-[22px] w-[12rem] h-[14rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div>
            <Image 
             src="/HTML.png"
             height={120}
             width={120}
             alt='C'
             />



          
        </div>
           </BackgroundGradient>
           <BackgroundGradient className="rounded-[22px] w-[12rem] h-[14rem] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <div>
            <Image 
             src="/HTML.png"
             height={120}
             width={120}
             alt='C'
             />



          
        </div>
           </BackgroundGradient>
          </div>
          
        </div>
        
    </div>
    
   
  )
}

export default page