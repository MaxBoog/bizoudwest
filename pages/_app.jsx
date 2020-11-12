import Nav from 'components/Nav'
import Footer from 'components/Footer'
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'styles/theme'
import 'styles/index.css'


function MyApp({ Component, pageProps }) {
    return (
        <> 
            <ThemeProvider theme={theme}>
                <Nav/>
                <Component {...pageProps} />
                <Footer/>
            </ThemeProvider>
        </>
        )
}

export default MyApp
