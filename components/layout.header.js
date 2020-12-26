import Link from 'next/link'
import Toggle from './theme.toggle'
import GoogleFonts from "next-google-fonts";

const Header = () => {
    return (
        <div>
            <GoogleFonts href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700&display=swap" />
            <div className="border-t-8 border-primary-default">
                <nav className="container flex flex-wrap items-center justify-between py-8 mx-auto">
                    <div>
                        <Link href="/">
                            <a className="text-2xl font-bold uppercase " data-bcup-haslogintext="no">
                                <div className="inline-block mr-2 text-primary-default">
                                    Piotr
                            </div>
                            Yordanov
                        </a>
                        </Link>
                    </div>
                    <div className="block lg:hidden">
                        <button data-cypress="hamburger" className="flex items-center px-3 py-2 border border-gray-500 rounded hover:text-gray-600 hover:border-gray-600" data-bcup-haslogintext="no">
                        </button>
                    </div>
                    <ul data-cypress="menu" className="items-center flex-grow hidden block w-full mt-8 space-y-6 font-bold tracking-wide uppercase lg:space-x-8 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto lg:mt-0">
                        <li>
                            <Toggle />
                        </li>
                        <li>
                            <Link href="/#specialities">
                                <a className="hover:text-gray-600" >Specialities</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/#hobbies">
                                <a data-cypress="contact" className="text-copy-primary hover:text-gray-600" data-bcup-haslogintext="no">Hobbies</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header