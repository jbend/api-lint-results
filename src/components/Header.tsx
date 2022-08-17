import trimbleLogo from '../assets/trimble-logo.svg'

const Header = () => {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
            <div className="container flex flex-wrap items-start mx-auto">
                <img src={trimbleLogo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                    Linting Results
                </span>
            </div>
        </nav>
   );
}

export default Header;