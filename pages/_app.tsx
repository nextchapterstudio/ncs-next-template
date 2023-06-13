import type { AppProps } from 'next/app'
import localFont from 'next/font/local';
import '../styles/globals.scss'

const Albra = localFont({ src :[
  {
    path:'../styles/fonts/Albra-Regular.woff',
    weight: '400',
    style: 'normal',
  },
  {
    path:'../styles/fonts/Albra-Text-Light.woff',
    weight: '300',
    style: 'normal',
  }
]})

const Albra_Text = localFont({src:[
  {
    path:'../styles/fonts/Albra-Text-Regular.woff',
    weight: '400',
    style: 'normal',
  }
]})

function MyApp({ Component, pageProps }: AppProps) { 
  return (
    <>
      <style jsx global>{`
        html {
          --Albra-Regular: ${Albra.style.fontFamily};
          --Albra-Text: ${Albra_Text.style.fontFamily};
        }
      `}</style>
      <main >
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
