import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './context/themeContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
import { NotifContextProvider } from './context/notifContext.jsx'
<<<<<<< HEAD
=======
import { DarkModeProvider } from './context/darkModeContext';
>>>>>>> 2011bf0 (add darkmode, upcoming-biils, loaderAnimation)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <NotifContextProvider>
        <ThemeContextProvider>
<<<<<<< HEAD
          <App />
=======
        <DarkModeProvider>
          <App />
        </DarkModeProvider>
>>>>>>> 2011bf0 (add darkmode, upcoming-biils, loaderAnimation)
        </ThemeContextProvider>
      </NotifContextProvider>
    </AuthContextProvider> 
  </StrictMode>,
)