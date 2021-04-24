import MobileMenu from './MMenu'
import Link from 'next/link'
import {AiOutlineMenu, AiFillHeart} from 'react-icons/ai'


function Layout({children}) {

    return (
        <>
            {/* <MobileMenu /> */}
            <nav className="menubar container mx-auto flex flex-row justify-between py-2">
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
                <button className="primary-btn px-2 ">Sign In</button>
                <button className="mobile-view">
                    <AiOutlineMenu className="text-3xl" />
                </button>
            </nav>
            
            <main>
                {children}
            </main>
            <footer className="bg-gray-900">
                <div className="container text-center text-white pt-14 pb-5">
                    <p className="capitalize">All Right Rserved &copy; <Link href="/"><a className="text-lg font-bold underline">Bluecarbon</a></Link> Developed with <AiFillHeart className="inline-block text-red-600 text-xl" /> by <a href="mailto:ayoubch34@gmail.com?subject=From BlueCarbon Project" className="uppercase text-lg font-bold underline">Ayoub</a></p> 

                </div>
            </footer>
        </>
    )
}

export default Layout