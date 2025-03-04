import {Link} from "react-router-dom";
import { motion } from "framer-motion";

function Component2()
{
    return(
        <motion.div 
            className="flex flex-col justify-between item-center h-screen bg-pink-100 "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}      
        >
            <nav className="flex justify-between items-center px-5 mt-2 mr-5">
                <div>
                    <img src="./src/assets/name_logo.png" alt="S Logo" className="hover:opacity-80 w-16"></img>
                </div>
                <div className='flex justify-between gap-8'>
                    <Link to="/">
                        <button className="text-lg text-pink-500 hover:underline decoration-pink-500 active:opacity-95">
                            /Home
                        </button>
                    </Link>
                </div>
            </nav>
            <div className="flex justify-between">
                <div>
                    <img src="/src/assets/skills.avif" className="rounded-r-full mt-40 border-r-4 border-b-4 border-gray-500"></img>
                </div>
                <div>
                    <div className="w-170 bg-white border-l-4 border-b-4 border-gray-500 hover:shadow-2xl rounded-l-full mt-6">
                        <p className="pl-15 py-4 font-serif text-2xl text-gray-800">
                            Programming Language
                        </p>
                        <div className="pl-15 pb-2">
                            <div className="inline-flex">
                                <img src="/src/assets/c.webp" className="w-6"></img>
                                <p className="flex text-base ml-2 italic">C programming ,</p>
                                <img src="/src/assets/java.png" className="w-4 ml-4"></img>
                                <p className="flex text-base ml-2 italic">Java ,</p>
                                <img src="/src/assets/python.png" className="w-6 ml-4"></img>
                                <p className="flex text-base ml-2 italic">Python </p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-170 bg-white border-l-4 border-b-4 border-gray-500 hover:shadow-2xl rounded-l-full mt-15">
                        <p className="pl-15 py-4 font-serif text-2xl text-gray-800">
                            Web Development
                        </p>
                        <div className="pl-15 pb-2">
                            <div className="inline-flex">
                                <img src="/src/assets/html.png" className="w-6"></img>
                                <p className="flex text-base ml-2 italic">Html ,</p>
                                <img src="/src/assets/css.svg" className="w-5 ml-4"></img>
                                <p className="flex text-base ml-2 italic">CSS ,</p>
                                <img src="/src/assets/tailwindcss.png" className="w-4 ml-4"></img>
                                <p className="flex text-base ml-2 italic">TailwindCSS ,</p>
                                <img src="/src/assets/js.webp" className="w-6 ml-4"></img>
                                <p className="flex text-base ml-2 italic">Javascript ,</p>
                                <img src="/src/assets/react.webp" className="w-6 ml-4"></img>
                                <p className="flex text-base ml-2 italic">React</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-170 bg-white border-l-4 border-b-4 border-gray-500 hover:shadow-2xl rounded-l-full mt-15">
                        <p className="pl-15 py-4 font-serif text-2xl text-gray-800">
                            Backend Development
                        </p>
                        <div className="pl-15 pb-2">
                            <div className="inline-flex">
                                <img src="/src/assets/springboot.png" className="w-6"></img>
                                <p className="flex text-base ml-2 italic">SpringBoot ,</p>
                                <img src="/src/assets/jsp.png" className="w-13 ml-4"></img>
                                <p className="flex text-base ml-2 italic">JSP </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-170 bg-white border-l-4 border-b-4 border-gray-500 hover:shadow-2xl rounded-l-full mt-15">
                        <p className="pl-15 py-4 font-serif text-2xl text-gray-800">
                            Database
                        </p>
                        <div className="pl-15 pb-2">
                            <div className="inline-flex">
                                <img src="/src/assets/oracle.png" className="w-9"></img>
                                <p className="flex text-base ml-2 italic">Oracle ,</p>
                                <img src="/src/assets/postgresql.png" className="w-6 ml-4"></img>
                                <p className="flex text-base ml-2 italic">Postgresq ,</p>
                                <img src="/src/assets/mysql.png" className="w-9 ml-4"></img>
                                <p className="flex text-base ml-2 italic">MySql </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Component2