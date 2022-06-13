import {ThemeProvider} from 'styled-components';
import Layout from '../components/Layout/Layout';
import {GlobalStyles, lightTheme} from '../styles/theme.config';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
