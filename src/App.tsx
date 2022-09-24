import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as ThemeProvider } from './contexts/ThemeContext';

import AppRoutes from './routes/AppRoutes';
import useLocalStorage from './hooks/useLocalStorage';
import GlobalStyle from './styles/GlobalStyle';

import Nav from './components/Nav'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Nav />
      <AppRoutes />
    </ ThemeProvider>
  )
}

export default App
