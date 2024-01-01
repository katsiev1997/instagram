import { type ChangeEvent, useState } from 'react';
import cls from './NavSearch.module.scss';
import { Icon } from '@/shared/ui';
import { Text } from '@/shared/ui/Text/Text';

export const NavSearch = () => {
  const [search, setSearch] = useState<string>('');

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  return (
    <div className={cls.search}>
      <input type='text' value={search} onChange={onChangeSearch} />
      {!search && (
        <div className={cls.text}>
          <Icon type='Search' />
          <Text color='gray' tag='span' size={14} weight={200}>
            Search
          </Text>
        </div>
      )}
    </div>
  );
};
