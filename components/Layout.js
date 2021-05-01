import {useState} from 'react'
import MobileMenu from './MMenu'
import Link from 'next/link'
import Head from 'next/head'
import {AiOutlineMenu, AiFillHeart} from 'react-icons/ai'
import { useGlobalContext } from './State';
import {AnimatePresence, motion} from 'framer-motion'

const mmVrnts = {
    from: {
        opacity: 0,

    },
    to: {
        opacity: 1,
        transition: {
            duration: .2
        }
    }
}

function Layout({children}) {
    const {isMobileMenu, openMobileMenu} = useGlobalContext();

    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <title>Bluecarbon Blog</title>
            </Head>
            <AnimatePresence>
                {
                    isMobileMenu && <motion.div className="fixed bg-black bg-opacity-70 left-0 top-0 w-full h-full z-10 flex items-center" variants={mmVrnts} animate='to' initial='from' exit='from'>
                        <MobileMenu />
                    </motion.div>
                }
            </AnimatePresence>
            <nav className="menubar container mx-auto flex flex-row justify-between py-2 px-2 lg:px-0">
                <h1 className="text-2xl font-bold">Logo</h1>
                <ul className="flex">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                </ul>
                <button className="primary-btn px-3 rounded-full text-base">Sign In</button>
                <button className="mobile-view" onClick={(e) => openMobileMenu()}>
                    <AiOutlineMenu className="text-3xl" />
                </button>
            </nav>
            
            <main>
                {children}
            </main>
            <footer className="bg-gray-900">
                <div className="container text-center text-white pt-14 pb-5">
                    <p className="capitalize p-2">All Rights Reserved &copy; <Link href="/"><a className="text-lg font-bold underline">Bluecarbon</a></Link> Developed with <AiFillHeart className="inline-block text-red-600 text-xl" /> by <a href="mailto:ayoubch34@gmail.com?subject=From BlueCarbon Project" className="uppercase text-lg font-bold underline">Ayoub</a></p> 

                </div>
            </footer>
        </>
    )
}

export default Layout