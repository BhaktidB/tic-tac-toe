import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Quotes from "./components/Quotes";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Quotes />
    <App />
  </React.StrictMode>,
)
