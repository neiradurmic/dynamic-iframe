import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {PollWidgetPage} from './pages/PollWidgetPage.jsx'
import {SkiApartmentDemo} from './pages/SkiApartmentDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/poll-widget" element={<PollWidgetPage />} />
        <Route path="/demo" element={<SkiApartmentDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
