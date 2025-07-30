import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function Component1() {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <motion.div 
            className='h-screen bg-gradient-to-br from-gray-900 via-gray-700 to-pink-400'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
        >
            <section className="flex flex-col justify-between h-screen">
                <nav className="flex justify-between items-center px-5 mt-2 mr-5">
                    <div>
                        <img src="/assets/name_logo.png" alt="S Logo" className="hover:opacity-80 w-16"></img>
                    </div>
                    <div className='flex justify-between gap-8'>
                        <Link to="/">
                            <button className="text-lg text-white hover:underline decoration-pink-400 active:opacity-95">
                                Home
                            </button>
                        </Link>
                        <Link to="/about">
                            <button className="text-lg text-white hover:underline decoration-pink-400 active:opacity-95">
                                About
                            </button>
                        </Link>
                        <Link to="/skills">
                            <button className="text-lg text-white hover:underline decoration-pink-400 active:opacity-95">
                                Skills
                            </button>
                        </Link>
                        <Link to="/works">
                            <button className="text-lg text-white hover:underline decoration-pink-400 active:opacity-95">
                                Works
                            </button>
                        </Link>
                        <button className="text-lg text-white hover:underline decoration-pink-400 active:opacity-95">
                            <a href="/assets/updated_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                        </button>
                    </div>
                </nav>
                <div className="flex-1 flex items-center justify-center">
                    <div className="ml-50 pr-15">
                        <p className="text-pink-400 font-serif py-4">Hi, my name is
                        </p>
                        <p className="bg-gradient-to-r from-pink-200 to-pink-900 bg-clip-text text-transparent text-7xl font-mono font-bold py-3">SHRUTI GUPTA.</p>
                        <p className="text-gray-400 text-5xl font-mono font-bold py-3">I build things for the web.</p>
                        <p className="text-white w-150 py-3  relative group">
                            I am currently pursuing my MCA at NIT Raipur with a strong passion for full-stack web development. 
                            I develop modern web applications using the <span className="text-pink-400">MERN stack</span>—
                            <div className="inline-flex">
                                <img src=" /assets/mongodb.png" className="w-6 h-7"></img>
                                <p className="flex text-base ml-2 italic">MongoDB ,</p>
                                <img src=" /assets/expressjs.png" className="w-6 h-7 ml-4"></img>
                                <p className="flex text-base ml-2 italic">Express.js ,</p>
                                <img src=" /assets/react.webp" className="w-6 h-7 ml-4"></img>
                                <p className="flex text-base ml-2 italic">React ,</p>
                                <img src=" /assets/nodejs.png" className="w-6 h-7 ml-4"></img>
                                <p className="flex text-base ml-2 italic">Node.js </p>
                            </div> <br></br>
                            My experience includes building scalable backend systems, integrating APIs, and managing SQL databases. 
                            I enjoy creating responsive and maintainable solutions that deliver seamless user experiences.
                        </p>
                        <Link to="/works">
                            <button className="text-pink-400 border-2 border-pink-400 px-6 py-2 my-4 
                                                transition-transform duration-300 ease-in-out 
                                                hover:scale-105 hover:bg-pink-400 hover:text-white 
                                                hover:shadow-lg hover:border-white active:scale-95">
                                Check out my works!
                            </button>
                        </Link> 
                    </div>
                    {/* Profile Image with Flip Effect */}
                    <Link to="/about">
                        <motion.div 
                            className="relative w-64 h-64"
                            onMouseEnter={() => setIsFlipped(true)}
                            onMouseLeave={() => setIsFlipped(false)}
                            animate={{ rotateY: isFlipped ? 180 : 0 }}
                            transition={{ duration: 0.6 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Front Image */}
                            <motion.img 
                                src="/assets/myphoto1.jpg" 
                                className="absolute w-64 h-64 rounded-full border-x-6 border-pink-400 backface-hidden"
                                style={{ backfaceVisibility: "hidden" }}
                            />
                            {/* Back Image */}
                            <motion.img 
                                src=" /assets/bitemoji.jpg" 
                                className="absolute w-64 h-64 rounded-full border-x-6 border-pink-400"
                                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                            />
                        </motion.div>
                    </Link>
                    <ul className="ml-auto mr-8 space-y-6">
                        <li className="w-10">
                            <a href="https://www.linkedin.com/in/shruti-gupta-193709210/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/linkedin.png"
                                className="transform transition-transform duration-300 hover:scale-140 hover:opacity-80 w-10"
                                alt="LinkedIn"
                            />
                            </a>
                        </li>
                        <li className="w-10">
                            <a href="https://www.instagram.com/_shruti_2026_/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/instagram.png"
                                className="transform transition-transform duration-300 hover:scale-140 hover:opacity-80 w-10"
                                alt="Instagram"
                            />
                            </a>
                        </li>
                        <li className="w-10">
                            <a href="mailto:gshruti779@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/email.png"
                                className="transform transition-transform duration-300 hover:scale-140 hover:opacity-80 w-10"
                                alt="Email"
                            />
                            </a>
                        </li>
                        <li className="w-10">
                            <a href="https://github.com/Shruti2026" target="_blank" rel="noopener noreferrer">
                            <img
                                src="/assets/github.png"
                                className="transform transition-transform duration-300 hover:scale-140 hover:opacity-80 w-10"
                                alt="GitHub"
                            />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </motion.div>
    );
}

export default Component1;
