import { useState } from 'react'
import '../assets/css/Product_Customize.css'

const Product_Customize = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form Data:', formData)
        alert('Thanks! We\'ll get back to you within 24 hours.')
        setFormData({ name: '', email: '', projectType: '', budget: '', message: '' })
    }

    return (
        <section id="product-customize" className="product-customize">
            <div className="container">
                <div className="customize-wrapper">
                    <div className="customize-info">
                        <span className="customize-badge">Custom development</span>
                        <h2>Need something built from scratch?</h2>
                        <p>
                            Tell us what you're trying to build, and we'll figure out how to make it happen. 
                            No commitment, just a conversation.
                        </p>
                        <div className="customize-points">
                            <div className="point">
                                <i className="bi bi-check-circle-fill"></i>
                                <div>
                                    <strong>Free consultation</strong>
                                    <p>We'll discuss your idea without any pressure.</p>
                                </div>
                            </div>
                            <div className="point">
                                <i className="bi bi-check-circle-fill"></i>
                                <div>
                                    <strong>No hidden fees</strong>
                                    <p>Transparent pricing, always.</p>
                                </div>
                            </div>
                            <div className="point">
                                <i className="bi bi-check-circle-fill"></i>
                                <div>
                                    <strong>Fast turnaround</strong>
                                    <p>We work quickly without cutting corners.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className="customize-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="e.g., John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="projectType">What are you looking to build?</label>
                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select an option</option>
                                <option value="website">Website</option>
                                <option value="mobile-app">Mobile App</option>
                                <option value="web-app">Web Application</option>
                                <option value="ai-ml">AI / ML Solution</option>
                                <option value="ecommerce">E-Commerce</option>
                                <option value="other">Something else</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="budget">What's your rough budget?</label>
                            <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            >
                                <option value="">Select a range</option>
                                <option value="under-5k">Under $5,000</option>
                                <option value="5k-15k">$5,000 – $15,000</option>
                                <option value="15k-50k">$15,000 – $50,000</option>
                                <option value="50k-plus">$50,000+</option>
                                <option value="not-sure">Not sure yet</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Tell us more about your project</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="What problem are you trying to solve? Who is it for? Any specific features you need?"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Send message
                            <i className="bi bi-arrow-right"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Product_Customize