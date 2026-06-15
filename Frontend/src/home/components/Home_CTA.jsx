import { Link } from 'react-router-dom'
import '../assets/css/Home_CTA.css'

const Home_CTA = () => {
    return (
        <section className="home-cta">
            <div className="container">
                <div className="cta-enhanced-wrapper">
                    <div className="cta-bg-pattern"></div>
                    <div className="cta-content">
                        <div className="cta-left">
                            <span className="cta-badge">Ready to Transform?</span>
                            <h2 className="cta-title">Let's Build Something <span className="text-gradient">Amazing</span> Together</h2>
                            <p className="cta-description">
                                Schedule a free consultation with our experts and discover how we can help you achieve your goals.
                            </p>
                            <div className="cta-contact-info">
                                <div className="contact-item">
                                    <i className="bi bi-envelope"></i>
                                    <span>hello@codenepal.com</span>
                                </div>
                                <div className="contact-item">
                                    <i className="bi bi-telephone"></i>
                                    <span>+977 1234567890</span>
                                </div>
                            </div>
                        </div>
                        <div className="cta-right">
                            <Link to="/contact" className="cta-primary-btn">
                                Start Your Project <i className="bi bi-arrow-right"></i>
                            </Link>
                            <Link to="/services" className="cta-secondary-btn">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_CTA