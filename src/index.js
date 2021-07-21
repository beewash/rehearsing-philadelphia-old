// /src/index.js
import 'modern-css-reset';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { persistQueryClient } from 'react-query/persistQueryClient-experimental';
// import { createLocalStoragePersistor } from 'react-query/createLocalStoragePersistor-experimental';
import Layout from './components/layout';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

// const localStoragePersistor = createLocalStoragePersistor()

// persistQueryClient({
//   queryClient,
//   persistor: localStoragePersistor,
// })

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();

reportWebVitals();