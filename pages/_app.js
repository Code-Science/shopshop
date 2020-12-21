import '../styles/reset.css';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import { Provider } from 'next-auth/client';
import { StateProvider } from '../store/StateProvider';
import { initialState, reducer } from '../store/reducer';

function MyApp({ Component, pageProps }) {
  return (
    // Pass session around in all components by wrapping with provider
    <Provider session={pageProps.session}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
      </StateProvider>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.objectOf(PropTypes.any),
};

export default MyApp;
