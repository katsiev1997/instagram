import { Theme } from '@/shared/consts/theme';
import { useTheme } from '@/shared/hooks/useTheme';
import { Icon } from '@/shared/ui';
import cls from './SwitchButton.module.scss';

export const SwitchButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={theme === Theme.DARK ? cls.dark : ''}
      onClick={() => { toggleTheme(); }}
    >
      {theme === Theme.DARK
        ? (
        <Icon type='Light' />
          )
        : (
        <Icon className={theme} type='Dark' />
          )}
    </div>
  );
};
