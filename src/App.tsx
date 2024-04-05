import React from 'react';
import Routing from './layout/routing'
import Layout from './layout/layout';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { AuthManager } from './auth/auth-manager';

export const authManager = AuthManager();
authManager.init()

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Layout>
          <Routing />
        </Layout>
      </UserProvider>
    </AuthProvider>
  )
}

export default App;
