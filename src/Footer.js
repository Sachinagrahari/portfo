const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="mailto:sachinagrahari507@gmail.com" className="text-gray-400 hover:text-white transition" aria-label="Email">
                        <i className="fas fa-envelope text-2xl"></i>
                    </a>
                    <a href="https://github.com/Sachinagrahari" className="text-gray-400 hover:text-white transition" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a href="tel:+918090872889" className="text-gray-400 hover:text-white transition" aria-label="Phone">
                        <i className="fas fa-phone text-2xl"></i>
                    </a>
                </div>
                <p className="text-gray-400">© 2025 Sachin Kumar Agrahari. All rights reserved.</p>
            </div>
        </footer>
    );
};