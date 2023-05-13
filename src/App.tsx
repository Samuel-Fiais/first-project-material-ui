import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { LateralMenu } from './shared/components';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <LateralMenu>
          <AppRoutes />
        </LateralMenu>
      </BrowserRouter>
    </AppThemeProvider>
  );
};