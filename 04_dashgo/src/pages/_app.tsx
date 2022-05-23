import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { SiderbarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { theme } from '../styles/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SiderbarDrawerProvider>
        <Component {...pageProps} />
      </SiderbarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
