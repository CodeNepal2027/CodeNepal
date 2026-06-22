import { Link } from 'react-router-dom'
import '../assets/css/Product_CTA.css'

const Product_CTA = () => {
    return (
        <section className="product-cta">
            <div className="container">
                <div className="cta-box">
                    <div className="cta-content">
                        <span className="cta-emoji">💬</span>
                        <h2>Not sure what you need?</h2>
                        <p>
                            That's totally fine. Just reach out and we'll figure it out together. 
                            No sales pitch, just honest advice.
                        </p>
                        <div className="cta-actions">
                            <Link to="/contact" className="cta-primary">
                                Start a conversation
                                <i className="bi bi-arrow-right"></i>
                            </Link>
                            <Link to="/about" className="cta-secondary">
                                Learn more about us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product_CTA