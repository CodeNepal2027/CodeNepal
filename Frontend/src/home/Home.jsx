import { useEffect } from 'react'
import {
    Home_Hero, 
    Home_Trusted, 
    Home_Features, 
    Home_Services, 
    Home_Process, 
    Home_Testimonials, 
    Home_CTA

} from './Home_Import'
import "./assets/css/Home.css"


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Home_Hero />
            <Home_Trusted />
            <Home_Features />
            <Home_Services />
            <Home_Process />
            <Home_Testimonials />
            <Home_CTA />
        </>
    )
}

export default Home