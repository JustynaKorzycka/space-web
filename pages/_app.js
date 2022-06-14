import { useEffect, useState } from 'react';
import {ThemeProvider} from 'styled-components';
import Layout from '../components/Layout/Layout';
import {GlobalStyles, lightTheme} from '../styles/theme.config';

function MyApp({ Component, pageProps }) {

  const [width, setInnerWidth] = useState(600 || window.innerWidth);

  useEffect(() => {
    setInnerWidth(window.innerWidth)
    window.addEventListener('resize', ()=>setInnerWidth(window.innerWidth))
  }, [width])
  

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout  isMobile={width}>
        <Component {...pageProps}   isMobile={width}/>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
