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
import MonoAlphabeticalSubstitutionCipher from './pages/MonoAlphabeticalSubstitutionCipher';
import VigenereCipher from "./pages/VigenereCipher";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="shift-cipher" element={<ShiftCipher />}/>
          <Route path="mono-alphabetical-substitution-cipher" element={<MonoAlphabeticalSubstitutionCipher />}/>
          <Route path="vigenere-cipher" element={<VigenereCipher />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
