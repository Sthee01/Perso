"use client";
import { HomeIcon, UserIcon, SendIcon,Briefcase,GalleryVerticalEnd } from "lucide-react";
import Link from "next/link";

import "./nav.css"
import { usePathname } from "next/navigation";



export default function Nav(){
   
    const current = usePathname();
    return(
        <>
            <nav className="vertical-nav">
               
               
                    <Link className={current === "/" ? "active" : "link"} href="/ "><HomeIcon /></Link>
                    <p>.<br/>.<br/>.</p>
                    <Link className={current === "/about" ? "active" : "link"} href="/about"><UserIcon /></Link>
                    <p>.<br/>.<br/>.</p>
                    <Link className={current === "/resume" ? "active" : "link"} href="/resume"><Briefcase /></Link>
                    <p>.<br/>.<br/>.</p>
                    <Link className={current === "/portFolio" ? "active" : "link"} href="/portFolio"><GalleryVerticalEnd /></Link>
                    <p>.<br/>.<br/>.</p>
                    <Link className={current === "/contact" ? "active" : "link"} href="/contact"><SendIcon /></Link>
                
                
            </nav>
        </>
    );
}