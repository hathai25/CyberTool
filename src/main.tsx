import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import ShiftCipher from './pages/ShiftCipher';
import VirgenereCipher from './pages/VirgenereCipher';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shift-cipher" element={<ShiftCipher />}/>
          <Route path="virgenere-cipher" element={<VirgenereCipher />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
