import Toggle from './theme.toggle'
import Head from './head'
const Header = () => {
    return (
        <div>
            <Head />
            <div className="border-t-8 border-green-500">
                <nav className="container mx-auto flex flex-wrap justify-between items-center py-8">
                    <div>
                        <a href="/" className="text-2xl uppercase font-bold " data-bcup-haslogintext="no">
                            <div className="inline-block text-green-600 mr-2">
                                Piotr
                            </div>
                            Yordanov
                        </a>
                    </div>
                    <div className="block lg:hidden">
                        <button data-cypress="hamburger" className="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600" data-bcup-haslogintext="no">
                        </button>
                    </div>
                    <ul data-cypress="menu" className="uppercase tracking-wide font-bold w-full block flex-grow lg:space-x-8 space-y-6 lg:space-y-0 lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0 hidden">
                        <li>
                            <Toggle />
                        </li>
                        <li><a href="/projects" className="hover:text-gray-600" >Projects</a></li>
                        <li><a href="/hobbies" data-cypress="contact" className="text-copy-primary hover:text-gray-600" data-bcup-haslogintext="no">Hobbies</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header