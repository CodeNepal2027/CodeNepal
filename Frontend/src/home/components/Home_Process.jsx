import '../assets/css/Home_Process.css'

const Home_Process = () => {
    const steps = [
        { 
            number: '01', 
            title: 'Discovery', 
            desc: 'Deep dive into your vision and requirements',
            icon: <i className="bi bi-search"></i>,
            color: '#6366f1'
        },
        { 
            number: '02', 
            title: 'Planning', 
            desc: 'Strategic roadmap and architecture design',
            icon: <i className="bi bi-map"></i>,
            color: '#f59e0b'
        },
        { 
            number: '03', 
            title: 'Development', 
            desc: 'Agile sprints with continuous delivery',
            icon: <i className="bi bi-code-slash"></i>,
            color: '#10b981'
        },
        { 
            number: '04', 
            title: 'Launch', 
            desc: 'Deployment and ongoing maintenance',
            icon: <i className="bi bi-rocket-takeoff"></i>,
            color: '#06b6d4'
        }
    ]

    return (
        <section className="home-process">
            <div className="container">
                <div className="section-header-center">
                    <span className="section-badge">How We Work</span>
                    <h2 className="section-heading">Simple & Transparent Process</h2>
                    <p className="section-subheading">We make complex technology simple with our proven methodology</p>
                </div>
                <div className="process-timeline">
                    {steps.map((step, i) => (
                        <div key={i} className="timeline-step">
                            <div className="step-connector">
                                <div className="step-circle" style={{ borderColor: step.color }}>
                                    <div className="step-number">{step.number}</div>
                                </div>
                                {i < steps.length - 1 && <div className="step-line"></div>}
                            </div>
                            <div className="step-content">
                                <div className="step-icon" style={{ background: `${step.color}15`, color: step.color }}>
                                    {step.icon}
                                </div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home_Process