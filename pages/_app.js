import '../styles/globals.css'
import '../styles/globalvanila.css'
import {AppProvider} from '../components/State'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
          <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppProvider>
  )
}

export default MyApp
