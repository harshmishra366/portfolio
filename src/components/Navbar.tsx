"use client"
import React from 'react'
import { Menu,MenuItem,HoveredLink } from './ui/navbar-menu'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { useState } from 'react'


function Navbar() {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 f")}>
    <Menu setActive={setActive}>
        <Link href={"/"} >
        <MenuItem setActive={setActive} active={active} item="Home">

        </MenuItem>
        </Link>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Skills">
        <div className="text-sm flex-col flex space-y-4">
        
        </div>
      
        
        


        </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Work">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">

        </MenuItem>
       

        
    </Menu>

  </div>
  )
}

export default Navbar