import Nav from 'components/Nav'
import Footer from 'components/Footer'
import { ThemeProvider } from 'emotion-theming'
import { theme } from 'styles/theme'
import 'styles/index.css'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
// import Navigation from 'components/Navigation'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
    return (
        <> 
            <ThemeProvider theme={theme}>
                <div id="outer-container">
                    {/* <Navigation pageWrapId={"page-wrap"} outerContainerId={"outer-container"}/> */}
                    <Nav/>
                    <div id="page-wrap">
                        <Component {...pageProps} />
                    </div>
                </div>
                <Footer/>
            </ThemeProvider>
        </>
        )
}

export default MyApp
