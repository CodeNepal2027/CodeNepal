import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import Logo from '../utils/Logo'
import './assets/css/Navbar.css'

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'system'
    })

    const services = [
        { name: 'GenAI Solutions', path: '/services/genai' },
        { name: 'Product Development', path: '/services/product-development' },
        { name: 'AI & Data', path: '/services/ai-data' },
        { name: 'DevOps & Cloud', path: '/services/devops-cloud' },
        { name: 'Staff Augmentation', path: '/services/staff-augmentation' },
        { name: 'Healthcare Technology', path: '/services/healthcare-tech' }
    ]

    const resources = [
        { name: 'Blog', path: '/resources/blog' },
        { name: 'Documentation', path: '/resources/docs' },
        { name: 'Tutorials', path: '/resources/tutorials' },
        { name: 'Webinars', path: '/resources/webinars' },
        { name: 'Case Studies', path: '/resources/case-studies' },
        { name: 'Community', path: '/resources/community' }
    ]

    const handleServiceClick = (service) => {
        setIsServicesOpen(false)
        setIsMobileMenuOpen(false)
        window.location.assign(service.path)
    }

    const handleResourceClick = (resource) => {
        setIsResourcesOpen(false)
        setIsMobileMenuOpen(false)
        window.location.assign(resource.path)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
        setIsServicesOpen(false)
        setIsResourcesOpen(false)
    }

    // Cycle through themes: light -> dark -> system
    const cycleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else if (theme === 'dark') {
            setTheme('system')
        } else {
            setTheme('light')
        }
    }

    // Get current icon based on theme
    const getThemeIcon = () => {
        switch(theme) {
            case 'light': return <FiSun />;
            case 'dark': return <FiMoon />;
            default: return <FiMonitor />;
        }
    }

    // Get current theme label
    const getThemeLabel = () => {
        switch(theme) {
            case 'light': return 'Light';
            case 'dark': return 'Dark';
            default: return 'System';
        }
    }

    // Theme management
    useEffect(() => {
        const root = document.documentElement
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        const activeTheme = theme === 'system' ? systemTheme : theme
        
        if (activeTheme === 'dark') {
            root.setAttribute('data-theme', 'dark')
        } else {
            root.setAttribute('data-theme', 'light')
        }
        
        localStorage.setItem('theme', theme)
    }, [theme])

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isServicesOpen && !event.target.closest('.services-dropdown')) {
                setIsServicesOpen(false)
            }
            if (isResourcesOpen && !event.target.closest('.resources-dropdown')) {
                setIsResourcesOpen(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isServicesOpen, isResourcesOpen])

    // Close mobile menu when window resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false)
                setIsServicesOpen(false)
                setIsResourcesOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'8px'}}>
                        <Logo size={30} /> CodeNepal
                    </Link>
                </div>

                {/* Hamburger Menu Button */}
                <button 
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Menu */}
                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    {/* Close Button for Mobile */}
                    <li className="mobile-close-btn">
                        <button onClick={closeMobileMenu} className="close-sidebar">
                            ✕
                        </button>
                    </li>

                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    </li>
                
                    <li className="nav-item services-dropdown">
                        <button 
                            className="nav-link dropdown-btn"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                            Services <span className="dropdown-arrow">{isServicesOpen ? '▲' : '▼'}</span>
                        </button>
                        <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                            {services.map((service, index) => (
                                <li key={index}>
                                    <button 
                                        className="dropdown-item"
                                        onClick={() => handleServiceClick(service)}
                                    >
                                        {service.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="nav-item">
                        <Link to="/aws" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link to="/join" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Join CodeNepal</Link>
                    </li>
                
                    <li className="nav-item resources-dropdown">
                        <button 
                            className="nav-link dropdown-btn"
                            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                        >
                            Resources <span className="dropdown-arrow">{isResourcesOpen ? '▲' : '▼'}</span>
                        </button>
                        <ul className={`dropdown-menu ${isResourcesOpen ? 'show' : ''}`}>
                            {resources.map((resource, index) => (
                                <li key={index}>
                                    <button 
                                        className="dropdown-item"
                                        onClick={() => handleResourceClick(resource)}
                                    >
                                        {resource.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About us</Link>
                    </li>

                    {/* Theme Toggle for Mobile - Single Button */}
                    <li className="nav-item mobile-theme-toggle">
                        <button className="theme-switch-btn" onClick={cycleTheme}>
                            {getThemeIcon()}
                            <span>{getThemeLabel()}</span>
                        </button>
                    </li>
                </ul>

                {/* Theme Toggle for Desktop - Single Button */}
                <div className="desktop-theme-toggle">
                    <button className="theme-switch-btn" onClick={cycleTheme}>
                        {getThemeIcon()}
                        <span>{getThemeLabel()}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-overlay" onClick={closeMobileMenu} />
            )}
        </nav>
    )
}

export default Navbar