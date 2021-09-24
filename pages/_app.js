import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';

function MyApp({ Component, pageProps }) {
  // Para corrigir o erro do material UI
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
        <PayPalScriptProvider deferLoading={true}>
          <Component {...pageProps} />;
        </PayPalScriptProvider>
      </StoreProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
