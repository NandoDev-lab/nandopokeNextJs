import { AppInitialProps } from 'next/app'
import '../styles/globals.css'
import Layout from "../components/layout"
export default function App({ Component , pageProps}:any) {
  return  (
    <Layout><Component {...pageProps}/></Layout>
  )
}
