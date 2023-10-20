import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'



export default function Layout({children}){
    return(
    <>
    <Head><link rel="shortcut icon" href="./images/favicon.ico"/>
    <title>PokeNextJS</title>
    </Head>
      <Navbar/>
      <main className='main-container'>{children}   
      </main>
      
     <Footer/>
    </>
    )
}
