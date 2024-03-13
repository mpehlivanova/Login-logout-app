import React from 'react';
import Routing from './layout/routing.tsx'
import Layout from './layout/layout.tsx';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

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
