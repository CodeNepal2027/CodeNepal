import '../assets/css/Home_Features.css'

const Home_Features = () => {
    const features = [
        { icon: <i className="bi bi-trophy"></i>, title: 'Industry Experts', desc: '10+ years of experience in tech', color: '#6366f1' },
        { icon: <i className="bi bi-clock-history"></i>, title: 'Fast Delivery', desc: 'Agile development process', color: '#f59e0b' },
        { icon: <i className="bi bi-bar-chart-steps"></i>, title: 'Scalable Solutions', desc: 'Grow with your business', color: '#10b981' },
        { icon: <i className="bi bi-check-circle"></i>, title: 'Quality Assured', desc: 'Rigorous testing standards', color: '#06b6d4' },
        { icon: <i className="bi bi-shield-check"></i>, title: 'Secure Systems', desc: 'Enterprise-grade security', color: '#ef4444' },
        { icon: <i className="bi bi-headset"></i>, title: '24/7 Support', desc: 'Round-the-clock assistance', color: '#ec4899' }
    ]

    return (
        <section className="home-features">
            <div className="container">
                <div className="section-header-center">
                    <span className="section-badge">Why Choose Us</span>
                    <h2 className="section-heading">We Deliver Excellence</h2>
                    <p className="section-subheading">Discover what makes CodeNepal the preferred tech partner for businesses worldwide</p>
                </div>
                <div className="features-grid">
                    {features.map((feature, i) => (
                        <div key={i} className="feature-card" style={{ '--feature-color': feature.color }}>
                            <div className="feature-icon-wrapper">
                                <div className="feature-icon">{feature.icon}</div>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                            <div className="feature-hover-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home_Features