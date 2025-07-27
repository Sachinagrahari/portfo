const Projects = () => {
    const projects = [
        {
            title: 'UPI Reconciliation System',
            description: 'Comprehensive UPI reconciliation handling disputes, inward/outward transactions, and UPI Lite reconciliation with automated reporting',
            technologies: ['SQL', 'Database Management', 'NPCI Integration', 'Transaction Processing'],
            link: '#',
            demo: '#'
        },
        {
            title: 'IMPS Reconciliation (UOB Bank)',
            description: 'On-site reconciliation system for UOB Bank handling UPI/IMPS payments, unreconciled entries, and daily reconciliation certificates',
            technologies: ['SQL', 'Banking Systems', 'Payment Processing', 'Report Generation'],
            link: '#',
            demo: '#'
        },
        {
            title: 'Database Management System',
            description: 'Efficient database management for transaction reconciliation, fraud data management, and settlement processing',
            technologies: ['SQL Server', 'Data Analysis', 'Report Generation', 'Database Optimization'],
            link: '#',
            demo: '#'
        },
        {
            title: 'Web Development Projects',
            description: 'Various web development projects using modern technologies and responsive design principles',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'jQuery'],
            link: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex space-x-4">
                                <a href={project.link} className="text-blue-600 hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github mr-1"></i>Code
                                </a>
                                <a href={project.demo} className="text-blue-600 hover:text-blue-800 transition" target="_blank" rel="noopener noreferrer">
                                    <i className="fas fa-external-link-alt mr-1"></i>Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};