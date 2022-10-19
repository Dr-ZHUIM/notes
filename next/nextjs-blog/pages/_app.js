import '../styles/global.scss';
import '../styles/normalize.scss';
import Layout from "../components/layout"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}