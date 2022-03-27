import '../styles/globals.css'
import Navbar from '../components/Navbar'
import ContextProvider from '../contexts/ContextProvider'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
