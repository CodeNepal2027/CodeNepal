import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './global_components/Navbar'
import Footer from './global_components/Footer'

import { Home } from './home/Home_Import'


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default App