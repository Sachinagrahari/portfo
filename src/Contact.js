const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message logged to console (demo mode)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Me</h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <i className="fas fa-envelope text-blue-600 mr-4"></i>
                                <span className="text-gray-600">sachinagrahari507@gmail.com</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-phone text-blue-600 mr-4"></i>
                                <span className="text-gray-600">+91-8090872889</span>
                            </div>
                            <div className="flex items-center">
                                <i className="fab fa-github text-blue-600 mr-4"></i>
                                <a href="https://github.com/Sachinagrahari" className="text-gray-600 hover:text-blue-600 transition" target="_blank" rel="noopener noreferrer">
                                    github.com/Sachinagrahari
                                </a>
                            </div>
                            <div className="flex items-center">
                                <i className="fas fa-map-marker-alt text-blue-600 mr-4"></i>
                                <span className="text-gray-600">Virar(E), Maharashtra, India</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <a href="./public/resume.pdf" download className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block">
                                <i className="fas fa-download mr-2"></i>Download Resume
                            </a>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};