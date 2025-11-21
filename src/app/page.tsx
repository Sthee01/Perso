"use client"
import Image from "next/image";
import { HomeIcon, BadgeInfo, GalleryHorizontal,Contact2Icon, 
          SunMoon, MapPinCheckInside,MoveRight, Mail, Instagram, 
          Facebook, Youtube, FileCode2,Camera, Video, Computer,Handshake, Megaphone } from "lucide-react";
import Link from "next/link.js";
import { useState } from "react";



export default function Home() {
 
  const [activelink, setActivelink]=useState("navActiveIco");

    const [home, sethome]=useState("navActiveIco");
    const [about, setabout]=useState("");
    const [service, setservices]=useState("");
    const [contact, setcontact]=useState("");

  const handleActiveNav=(param:string)=>{
    if(param=="home"){
            sethome(activelink);
            setabout("");
            setcontact("");
            setservices("");
        }
        else if(param=="about"){
            sethome("");
            setabout(activelink);
            setcontact("");
            setservices("");
        }
        else if(param=="contact"){
            sethome("");
            setabout("");
            setcontact(activelink);
            setservices("");
        }
        else if(param=="services"){
            sethome("");
            setabout("");
            setcontact("");
            setservices(activelink);
        }
  }

  const services=[
    {id: 1, title:"Web Development", desc:"Portfolio, E-commerce, E-learning" },
    {id: 2, title:"Photography", desc:"Portrait, LifeStyle, Event" },
    {id: 3, title:"Videography", desc:"Vlog, Muscic Video, Event" },
    {id: 4, title:"IT tech Services", desc:"Diagnose, Repair, Optimize" },
    {id: 5, title:"Consultation", desc:"Tech Support, Videography Expertise" },
    {id: 6, title:"Advertising", desc:"Your Tech & Visual Projects, Perfectly Managed" },

  ]



  return (
    <>
      <div className="cover">
        <div className="mainSection">
          <div className="resumeSection">
            <div className="profil"> 
              <Image className="" src="/preview.png" alt="Profile" width={700} height={200} />
            </div>
            <div className="socialNetwork">
              <Link href="https://www.instagram.com/thelab001?igsh=eWRjZW9pY3h3MnUx"><Instagram className="socialNetIco"/></Link>
              <Link href="https://www.facebook.com/share/1BVkjaoZjn/"><Facebook className="socialNetIco"/></Link>
              <Link href="https://youtube.com/@stheevalab?si=NcOF39UbZs_NxRnB"><Youtube className="socialNetIco"/></Link>
            </div>
           <div className="infBlock">
             <div className="infBlc"><MapPinCheckInside className="infIco"/><p className="txtIc">New York</p></div>
             <div className="infBlc"><Mail className="infIco"/><p className="txtIc">stheevalab@gmail.com</p></div>
           </div>

          <div className="LanguagesSec">
            <h1>Languages</h1>

            <div className="wrappeLnges">
              <p>Kreyol</p>
              <div className="coverLevel">
                <div className="level kreyol"></div>
              </div>
            </div>

            <div className="wrappeLnges">
              <p>French</p>
              <div className="coverLevel">
                <div className="level french"></div>
              </div>
            </div>

            <div className="wrappeLnges">
              <p>English</p>
              <div className="coverLevel">
                <div className="level english"></div>
              </div>
            </div>
          </div>

          <div className="skillsec">
            <h1>Skills</h1>
            <p>HTML - JS - CSS</p>
            <p>NEXTJS - JAVA - SQL - C#</p>
            <p>PHOTOSHOP - DAVINCI</p>
          </div>

        </div>


          <div className="midSection">
            <div className="descSection">
              <div className="leftSide">
                <h1 className="title">I{"'"}m Stheeva P<br/>Francois</h1>
                <h2><span className="span">Web Developer  | Photographer  | Videographer</span></h2>
                <p>I creatre seamless web experience and capture timeless visuals</p>
                <Link href="https://www.stheevalab.com/"><button className="fill">View my Photos<MoveRight/></button></Link>
              </div>
              <div className="rightSide">
                <Image className="bgProfile" src="/preview.png" alt="Profile" width={700} height={200} />
              </div>
            </div>

            <div className="servicesSec" id="Services">
              <h1>My Services</h1>
              <p>Offering Professional IT Support, Photography, and Videography Solutions to Bring Your Ideas to Life </p>
              <div className="serviceCover">
                  {
                    services.map(serv=>(
                      <div className="service" key={serv.id}>
                       {(() => {
                          if (serv.title === 'Web Development') {
                            return <FileCode2 className="icoService"/>;
                          } else if (serv.title === 'Photography') {
                            return  <Camera className="icoService"/>;
                          }  else if (serv.title === 'Videography') {
                            return  <Video className="icoService"/>;
                          } else if (serv.title === 'IT tech Services') {
                            return  <Computer className="icoService"/>;
                          } else if (serv.title === 'Consultation') {
                            return  <Handshake className="icoService"/>;
                          } else if (serv.title === 'Advertising') {
                            return  <Megaphone className="icoService"/>;
                          }
                          else {
                            return <p>Error</p>;
                          }
                        })()}
                      <h1>{serv.title}</h1>
                      <p>{serv.desc}</p>
                  </div>
                    ))
                  }
                  
              </div>
            </div>


            <div className="aboutSection" id="About">
              <h1>About Me</h1>
              <div className="imgAboutSec">
                <Image className="img" src="/preview.png" alt="Profile" width={500} height={200} />
                <Image className="banner" src="/banner.png" alt="Profile" width={500} height={200} />
              </div>
              <div className="descAboutSec">
                  <p>A New York–based Videographer, lifestyle and portrait photographer with a passion for storytelling through images. In addition to photography and videography, I am also a web developer, combining creativity and technical skills to bring ideas to life both visually and digitally. Whether I{"'"}m capturing authentic moments behind my camera or creating elegant and functional websites, my goal remains the same: to create meaningful work that touches people and leaves a lasting impression.</p>
              </div>
              
            </div>

            <div className="contactSection" id="Contact">
              <h1>Contact Me</h1>
              <div className="formCover">
                  <form method="POST" action="https://formsubmit.co/stheevalab@gmail.com" >
                     <input name="name"  placeholder="Name..." className="" />
                     <input name="email" placeholder="Email..." className="border p-2" />
                     <textarea name="message"  placeholder="Message..." className="border p-2" />
                     <button type="submit" className=" text-white p-2 rounded">Send</button>
                  </form>
              </div>
              
            </div>


            <div className="footer">
              <p> &copy;  2025 Stheeva   |   All rights reserved.</p>
            </div>
           

            
            
            
          </div>



          <div className="navSection">
             <SunMoon className="navicon themeIcoCtrl"/>
            
            <Link className="link" href="/"><HomeIcon onClick={()=>handleActiveNav("home")} className={`navicon ${home}`}/></Link>
            <Link className="link" href="#Services" onClick={()=>handleActiveNav("services")}><GalleryHorizontal className={`navicon ${service} `}/></Link>
            <Link className="link" href="#About" onClick={()=>handleActiveNav("about")}><BadgeInfo className={`navicon ${about} `}/></Link>
            <Link className="link"href="#Contact" onClick={()=>handleActiveNav("contact")}><Contact2Icon className={`navicon ${contact} `}/> </Link>
            
            
          </div>

        </div>
      </div>
    </>
  );
}
