import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Component3() {
    return (
        <motion.div 
            className="flex flex-col h-full bg-gradient-to-br from-gray-900 via-gray-700 to-pink-400"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
        >
            {/* Navbar */}
            <nav className="flex justify-between items-center px-5 mt-2 mr-3">
                <div>
                    <img src="/assets/name_logo.png" alt="S Logo" className="hover:opacity-80 w-16" />
                </div>
                <div className="flex justify-between gap-8">
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

            {/* Header */}
            <p className="text-4xl text-pink-100 font-serif p-5">Creations & Innovations!</p>

            {/* Projects Section */}
            <div className="flex flex-col gap-8 px-5 pb-8">
                {/* Project 1 - Left */}
                <div className="flex justify-start">
                    <div className="bg-pink-100 p-3 w-[1000px] h-[270px] flex items-center rounded-lg shadow-lg">
                        <img 
                        src="/assets/cashcraft.png" 
                        alt="CashCraft"
                        className="w-70 h-70 object-contain mr-6"
                        />
                        <div className="text-gray-800 space-y-2">
                            <p className="text-2xl font-bold">Title: CashCraft</p>
                            <p className="text-lg"><span className="font-bold">Technology:</span> MongoDB, ExpressJs, React, NodeJs</p>
                            <p className="text-md">
                                <span className="font-bold">Description:</span> CashCraft is a smart personal finance tracker that helps you manage your income, expenses, and savings with ease. 
                                            It features a goal-based savings system and an interactive dashboard with insightful charts for better financial planning. <a href="https://github.com/Shruti2026/CashCraft.git" className="text-blue-500 underline decoration-blue-500" target="_blank">View more</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Project 2 - Right */}
                <div className="flex justify-end">
                    <div className="bg-pink-100 p-3 w-[1000px] h-[270px] flex items-center rounded-lg shadow-lg">
                        <div className="text-gray-800 space-y-2">
                            <p className="text-2xl font-bold">Title: Email/SMS Spam Predictor</p>
                            <p className="text-lg"><span className="font-bold">Technology:</span> Python, Naïve Bayes Classifer, ML, NLP, Streamlit</p>
                            <p className="text-md">
                                <span className="font-bold">Description:</span> A web-based application that predicts whether a given email or SMS message is HAM (Not Spam) or SPAM using Naive Bayes Classifier,
                                                                                 Natural Language Processing (NLP) techniques, and a sleek interface built with Streamlit. <a href="https://github.com/Shruti2026/Email-SMS-Spam-Detector.git" className="text-blue-500 underline decoration-blue-500" target="_blank">View more</a>
                            </p>
                        </div>
                        <img 
                        src="/assets/aiProject.jpg" 
                        alt="Spam Detector"
                        className="w-70 h-70 object-contain mr-6"
                        />
                    </div>
                </div>

                {/* Project 3 - Left */}
                <div className="flex justify-start">
                   <div className="bg-pink-100 p-3 w-[1000px] h-[270px] flex items-center rounded-lg shadow-lg">
                        <img 
                        src="/assets/travel.jpg" 
                        alt="travel website"
                        className="w-70 h-70 object-contain mr-6"
                        />
                        <div className="text-gray-800 space-y-2">
                            <p className="text-2xl font-bold">Title: Travel Website</p>
                            <p className="text-lg"><span className="font-bold">Technology:</span> React, TailwindCSS</p>
                            <p className="text-md">
                                <span className="font-bold">Description:</span> This travel website is built with React for dynamic, 
                                                                                component-based UI development and Tailwind CSS for fast, responsive, and utility-first styling. <a href="https://github.com/Shruti2026/Travel-Website.git" className="text-blue-500 underline decoration-blue-500" target="_blank">View more</a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Project 4 - Right */}
                <div className="flex justify-end">
                    <div className="bg-pink-100 p-3 w-[1000px] h-[270px] flex items-center rounded-lg shadow-lg">
                        <div className="text-gray-800 space-y-2">
                            <p className="text-2xl font-bold">Title: Calculator</p>
                            <p className="text-lg"><span className="font-bold">Technology:</span> HTML, CSS, Javascript</p>
                            <p className="text-md">
                                <span className="font-bold">Description:</span>This Calculator is a simple, responsive web tool designed to perform basic arithmetic operations like addition, subtraction, multiplication, and division.
                                                                                It offers a clean user interface and smooth functionality for everyday calculations.
                            </p>
                        </div>
                        <img 
                        src="/assets/calculator.png" 
                        alt="Calculator"
                        className="w-80 h-60 object-contain mr-6"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Component3;
