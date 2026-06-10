import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './assets/components/Context.jsx';
import { AuthContextProvider } from './assets/components/auth-store';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthContextProvider>
  </StrictMode>,
)
