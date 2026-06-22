import { Link } from 'react-router-dom'
import '../assets/css/Product_Hero.css'

const Product_Hero = () => {
    return (
        <section className="product-hero">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        {/* <div className="hero-badge">
                            <i className="bi bi-rocket-takeoff"></i>
                            <span>Trusted by 50+ companies</span>
                        </div> */}
                        <h1 className="hero-title">
                            Products that <br />
                            <span className="hero-highlight">drive real results</span>
                        </h1>
                        <p className="hero-text">
                            From ready-to-use templates to fully custom solutions — we help businesses 
                            launch faster, scale smarter, and build better products.
                        </p>
                        <div className="hero-actions">
                            <Link to="#options" className="btn-primary">
                                <span>Explore our products</span>
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                <i className="bi bi-chat-dots"></i>
                                <span>Talk to us</span>
                            </Link>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects delivered</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Happy clients</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">4.9/5</span>
                                <span className="stat-label">Average rating</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="visual-card card-1">
                            <i className="bi bi-code-square"></i>
                            <div className="card-info">
                                <strong>Full-Stack Dev</strong>
                                <span>React, Node, Python</span>
                            </div>
                        </div>
                        <div className="visual-card card-2">
                            <i className="bi bi-cpu"></i>
                            <div className="card-info">
                                <strong>AI Integration</strong>
                                <span>LLM, ML, Computer Vision</span>
                            </div>
                        </div>
                        <div className="visual-card card-3">
                            <i className="bi bi-cloud"></i>
                            <div className="card-info">
                                <strong>Mobile App Dev</strong>
                                <span>AWS, Azure, GCP</span>
                            </div>
                        </div>
                        <div className="visual-circle"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product_Hero