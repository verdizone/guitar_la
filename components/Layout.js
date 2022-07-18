import Header from './Header'
import Head from 'next/head'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>
                GuitarLA - {pagina}
            </title>
            <meta name='description' content='Sistio WEB de venta de guitarras.'/>
        </Head>
        <Header />
        {children}
        <h1>Desde el Layout</h1>
    </div>
  )
}

export default Layout