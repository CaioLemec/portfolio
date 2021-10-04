import GlobalStyle from './styles/global';
import { CustomThemeProvider } from './hooks/theme';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <CustomThemeProvider>
    <GlobalStyle />
    <Router>
      <Home />
    </Router>
    </CustomThemeProvider>
  );
}

export default App;
