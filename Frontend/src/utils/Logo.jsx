import { useState, useEffect } from 'react';

const Logo = ({ size = 150, className = '' }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'light';
    });
  
    useEffect(() => {
        const checkTheme = () => {
            const dataTheme = document.documentElement.getAttribute('data-theme');
            const activeTheme = dataTheme === 'dark' ? 'dark' : 'light';
            setTheme(activeTheme);
        };
        
        checkTheme();
        
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
        
        return () => observer.disconnect();
    }, []);
  
    // Theme-aware colors
    const colors = theme === 'dark' 
        ? { border: '#FFFFFF', inner: '#e0e0e0', stroke: '#4a4a4a', core: '#1a1a1a' }
        : { border: '#1a1a1a', inner: '#231F20', stroke: '#B3B3B3', core: '#FFFFFF' };
  
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ display: 'block' }}
        >
            {/* --- Top Left Sharp "Open Tag" Shape < --- */}
            {/* Outer border */}
            <path
                d="M 130,25 L 60,25 L 30,55 L 60,85 L 110,85 L 90,65 L 70,65 L 55,55 L 70,45 L 115,45 Z"
                fill="none"
                stroke={colors.border}
                strokeWidth="6"
                strokeLinejoin="miter"
                strokeLinecap="square"
            />
            {/* Inner sharp layer */}
            <path
                d="M 127,28 L 63,28 L 36,55 L 63,82 L 107,82 L 89,64 L 72,64 L 58,55 L 72,48 L 112,48 Z"
                fill={colors.inner}
                stroke="none"
            />

            {/* --- Bottom Right Sharp "Close Tag" Shape > --- */}
            {/* Outer border */}
            <path
                d="M 70,175 L 140,175 L 170,145 L 140,115 L 90,115 L 110,135 L 130,135 L 145,145 L 130,155 L 85,155 Z"
                fill="none"
                stroke={colors.border}
                strokeWidth="6"
                strokeLinejoin="miter"
                strokeLinecap="square"
            />
            {/* Inner sharp layer */}
            <path
                d="M 73,172 L 137,172 L 164,145 L 137,118 L 93,118 L 111,136 L 128,136 L 142,145 L 128,152 L 88,152 Z"
                fill={colors.inner}
                stroke="none"
            />

            {/* --- Central "S" Curve / Slash --- */}
            {/* Outer Grey Ribbon */}
            <path
                d="M 35,160 C 35,95 165,105 165,40"
                stroke={colors.stroke}
                strokeWidth="16"
                strokeLinecap="round"
                fill="none"
            />
            {/* Inner White Core for the Hollow Look */}
            <path
                d="M 35,160 C 35,95 165,105 165,40"
                stroke={colors.core}
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    );
};

export default Logo;



// =============== USAGE EXAMPLE ===============
    // <div style={{ padding: '20px' }}>
    //      {/* Default size (150px) */}
    //      <Logo />

    //      {/* Small Navbar size */}
    //      <Logo size={30} />

    //      {/* Large Hero Section size */}
    //      <Logo size={300} />
    // </div>
