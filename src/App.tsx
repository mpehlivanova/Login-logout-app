import { CssBaseline, responsiveFontSizes, ThemeProvider } from '@mui/material';

import { AuthManager } from './auth/auth-manager';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import Layout from './layout/layout';
import Routing from './layout/routing';
import theme from './theme/theme';

export const authManager = AuthManager();
authManager.init();

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <CssBaseline />
        <ThemeProvider theme={responsiveFontSizes(theme)}>
          <Layout>
            <Routing />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
