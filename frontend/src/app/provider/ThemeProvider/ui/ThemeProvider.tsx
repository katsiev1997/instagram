import { LOCAL_STORAGE_THEME } from '@/shared/consts/localStorage';
import { Theme } from '@/shared/consts/theme';
import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface IThemeValues {
  theme?: Theme;
  setTheme?: (theme?: Theme) => void;
}

interface IThemeContext {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeValues>({});

export const ThemeProvider: FC<IThemeContext> = ({ children }) => {
  const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as Theme;

  const initialState = fallbackTheme || Theme.DARK;

  const [theme, setTheme] = useState<Theme>(initialState);

  const defaultTheme = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem(LOCAL_STORAGE_THEME, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
