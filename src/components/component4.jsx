import {Link} from "react-router-dom";
import { motion } from "framer-motion";

function Component4()
{
    return(
        <motion.div 
            className="h-screen bg-pink-100 flex flex-col justify-center pb-15 pt-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
        >
            <nav className="flex justify-between items-center px-5 mt-17 mr-3">
                <div>
                    <img src="./src/assets/name_logo.png" alt="S Logo" className="hover:opacity-80 w-16"></img>
                </div>
                <div className='flex justify-between gap-8'>
                    <Link to="/">
                        <button className="text-lg text-pink-500 hover:underline decoration-pink-400 active:opacity-95">
                            /Home
                        </button>
                    </Link>
                </div>
            </nav>
            <div className="flex justify-center items-center min-h-screen w-full px-4">
                <div className="max-w-4xl h-130 border-y-4 border-gray-500 bg-white shadow-lg rounded-2xl p-6 pb-1 pt-15">
                    <h1 className="text-3xl font-bold text-gray-700 mb-4 font-serif">About Me</h1>
                    <p className="text-gray-600">
                    Hi, I'm a MCA student at NIT Raipur, passionate about <span className="italic text-pink-600">Java Full-Stack Development.</span> I have been building web applications using Spring Boot, React, and SQL, with a strong focus on backend development, API integration, and database management.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-700 mt-6 pt-10 font-serif">Education</h2>
                    <p className="text-gray-600 "> &#x2605; Master of Computer Applications (MCA), NIT Raipur.</p>
                    <p className="text-gray-600 "> &#x2605; Bachelors of Computer Applications (BCA), Lucknow University.</p>
                    <p className="text-gray-600 "> &#x2605; Intermediate, City Montessori School.</p>
                    <p className="text-gray-600 "> &#x2605; High School, City Montessori School.</p>
                    <div className="text-center pt-25">
                        <div className="inline-flex justify-center space-x-4">
                            <div className='w-8 hover:opacity-80 hover:w-7'>
                            <a href="https://www.linkedin.com/in/shruti-gupta-193709210/" target="_blank">
                                <img src="src/assets/linkedin.png"></img>
                            </a>
                            </div>
                            <div className='w-8 hover:opacity-80 hover:w-7'>
                            <a href="https://www.instagram.com/_shruti_2026_/?hl=en" target="_blank">
                                <img src="src/assets/instagram.png"></img>
                            </a>
                            </div>
                            <div className='w-8 hover:opacity-80 hover:w-7'>
                            <a href="mailto:'gshruti779@gmail.com'" target="_blank">
                                <img src="src/assets/email.png"></img>
                            </a>
                            </div>
                            <div className='w-8 hover:opacity-80 hover:w-7'>
                            <a href="https://github.com/Shruti2026" target="_blank">
                                <img src="src/assets/github.png"></img>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Component4