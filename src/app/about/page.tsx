import Nav from "@/components/Navigation/nav";
import "./about.css"
export default function Page(){
    return(
        <>
            <Nav/>
           <aside className="asideLeft">
            <img src="/preview.jpg" alt="Stheeva" className="img"  width={90}/>

            <div className="infi">
                <h2 className="nameI">Stheeva</h2>
                <p className="Ninf">New York</p>
                <p className="Ninf">stheevalab@gmail.com</p>
            </div> 
            <div className="inf">
                <h2>Languages</h2>
                <p>Creole</p>
                <p>French</p>
                <p>English</p>
            </div>
            <div className="inf">
                <h2>Skills</h2>
                <p className="infs">HTML, CSS, JS, PHP</p>
                <p className="infs">NEXT JS, JAVA, SQL, IT</p>
                <p className="infs">PHOTOSHOP, DAVINCI RESOLVE, ILLUSTRATOR</p>
            </div>
           </aside>

           <section className="aboutSection">
                <h2 className="titleA">About Me</h2>
                <p className="nameA">Im <span>Stheeva Francois</span> , Web Developer / Videographer / Photographer</p>
                <p className="descriptionA">I’m a multidisciplinary creative and developer who lives at the intersection of technology, storytelling, and visual expression. My journey began with a passion for building things—whether its crafting clean, intuitive websites or capturing powerful moments through a lens. Today, I specialize in web development, photography, and videography, blending technical skill with artistic vision to create experiences that are both functional and unforgettable.

                                                As a Web Developer, I focus on creating modern, responsive, and high-performance websites that not only look great but work beautifully. I enjoy transforming ideas into digital realities—turning concepts into user-friendly designs, and designs into fully functioning online experiences. From front-end development and UI/UX structure to custom components and interactive features, I aim to build websites that help people and businesses stand out in the digital world.

                                                My creative side comes to life through photography and videography. I believe every image and every frame should tell a story. Whether Im shooting portraits, events, lifestyle content, or cinematic visuals, I strive to capture real emotions, authentic moments, and dynamic energy. Every project is an opportunity to create something meaningful—something that speaks without needing words.

                                                What connects all my skills is my commitment to quality, growth, and impact. I’m always learning new tools, sharpening my craft, and exploring better ways to bring ideas to life. My work is driven by purpose and passion, and I take pride in delivering results that feel personal, intentional, and polished.

                                                This platform is a reflection of everything I love—technology, design, creativity, and the desire to inspire.
                                                Whether you’re here to collaborate, book a service, or simply explore my work, I’m grateful you stopped by. Let’s create something amazing together.</p>
                
               
           </section>

        </>
    );
}