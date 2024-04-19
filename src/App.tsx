import React from 'react';
import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';
import Routing from './layout/routing'
import Layout from './layout/layout';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { AuthManager } from './auth/auth-manager';
import theme from './theme/theme'

export const authManager = AuthManager();
authManager.init()

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <CssBaseline />
          <Layout>
            <Routing />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
