import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider as ThemeProvider } from './contexts/ThemeContext';

import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styles/GlobalStyle';

import PageWithNav from './layouts/PageWithNav';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />

      <PageWithNav>
        <AppRoutes />
      </PageWithNav>
    </ ThemeProvider>
  )
}

export default App
