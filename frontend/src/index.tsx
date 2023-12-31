import ReactDOM from 'react-dom/client';
import App from './app/App';
import './app/styles/index.scss';
import { ThemeProvider } from './app/provider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
