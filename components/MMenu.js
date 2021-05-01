import {GrClose} from 'react-icons/gr'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import Link from 'next/link'
import { useGlobalContext } from './State'
import {AnimatePresence, motion} from 'framer-motion'


const containerVrnts = {
    from: {
        y: '-100vw',

    },
    to: {
        y: 0,
        transition: {
            duration: .2,
            delay: .08,
            type: 'spring'
        }
    }
}



function MMenu() {


    const {closeMobileMenu} = useGlobalContext();

    
    return (
        <motion.section variants={containerVrnts} animate='to' initial='from' className="mm-section container mx-auto p-8 flex flex-col justify-between h-2/3 w-3/4 rounded-2xl  bg-white">
        <div>
            <div className="h-12 flex flex-row justify-end px-1" onClick={() => closeMobileMenu()}>
                <GrClose className="text-2xl cursor-pointer" />
            </div>
            <button className="primary-btn w-full" type="button">sign in</button>
            <ul className="py-8 mm-nav">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <details>
                        <summary>Thesaurus</summary>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>   
                        </ul>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Explore</summary>
                    </details>
                </li>
                <li>
                    <details>
                        <summary>Word of The Year</summary>
                    </details>
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
        </div>
        
        <div className="flex flex-row justify-around socialcontainer">
            <FaYoutube />
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
        </div>
        </motion.section>

    )
}

export default MMenu
