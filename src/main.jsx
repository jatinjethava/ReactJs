import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Contex from './Components/ContexApi/Contex/contex.jsx'

createRoot(document.getElementById('root')).render(
    <Contex>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Contex>
);
