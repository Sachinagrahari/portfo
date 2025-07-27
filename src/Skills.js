const Skills = () => {
    const skills = [
        { name: 'HTML/CSS', icon: 'fab fa-html5', color: 'text-orange-500' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: 'text-yellow-500' },
        { name: 'PHP', icon: 'fab fa-php', color: 'text-purple-500' },
        { name: 'SQL Server', icon: 'fas fa-database', color: 'text-blue-600' },
        { name: 'jQuery', icon: 'fas fa-code', color: 'text-blue-400' },
        { name: 'C/C++', icon: 'fas fa-code-branch', color: 'text-gray-600' },
        { name: 'MS Excel', icon: 'fas fa-file-excel', color: 'text-green-500' },
        { name: 'Database Management', icon: 'fas fa-server', color: 'text-red-500' }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
                            <i className={`${skill.icon} text-4xl ${skill.color} mb-4`}></i>
                            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};