import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main from './assets/main/main.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main/>
  </StrictMode>,
)
