const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white shadow-md z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">My Portfolio</div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
                        <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
                        <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        <a href="#home" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>About</a>
                        <a href="#skills" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Skills</a>
                        <a href="#projects" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Projects</a>
                        <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </div>
                )}
            </nav>
        </header>
    );
};