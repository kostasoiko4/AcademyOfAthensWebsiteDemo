import React from 'react';
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import './index.css';

// css
import 'bootstrap/dist/css/bootstrap.min.css';

// redux
import { Provider } from 'react-redux';
import { store } from './redux/store'

import Router from './pages/RouterPage';

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <HashRouter>
      <React.Suspense fallback="loading">
        <Router />
      </React.Suspense>      
    </HashRouter>
  </Provider>
);

