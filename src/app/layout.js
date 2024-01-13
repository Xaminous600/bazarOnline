import { Inter } from 'next/font/google'
import './globals.css'
import Header from './componentes/Header'
import { CartProvider } from './context/cartState'
import { FilterProvider } from './context/filterState'
import { Footer } from './componentes/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Bazar Online</title>
      </head>
      <body>
        <FilterProvider>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </FilterProvider>
      </body>
    </html>
  )
}
