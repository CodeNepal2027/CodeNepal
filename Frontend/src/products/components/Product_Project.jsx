import { Link } from 'react-router-dom'
import '../assets/css/Product_Project.css'

const Product_Project = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            category: 'Full-Stack Development',
            description: 'A complete e-commerce solution with payment gateway, inventory management, and real-time analytics.',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
            client: 'TechCorp Inc.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: 'https://example.com',
            color: '#6366f1'
        },
        {
            id: 2,
            title: 'Healthcare Management System',
            category: 'Healthcare Tech',
            description: 'HIPAA-compliant patient management system with telemedicine capabilities and EHR integration.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
            client: 'MediCare Solutions',
            technologies: ['Python', 'Django', 'PostgreSQL', 'AWS'],
            link: 'https://example.com',
            color: '#10b981'
        },
        {
            id: 3,
            title: 'AI-Powered Chatbot',
            category: 'GenAI Solutions',
            description: 'Intelligent chatbot with custom LLM integration for customer support automation.',
            image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
            client: 'InnovateLabs',
            technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
            link: 'https://example.com',
            color: '#8b5cf6'
        },
        {
            id: 4,
            title: 'Mobile Banking App',
            category: 'Mobile Apps',
            description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop',
            client: 'FinTech Solutions',
            technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
            link: 'https://example.com',
            color: '#f59e0b'
        },
        {
            id: 5,
            title: 'DevOps Automation Tool',
            category: 'DevOps & Cloud',
            description: 'CI/CD automation platform with Kubernetes integration and infrastructure monitoring.',
            image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop',
            client: 'CloudNine',
            technologies: ['Go', 'Kubernetes', 'Terraform', 'Prometheus'],
            link: 'https://example.com',
            color: '#06b6d4'
        },
        {
            id: 6,
            title: 'Real Estate Management',
            category: 'Web Development',
            description: 'Complete real estate platform with property listings, virtual tours, and CRM integration.',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
            client: 'PropertyHub',
            technologies: ['React', 'Laravel', 'MySQL', 'Google Maps API'],
            link: 'https://example.com',
            color: '#ef4444'
        }
    ]

    return (
        <section id="product-projects" className="product-projects">
            <div className="container">
                <div className="projects-header">
                    <span className="section-badge">Our Portfolio</span>
                    <h2 className="section-heading">View Our Projects</h2>
                    <p className="section-subheading">
                        Explore our successful projects and see how we've helped businesses achieve their goals
                    </p>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card" style={{ '--project-color': project.color }}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <span className="project-category">{project.category}</span>
                                </div>
                            </div>
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-client">
                                        <i className="bi bi-building"></i> {project.client}
                                    </span>
                                </div>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-actions">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-view-project">
                                        View Project <i className="bi bi-arrow-right"></i>
                                    </a>
                                    <Link to="/contact" className="btn-inquire">
                                        Inquire <i className="bi bi-chat"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Product_Project