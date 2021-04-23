
import { Provider } from 'react-redux'
// import { useStore } from '../store'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps } : AppProps) {
    return (
            <Component {...pageProps} />
    )
}