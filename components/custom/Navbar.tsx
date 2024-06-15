import React from 'react';
import {FaCloudDownloadAlt} from "react-icons/fa";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";

const firstSectionLinks = [
    {
        id: 1,
        label: 'About',
        path: '#about',
    },
    {
        id: 2,
        label: 'Skills',
        path: '#skills',
    },
    {
        id: 3,
        label: 'Projects',
        path: '#projects',
    }
];

export default function Navbar() {
    return (
        <nav className={"sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}>
            <div className={"container flex max-w-screen-xl items-center py-4 justify-between"}>
                <div className={"flex flex-row gap-2 w-[34%]"}>
                    {firstSectionLinks.map((item)=> (
                        <button
                            key={item.id}
                            className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                            <span>{item.label}</span>
                            <span
                                className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px"/>
                        </button>
                    ))}
                </div>
                <div className={""}>
                    <h2 className={`scroll-m-20 text-2xl font-normal tracking-wider`}>Rohit Parihar</h2>
                </div>
                <div className={"w-[34%] flex flex-row justify-end gap-4"}>
                    <Link href={"https://github.com/rohit-zip"} className={"flex items-center gap-1"}>
                        <FaCloudDownloadAlt className={"text-xl"} />
                        <small className={"font-light text-sm"}>CV</small>
                    </Link>

                    <div className={"w-[1px] min-h-full border-border border-l-[2px]"}/>


                </div>
            </div>
        </nav>
    );
};