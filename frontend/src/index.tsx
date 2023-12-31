import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import { ThemeProvider } from './app/provider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
