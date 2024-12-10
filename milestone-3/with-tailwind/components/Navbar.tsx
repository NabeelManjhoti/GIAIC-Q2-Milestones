import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Jost } from 'next/font/google'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { TiThMenu } from "react-icons/ti";

const jost = Jost({ subsets: ['latin'] })

const Navbar = () => {
    return (
        <div className='w-full h-[50px] bg-col2 flex items-center justify-between px-3 md:px-10'>
            <Image
                src={"/logo.svg"}
                width={227}
                height={50}
                alt="Logo"
            />

            <div className='hidden lg:block'>
                <ul className={`${jost.className} text-[20px] font-medium flex gap-5 text-col3`}>
                    <li className='hover:text-col9'><Link href={"/"}>Home</Link></li>
                    <li className='hover:text-col9'><Link href={"/about"}>About</Link></li>
                    <li className='hover:text-col9'><Link href={"/services"}>Services</Link></li>
                    <Image
                        className='cursor-pointer'
                        src={"/search.svg"}
                        width={21}
                        height={21}
                        alt="Search"
                    />
                </ul>
            </div>

            <div className="secondNav lg:hidden flex gap-2">

                <Sheet>
                    <SheetTrigger><TiThMenu /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>
                                <Image
                                    src={"/logo.svg"}
                                    width={227}
                                    height={50}
                                    alt="Logo"
                                />
                            </SheetTitle>
                            <SheetDescription>
                                <ul className={`${jost.className} text-[20px] font-medium flex flex-col gap-10 text-col3`}>
                                    <li className='hover:text-col9'><Link href={"/"}>Home</Link></li>
                                    <li className='hover:text-col9'><Link href={"/about"}>About</Link></li>
                                    <li className='hover:text-col9'><Link href={"/services"}>Services</Link></li>
                                </ul>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>

                <Image
                    className='cursor-pointer'
                    src={"/search.svg"}
                    width={21}
                    height={21}
                    alt="Search"
                />
            </div>
        </div>
    )
}

export default Navbar