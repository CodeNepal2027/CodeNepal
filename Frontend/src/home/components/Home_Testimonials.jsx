import { Link } from 'react-router-dom'
import '../assets/css/Home_Testimonials.css'

const Home_Testimonials = () => {
    const testimonials = [
        {
            name: 'Rajesh Sharma',
            role: 'CTO, TechCorp',
            content: 'CodeNepal transformed our digital infrastructure. Their team is exceptional! The AI solutions they delivered exceeded our expectations.',
            rating: 5
        },
        {
            name: 'Sita Gurung',
            role: 'Product Manager, InnovateLabs',
            content: 'The best tech partner we\'ve worked with. Highly recommended for any complex project! Their agile approach made all the difference.',
            rating: 5
        },
        {
            name: 'Bikram Thapa',
            role: 'Founder, StartupHub',
            content: 'Their AI solutions gave us a competitive edge in the market. Truly innovative and reliable partners.',
            rating: 5
        }
    ]

    return (
        <section className="home-testimonials">
            <div className="container">
                <div className="testimonials-wrapper">
                    <div className="testimonials-header">
                        <span className="section-badge">Testimonials</span>
                        <h2 className="section-heading">What Our Clients Say</h2>
                        <p className="section-subheading">
                            Don't just take our word for it - hear from businesses that have transformed with CodeNepal
                        </p>
                    </div>
                    <div className="testimonials-grid-enhanced">
                        {testimonials.map((testimonial, i) => (
                            <div key={i} className="testimonial-card-enhanced">
                                <i className="bi bi-quote quote-icon"></i>
                                <p className="testimonial-text">"{testimonial.content}"</p>
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, j) => (
                                        <i key={j} className="bi bi-star-fill star-filled"></i>
                                    ))}
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-info">
                                        <strong>{testimonial.name}</strong>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="testimonials-footer">
                        <Link to="/testimonials" className="btn-view-all">
                            Read More Success Stories <i className="bi bi-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home_Testimonials