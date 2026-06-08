import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './global_components/Navbar'
import Footer from './global_components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        {/* Your page content will go here */}
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App