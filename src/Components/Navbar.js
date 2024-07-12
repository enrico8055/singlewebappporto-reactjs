import Logo from '../logo.svg';
import { matchPath } from 'react-router';
import { Route, Routes, useLocation, Link } from 'react-router-dom';
import { motion, useScroll, useAnimation } from "framer-motion"

export default function Main() {
    const location = useLocation();
    const { hash, pathname, search } = location;

    return (
        <div className=" sticky top-0 p-0 m-0   z-10 flex justify-center  ">
            <nav
                className=" block w-full lg:w-5/6 max-w-3/4 px-4  my-10 text-black bg-gradient-to-br from-tech-stack-box-first-color to-tech-stack-box-second-color backdrop-blur-10 p-0  border-1 border-navbarBorder-dark rounded-full  h-max    lg:px-8 lg:py-4">
                <div className="flex items-center justify-between p-1" style={{ overflow: 'hidden' }}>
                    <motion.div
                        whileHover={{
                            y: 45, // Move 5px downwards on hover
                            transition: { duration: 0.5, ease: "easeOut" },
                        }}
                    >
                        <img src={Logo} alt="Logo" style={{ height: '40px' }} />
                    </motion.div>
                    <div className="flex items-center gap-4 mx-4">
                        <div className="flex items-center gap-x-1 group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`size-4   group-hover:text-pink-400 ${pathname == '/' ? 'text-pink-400' : 'text-white'}`} >
                                <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                            </svg>

                            <Link to="/" className={`font-poppins  font-bold group-hover: group-hover:text-pink-400 ${pathname == '/' ? 'text-pink-400 ' : 'text-white'}`} > Main </Link>
                        </div>
                        <div className="flex items-center gap-x-1 group">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`size-4   group-hover:text-pink-400 ${pathname == '/contact' ? 'text-pink-400' : 'text-white'}`} >
                                <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
                            </svg>

                            <Link to="/contact" className={`font-poppins  font-bold group-hover: group-hover:text-pink-400 ${pathname == '/contact' ? 'text-pink-400 ' : 'text-white'}`} > Contact </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}