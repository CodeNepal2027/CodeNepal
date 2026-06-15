import { Link } from 'react-router-dom'
import '../assets/css/Home_Hero.css'

const Home_Hero = () => {
    return (
        <section className="home-hero">
            <div className="hero-bg-particles"></div>
            <div className="hero-gradient-orb"></div>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-left">
                        {/* <div className="hero-chip">
                            <span className="chip-dot"></span>
                            <span className="chip-text">Trusted by 50+ Companies</span>
                            <span className="chip-badge">⭐ 4.9 Rating</span>
                        </div> */}
                        <h1 className="hero-heading">
                            Build <span className="text-gradient">Future-Ready</span>
                            <br />
                            Digital Products
                        </h1>
                        <p className="hero-description">
                            CodeNepal combines cutting-edge technology with expert craftsmanship 
                            to deliver innovative solutions that drive business growth and digital transformation.
                        </p>
                        <div className="hero-actions">
                            <Link to="/services" className="btn-primary-gradient">
                                <span>Start Your Journey</span>
                                <i className="bi bi-arrow-right btn-icon"></i>
                            </Link>
                            <Link to="/contact" className="btn-secondary-outline">
                                <span>Watch Demo</span>
                                <i className="bi bi-play-circle btn-icon"></i>
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="stat-value">50+</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                            <div className="hero-stat">
                                <span className="stat-value">30+</span>
                                <span className="stat-label">Expert Engineers</span>
                            </div>
                            <div className="hero-stat">
                                <span className="stat-value">98%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right">
                        <div className="hero-card-animation">
                            <div className="floating-card card-1">
                                <div className="card-icon-bg"><i className="bi bi-code-slash"></i></div>
                                <div className="card-content">
                                    <span className="card-title">Full Stack Dev</span>
                                    <span className="card-subtitle">React, Node, Python</span>
                                </div>
                            </div>
                            <div className="floating-card card-2">
                                <div className="card-icon-bg"><i className="bi bi-lightning-charge"></i></div>
                                <div className="card-content">
                                    <span className="card-title">AI Integration</span>
                                    <span className="card-subtitle">ML, LLM, Computer Vision</span>
                                </div>
                            </div>
                            <div className="floating-card card-3">
                                <div className="card-icon-bg"><i className="bi bi-graph-up"></i></div>
                                <div className="card-content">
                                    <span className="card-title">Cloud Native</span>
                                    <span className="card-subtitle">AWS, Azure, GCP</span>
                                </div>
                            </div>
                            <div className="hero-shape"></div>
                            <div className="hero-shape-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-wave-bottom">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
                </svg>
            </div>
        </section>
    )
}

export default Home_Hero