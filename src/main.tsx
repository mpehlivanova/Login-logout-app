import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { isAuthPopup } from './auth/auth-manager';

if (!isAuthPopup()) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
