import { Link } from 'react-router-dom'
import '../assets/css/Product_Order.css'

const Product_Order = () => {
    const products = [
        {
            id: 1,
            title: 'Admin Dashboard Template',
            category: 'UI Templates',
            description: 'Modern admin dashboard with dark/light mode, charts, and data tables.',
            price: '$49',
            icon: <i className="bi bi-layout-dashboard"></i>,
            features: ['React', 'Tailwind CSS', 'Fully Responsive', 'Dark/Light Mode'],
            popular: true,
            color: '#6366f1'
        },
        {
            id: 2,
            title: 'E-Commerce Starter Kit',
            category: 'Web Templates',
            description: 'Complete e-commerce starter with cart, checkout, and payment integration.',
            price: '$79',
            icon: <i className="bi bi-shop"></i>,
            features: ['React', 'Node.js', 'Stripe', 'Product Management'],
            popular: false,
            color: '#f59e0b'
        },
        {
            id: 3,
            title: 'Mobile App UI Kit',
            category: 'UI Templates',
            description: 'Beautiful mobile app components for iOS and Android with Figma files.',
            price: '$39',
            icon: <i className="bi bi-phone"></i>,
            features: ['Figma', 'React Native', 'Customizable', '300+ Components'],
            popular: false,
            color: '#10b981'
        },
        {
            id: 4,
            title: 'AI Chatbot Template',
            category: 'AI Tools',
            description: 'Ready-to-use chatbot template with OpenAI integration and customizable UI.',
            price: '$99',
            icon: <i className="bi bi-robot"></i>,
            features: ['OpenAI', 'React', 'Customizable', 'Multi-language'],
            popular: true,
            color: '#8b5cf6'
        },
        {
            id: 5,
            title: 'Landing Page Builder',
            category: 'Web Templates',
            description: 'Drag-and-drop landing page builder with pre-built templates and animations.',
            price: '$59',
            icon: <i className="bi bi-file-earmark-richtext"></i>,
            features: ['HTML/CSS', 'JavaScript', 'Animations', 'Mobile First'],
            popular: false,
            color: '#06b6d4'
        },
        {
            id: 6,
            title: 'Analytics Dashboard',
            category: 'Data Tools',
            description: 'Real-time analytics dashboard with customizable charts and reports.',
            price: '$89',
            icon: <i className="bi bi-bar-chart"></i>,
            features: ['React', 'D3.js', 'WebSocket', 'Export Reports'],
            popular: false,
            color: '#ef4444'
        }
    ]

    return (
        <section id="product-order" className="product-order">
            <div className="container">
                <div className="order-header">
                    <span className="section-badge">Ready-to-Use</span>
                    <h2 className="section-heading">Order Products & Templates</h2>
                    <p className="section-subheading">
                        Browse our collection of premium templates, utilities, and tools ready for immediate download
                    </p>
                </div>
                <div className="order-grid">
                    {products.map((product) => (
                        <div key={product.id} className="order-card" style={{ '--product-color': product.color }}>
                            {product.popular && (
                                <div className="popular-badge">
                                    <i className="bi bi-star-fill"></i> Popular
                                </div>
                            )}
                            <div className="order-icon" style={{ background: `${product.color}15`, color: product.color }}>
                                {product.icon}
                            </div>
                            <div className="order-category">{product.category}</div>
                            <h3 className="order-title">{product.title}</h3>
                            <p className="order-desc">{product.description}</p>
                            <div className="order-features">
                                {product.features.map((feature, index) => (
                                    <span key={index} className="order-feature">
                                        <i className="bi bi-check-circle-fill"></i> {feature}
                                    </span>
                                ))}
                            </div>
                            <div className="order-footer">
                                <span className="order-price">{product.price}</span>
                                <Link to="/checkout" className="btn-order">
                                    Order Now <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="order-note">
                    <i className="bi bi-info-circle"></i>
                    <span>All products come with 30-day money-back guarantee and free updates for 6 months</span>
                </div>
            </div>
        </section>
    )
}

export default Product_Order