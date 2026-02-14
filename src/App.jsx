import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedArticles from './components/FeaturedArticles'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import './styles/App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // 检查用户偏好
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light')
  }

  return (
    <div className="app">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <FeaturedArticles />
        <TechStack />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
