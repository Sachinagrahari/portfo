const Hero = () => {
    return (
        <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="bounce-in">
                    <div className="inline-block p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-8 pulse-glow">
                        <i className="fas fa-code text-4xl text-white"></i>
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-6 fade-in">Sachin Kumar Agrahari</h1>
                <p className="text-2xl md:text-3xl text-gray-700 mb-4 slide-up font-light">Web Developer</p>
                <p className="text-lg md:text-xl text-gray-600 mb-12 slide-up max-w-2xl mx-auto">Crafting digital experiences with modern technologies and database expertise</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center slide-up">
                    <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold">
                        <i className="fas fa-paper-plane mr-2"></i>Get In Touch
                    </a>
                    <a href="./public/resume.pdf" download className="bg-white text-gray-800 px-10 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold border border-gray-200">
                        <i className="fas fa-download mr-2 text-blue-600"></i>Download Resume
                    </a>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <i className="fas fa-chevron-down text-2xl"></i>
                </a>
            </div>
        </section>
    );
};