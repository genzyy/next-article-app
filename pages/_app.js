import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

//We can wrap the component above in another component
// and so we can also add the components that we want to
// render in every page.

export default MyApp;
