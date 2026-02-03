import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Header from './layout/Header.jsx'
// import Sidebar from './layout/Sidebar.jsx'
// import Mainlayout from './layout/Mainlayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
