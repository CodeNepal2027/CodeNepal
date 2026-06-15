import { Link } from 'react-router-dom'
import '../assets/css/Home_Services.css'

const Home_Services = () => {
    const services = [
        { 
            icon: <i className="bi bi-code-square"></i>, 
            title: 'Full-Stack Development', 
            desc: 'End-to-end web and application development using modern frameworks like React, Node.js, Python, and Laravel.',
            color: '#6366f1',
            features: ['Frontend Dev', 'Backend Dev', 'API Integration', 'Database Design']
        },
        { 
            icon: <i className="bi bi-phone"></i>, 
            title: 'Website & Mobile Apps', 
            desc: 'Custom responsive websites and cross-platform mobile applications for business growth.',
            color: '#f59e0b',
            features: ['Responsive Design', 'iOS/Android Apps', 'PWA Development', 'E-commerce Solutions']
        },
        { 
            icon: <i className="bi bi-gear"></i>, 
            title: 'Software Development & Maintenance', 
            desc: 'Custom software solutions with ongoing support, updates, and maintenance.',
            color: '#10b981',
            features: ['Custom Software', 'System Integration', '24/7 Support', 'Bug Fixes & Updates']
        },
        { 
            icon: <i className="bi bi-bug"></i>, 
            title: 'QA & Testing', 
            desc: 'Comprehensive quality assurance and testing services to ensure flawless software delivery.',
            color: '#ef4444',
            features: ['Manual Testing', 'Automation Testing', 'Performance Testing', 'Security Testing']
        },
        { 
            icon: <i className="bi bi-graph-up"></i>, 
            title: 'SEO & Digital Marketing', 
            desc: 'Data-driven SEO strategies to improve visibility, traffic, and conversion rates.',
            color: '#06b6d4',
            features: ['On-Page SEO', 'Off-Page SEO', 'Content Strategy', 'Analytics & Reporting']
        },
                { 
            icon: <i className="bi bi-people"></i>, 
            title: 'Staff Augmentation', 
            desc: 'Expert talent for your projects, scale your team instantly with vetted professionals.',
            color: '#f97316',
            features: ['Remote Developers', 'Tech Leads', 'QA Engineers', 'Project Managers']
        },
        // { 
        //     icon: <i className="bi bi-lightbulb"></i>, 
        //     title: 'Software Product Development', 
        //     desc: 'End-to-end product development from ideation to launch and scaling.',
        //     color: '#ec4899',
        //     features: ['Product Strategy', 'MVP Development', 'Agile Methodology', 'Product Scaling']
        // },
        // { 
        //     icon: <i className="bi bi-cpu"></i>, 
        //     title: 'GenAI Solutions', 
        //     desc: 'Next-gen AI platforms for business transformation with cutting-edge LLMs.',
        //     color: '#8b5cf6',
        //     features: ['Custom LLM', 'RAG Systems', 'AI Agents', 'Chatbot Development']
        // },
        // { 
        //     icon: <i className="bi bi-cloud-arrow-up"></i>, 
        //     title: 'DevOps & Cloud', 
        //     desc: 'Scalable cloud infrastructure with CI/CD pipelines and automation.',
        //     color: '#14b8a6',
        //     features: ['Cloud Migration', 'Kubernetes', 'Infrastructure as Code', 'CI/CD Pipelines']
        // },
    ]

    return (
        <section className="home-services">
            <div className="container">
                <div className="section-header-center">
                    <span className="section-badge">Our Services</span>
                    <h2 className="section-heading">Comprehensive Tech Solutions</h2>
                    <p className="section-subheading">End-to-end services to power your digital transformation journey</p>
                </div>
                <div className="services-grid-enhanced">
                    {services.map((service, i) => (
                        <div key={i} className="service-card-enhanced" style={{ '--card-color': service.color }}>
                            <div className="card-glow"></div>
                            <div className="card-header">
                                <div className="card-icon" style={{ background: `${service.color}15`, color: service.color }}>
                                    {service.icon}
                                </div>
                                <div className="card-badge">
                                    {i < 3 ? 'Popular' : i < 6 ? 'Featured' : 'New'}
                                </div>
                            </div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-desc">{service.desc}</p>
                            <div className="card-features">
                                {service.features.map((feature, idx) => (
                                    <span key={idx} className="feature-tag">{feature}</span>
                                ))}
                            </div>
                            <Link to="/services" className="card-link">
                                Learn More <i className="bi bi-arrow-right"></i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home_Services