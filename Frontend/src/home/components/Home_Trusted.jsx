import '../assets/css/Home_Trusted.css'

const Home_Trusted = () => {
    const companies = [
        { name: 'TechCorp', delay: '0s' },
        { name: 'InnovateLabs', delay: '0.1s' },
        { name: 'FutureSys', delay: '0.2s' },
        { name: 'DataDrive', delay: '0.3s' },
        { name: 'CloudNine', delay: '0.4s' },
        { name: 'AI Dynamics', delay: '0.5s' }
    ]

    return (
        <section className="home-trusted">
            <div className="container">
                <p className="trusted-label">Trusted by industry leaders worldwide</p>
                <div className="trusted-grid">
                    {companies.map((company, i) => (
                        <div 
                            key={i} 
                            className="trusted-item"
                            style={{ animationDelay: company.delay }}
                        >
                            {company.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home_Trusted