import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store'
import { Provider } from 'react-redux'
import {addLocaleData ,IntlProvider}  from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import flattenMessages from './flattenMessages';
import messages from './messages';

import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

addLocaleData([...en, ...es]);

let locale;
const browserLanguage = window.navigator.language
if(/^es/.test(browserLanguage)) locale = 'es';
else if(/^en/.test(browserLanguage)) locale = 'en';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <IntlProvider
        locale={locale}
        messages={flattenMessages(messages[locale])}
      >
        <App />
      </IntlProvider>
    </Provider>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
