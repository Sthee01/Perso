"use client"
import Nav from "@/components/Navigation/nav";

export default function Home() {
 

  return (
    <>
    {/* This is the main wrapped of the project */}
     <main className="mainCover">
        <section className="mainHero">

            <Nav/>
            {/* Left Side */}
            <div className="heroLeft">
              <p className="fTitle">HI THERE!</p>
              <h1 className="name"><span>Im</span> Stheeva</h1>
              <p className="Title">Web developer | Videographer | Photographer</p>
              <p className="description">I’m a passionate Web Developer, Photographer, and Videographer, dedicated to crafting experiences that blend creativity with functionality. From building sleek, user-friendly websites to capturing compelling visuals through photography and video, I thrive at the intersection of technology and artistry. Every project I take on is an opportunity to tell a story, engage an audience, and deliver work that’s both impactful and memorable.</p>
              <button className="cta">MORE ABOUT ME</button>
            </div>

            {/* Right Side */}
            <div className="heroRight">
              <img src="/preview.jpg" alt="Stheeva"  width={900}/>
            </div>
        </section>
     </main>
    </>
  );
}
