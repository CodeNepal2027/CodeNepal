// import { Link } from 'react-router-dom'
import '../assets/css/Team_Info.css'

const Team_Info = () => {
    const perks = [
        {
            icon: <i className="bi bi-laptop"></i>,
            title: 'Remote First',
            description: 'Work from anywhere in the world. We believe in flexibility.'
        },
        {
            icon: <i className="bi bi-clock-history"></i>,
            title: 'Flexible Hours',
            description: 'Choose your own schedule. Focus on results, not hours.'
        },
        {
            icon: <i className="bi bi-people"></i>,
            title: 'Great Culture',
            description: 'Collaborative, supportive, and inclusive environment.'
        },
        {
            icon: <i className="bi bi-graph-up"></i>,
            title: 'Growth Opportunities',
            description: 'Learn, grow, and advance your career with us.'
        },
        {
            icon: <i className="bi bi-award"></i>,
            title: 'Competitive Pay',
            description: 'Fair compensation for your skills and contributions.'
        },
        {
            icon: <i className="bi bi-heart"></i>,
            title: 'Health Benefits',
            description: 'Comprehensive health and wellness benefits.'
        }
    ]

    const values = [
        'Innovation First',
        'Customer Focus',
        'Team Collaboration',
        'Continuous Learning',
        'Quality Excellence',
        'Integrity & Trust'
    ]

    return (
        <section className="team-info">
            <div className="container">
                <div className="team-info-hero">
                    <span className="team-badge">Join Our Team</span>
                    <h1 className="team-title">
                        Build Your Career With <br />
                        <span className="highlight">CodeNepal</span>
                    </h1>
                    <p className="team-description">
                        We're looking for passionate people who want to make a difference through technology. 
                        Join us and work on exciting projects with a talented team.
                    </p>
                    <div className="team-actions">
                        <a href="#apply-form" className="btn-apply">
                            Apply Now <i className="bi bi-arrow-right"></i>
                        </a>
                        <a href="#perks" className="btn-learn">
                            Learn More <i className="bi bi-chevron-down"></i>
                        </a>
                    </div>
                </div>

                <div id="perks" className="team-perks">
                    <div className="perks-header">
                        <span className="section-label">Why Join Us</span>
                        <h2>What We Offer</h2>
                        <p>We believe in creating an environment where you can thrive both personally and professionally.</p>
                    </div>
                    <div className="perks-grid">
                        {perks.map((perk, index) => (
                            <div key={index} className="perk-card">
                                <div className="perk-icon">{perk.icon}</div>
                                <h3 className="perk-title">{perk.title}</h3>
                                <p className="perk-description">{perk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="team-values">
                    <div className="values-header">
                        <span className="section-label">Our Values</span>
                        <h2>What We Stand For</h2>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-item">
                                <span className="value-number">{String(index + 1).padStart(2, '0')}</span>
                                <span className="value-name">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="team-cta">
                    <div className="cta-box">
                        <h3>Ready to join us?</h3>
                        <p>Fill out the application form below and let's start a conversation.</p>
                        <a href="#apply-form" className="btn-apply-cta">
                            Apply Now <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team_Info