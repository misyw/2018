import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/home';
import RouterMonitor from './router'

import { AppContainer } from 'react-hot-loader'


ReactDOM.render(
  <RouterMonitor/>,
  document.getElementById('root'),
)
