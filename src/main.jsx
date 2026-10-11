import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import SiteContextProvider from './context/SiteContext.jsx';
import NavBar from './components/NavBar.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/int-cov-front'>
    <SiteContextProvider>
      <App/>
    </SiteContextProvider>
  </BrowserRouter>,
)
