// Lines 1-3 are regular javascript 
import React from 'react'                
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // Regular javascript doesn't import css like this

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
