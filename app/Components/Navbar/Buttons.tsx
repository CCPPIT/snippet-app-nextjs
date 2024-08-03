"use client"
import { mainColor } from '@/app/constants/Colors'
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Buttons = (props: Props) => {
    //cGUcFNlHYwECs3NW
    const {userId}=useAuth();
  return (
    <div className='max-sm:w-full'>
        {userId?(
            <Link href={'/my-notes'}>
                <button className='max-sm:w-full bg-red-700 p-[8px] px-6 text-sm text-white rounded-md'>
                    Access To The App
                </button> 
            </Link>
        ):(
                <div className='flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8'>
                     <Link href={"/sign-in"}>
                <button className={ `max-sm:w-full bg-slate-500 p-[8px] px-6 text-sm text-white rounded-md`}>
                
                 Sign In

                  
        
                </button>
                </Link>  
                <Link href={"/sign-up"}>
                <button className={`text-sm border border-[${mainColor}] text-[${mainColor}] hover:bg-[${mainColor}]
                hover:text-white p-[8px] px-6 rounded-md
                `}>
                   
                    Sign Up
                  
                    
                    </button>
                    </Link>
            </div>

        )}

    </div>

  )
}

export default Buttons