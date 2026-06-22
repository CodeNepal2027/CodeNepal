import { useState, useEffect, useRef } from 'react'
import '../assets/css/Product_Option.css'

const Product_Option = ({ selectedOption, setSelectedOption }) => {
    const [isSticky, setIsSticky] = useState(false)
    const optionsRef = useRef(null)
    const stickyRef = useRef(null)

    const options = [
        {
            id: 'projects',
            icon: <i className="bi bi-folder2-open"></i>,
            title: 'View Our Projects',
            description: 'See what we\'ve built for others — real projects, real results.',
            color: '#6366f1',
            sectionId: 'product-projects'
        },
        {
            id: 'order',
            icon: <i className="bi bi-cart-plus"></i>,
            title: 'Order Products',
            description: 'Ready-to-use templates and tools that save you time and money.',
            color: '#f59e0b',
            sectionId: 'product-order'
        },
        {
            id: 'customize',
            icon: <i className="bi bi-tools"></i>,
            title: 'Custom Development',
            description: 'Tell us what you need and we\'ll build it from scratch.',
            color: '#10b981',
            sectionId: 'product-customize'
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (optionsRef.current) {
                const rect = optionsRef.current.getBoundingClientRect()
                const navbarHeight = 70 // Adjust based on your navbar height
                setIsSticky(rect.top <= navbarHeight)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleOptionClick = (optionId, sectionId) => {
        setSelectedOption(optionId)
        
        setTimeout(() => {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                })
            }
        }, 150)
    }

    return (
        <>
            {/* Sticky Bar - Only shows when scrolled past options */}
            <div ref={stickyRef} className={`sticky-options-bar ${isSticky ? 'visible' : ''}`}>
                <div className="container">
                    <div className="sticky-options-grid">
                        {options.map((option) => (
                            <div
                                key={option.id}
                                className={`sticky-option ${selectedOption === option.id ? 'active' : ''}`}
                                onClick={() => handleOptionClick(option.id, option.sectionId)}
                                style={{ '--option-color': option.color }}
                            >
                                <span className="sticky-icon">{option.icon}</span>
                                <span className="sticky-title">{option.title}</span>
                                {selectedOption === option.id && (
                                    <span className="sticky-indicator"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Options Section */}
            <section id="options" className="product-options" ref={optionsRef}>
                <div className="container">
                    <div className="options-heading">
                        <span className="options-badge">Choose your path</span>
                        <h2>What are you looking for?</h2>
                        <p>Pick the option that fits your needs — no pressure, no obligations.</p>
                    </div>
                    <div className="options-grid">
                        {options.map((option) => (
                            <div
                                key={option.id}
                                className={`option-card ${selectedOption === option.id ? 'active' : ''}`}
                                onClick={() => handleOptionClick(option.id, option.sectionId)}
                                style={{ '--option-color': option.color }}
                            >
                                <div className="option-icon" style={{ background: `${option.color}15`, color: option.color }}>
                                    {option.icon}
                                </div>
                                <h3 className="option-title">{option.title}</h3>
                                <p className="option-description">{option.description}</p>
                                <div className="option-status">
                                    {selectedOption === option.id ? (
                                        <span className="status-active">
                                            <i className="bi bi-check-circle-fill"></i> Selected
                                        </span>
                                    ) : (
                                        <span className="status-inactive">Select →</span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product_Option