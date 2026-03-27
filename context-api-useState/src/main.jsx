import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TheamContext from './context.jsx/TheamContext.jsx'

createRoot(document.getElementById('root')).render(
  <TheamContext >
    <App />
  </TheamContext>
)
