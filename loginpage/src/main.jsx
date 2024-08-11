import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min.js'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {AuthContextProvider} from './store/auth-context.jsx'

createRoot(document.getElementById('root')).render(
 <AuthContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
 </AuthContextProvider>,
)
