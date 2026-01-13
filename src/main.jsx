import React from 'react'
import ReactDOM from 'react-dom/client'

import { registerCustomServiceWorker } from './pwa-register'
import App from './App'


registerCustomServiceWorker();

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
