import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/structure.css'
import '../styles/variables.css'

function App({ Component, pageProps }) {
  useEffect(() => {
    const defineScrollbarWidthCssVariable = () => {
      const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--scrollbar-width', `${scrollWidth}px`);  
    }

    defineScrollbarWidthCssVariable();
  }, [])

  return <Component {...pageProps} />
}

export default App
