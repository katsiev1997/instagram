import { classNames } from '@/shared/lib/classNames';
import { Dropdown, type DropDownProps, type MenuProps } from 'antd';
import { type FC, type ReactNode } from 'react';

interface IDropDown extends DropDownProps {
  items: MenuProps['items'];
  children: ReactNode;
  className?: string;
  onClick?: (value?: any) => void;
}

export const DropDown: FC<IDropDown> = (props) => {
  const { items, children, className, onClick, ...rest } = props;
  return (
    <Dropdown
      menu={{ items, onClick }}
      trigger={['click']}
      className={classNames('dropdown', {}, [])}
      {...rest}
    >
      <a
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {children}
      </a>
    </Dropdown>
  );
};
