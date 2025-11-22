"use client"
import Nav from "@/components/Navigation/nav";
import "./portfolio.css"
import { useState } from "react";

export default function Page(){
 
    const [currentT,setCurrentT]=useState("All")

    const handleToggle=(curr:string)=>{
        if(curr==="All"){
            setCurrentT("All")
        }else if(curr==="web development"){
            setCurrentT("web development")
        }
        else if(curr==="photography"){
            setCurrentT("photography")
        }
        else if(curr==="videography"){
            setCurrentT("videography")
        }else{
            setCurrentT("")
        }
    }

    return(
        <>
           
              <Nav/>
              <section className="portfolio">
                <h2>Portfolio</h2>
                <div className="menChoice">
                    <p className={currentT=="All"?"activet":"nActiv"} onClick={()=>handleToggle("All")}>All</p>
                    <p className={currentT=="web development"?"activet":"nActiv"} onClick={()=>handleToggle("web development")}>Wed development</p>
                    <p className={currentT=="photography"?"activet":"nActiv"} onClick={()=>handleToggle("photography")}>Photography</p>
                    <p className={currentT=="videography"?"activet":"nActiv"} onClick={()=>handleToggle("videography")}>Videography</p>
                </div>
              </section>
        </>
    );
}