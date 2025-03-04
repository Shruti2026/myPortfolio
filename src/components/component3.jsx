import {Link} from "react-router-dom";
import { motion } from "framer-motion";

function Component3 ()
{
    return(
        <motion.div 
            className="flex flex-col justify-between h-screen bg-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}      
        >
            <div>
                <nav className="flex justify-between items-center px-5 mt-2 mr-3">
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
                <p className="text-4xl text-pink-100 font-serif p-5">Creations & Innovations!</p>
            </div>
            <div className="inline-flex justify-between pt-5 pl-5 pr-5">
                <div className="bg-pink-100 rounded-t-full">
                    <img src="/src/assets/calculator.png" className="w-62 pt-18 pl-15 pr- pb-2" />
                    <hr />
                    <p className="text-2xl text-gray-800 font-serif p-2 font-bold"> Calculator </p>
                    <hr/>
                    <p className="w-80 p-2 text-sm text-gray-800"> 
                        A sleek and user-friendly calculator built using HTML, 
                        CSS, and JavaScript. It supports basic arithmetic operations like 
                        addition, subtraction, multiplication, and division. With a responsive 
                        design and smooth interactions, it provides a seamless user experience. 
                    </p>
                </div>
                <div className="bg-pink-100 rounded-t-full">
                    <img src="/src/assets/tictactoe.png" className="w-62 h-87 pt-18 pl-15 pr- pb-2 rounded-xl" />
                    <hr />
                    <p className="text-2xl text-gray-800 font-serif p-2 font-bold"> Tic Tac Toe </p>
                    <hr/>
                    <p className="w-80 p-2 text-sm text-gray-800"> 
                        A fun and interactive Tic Tac Toe game built using HTML, CSS, and 
                        JavaScript. Play against a friend with a smooth and responsive 
                        interface. The game keeps track of player turns and announces 
                        the winner or a draw dynamically. 
                    </p>
                </div>
                <div className="bg-pink-100 rounded-t-full">
                    <img src="/src/assets/animal.png" className="w-62 h-87 pt-18 pl-15 pr- pb-2 rounded-xl" />
                    <hr />
                    <p className="text-2xl text-gray-800 font-serif p-2 font-bold"> Sound Game </p>
                    <hr/>
                    <p className="w-80 p-2 text-sm text-gray-800"> 
                        An engaging Animal Sound Game built with HTML, CSS, and 
                        JavaScript to help children recognize animal sounds in a fun way. 
                        Click on an animal to hear its sound and learn while playing!
                        It helps parents to engage there babies in these type of fun activites. 
                    </p>
                </div>
                <div className="bg-pink-100 rounded-t-full">
                    <img src="/src/assets/form.png" className="w-62 h-87 pt-18 pl-15 pr- pb-2" />
                    <hr />
                    <p className="text-2xl text-gray-800 font-serif p-2 font-bold"> Employee Details </p>
                    <hr/>
                    <p className="w-80 p-2 text-sm text-gray-800"> 
                        A user-friendly Employee Details Form built using HTML, CSS, 
                        and JavaScript to collect and manage employee information efficiently. 
                        It features input validation and a clean design for a smooth user 
                        experience. 
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Component3