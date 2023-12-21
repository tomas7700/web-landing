'use client'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import React from 'react'
import { Link } from 'react-scroll'

function MenuShort() {
    return (
        
            <Menubar >
                <MenubarMenu>
                    <MenubarTrigger>Menu</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link
                              activeClass="active"
                              to="mission"
                              spy={true}
                              smooth={true}
                              offset={50}
                              duration={500}>
                                Benefits
                            </Link>
                        </MenubarItem>
                        <MenubarItem>
                            <Link
                                activeClass="active"
                                to="development"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                How it works
                            </Link>

                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link
                                activeClass="active"
                                to="pricing"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                Pricing
                            </Link>

                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            <Link
                                activeClass="active"
                                to="faqs"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                FAQs
                            </Link>

                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className='bg-[#FF6B00] text-[#fff]'>
                            Login
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

    )
}

export default MenuShort