import {
  getSearchLoading,
  getSearchUsers,
  getUsers,
  profileActions,
} from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { HStack, Icon, UserCard, VStack } from '@/shared/ui';
import { Text } from '@/shared/ui/Text/Text';
import { Spin } from 'antd';
import { debounce } from 'lodash-es';
import { useCallback, useMemo, useState, type ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import cls from './NavSearch.module.scss';

export const NavSearch = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const searchLoading = useSelector(getSearchLoading);
  const searchUsers = useSelector(getSearchUsers);

  // useEffect(() => {
  //   if (search) {
  //     dispatch(getUsers({ search }));
  //   }
  // }, [search]);

  const onSearchUsers = useMemo(
    () =>
      debounce(async (query) => {
        dispatch(getUsers({ search: query }));
      }, 500),
    []
  );

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
    onSearchUsers(value);
  };

  const onClearSearch = useCallback(() => {
    setSearch('');
    dispatch(profileActions.setSearchUsers());
  }, []);
  return (
    <div className={cls.search}>
      <input type='text' value={search} onChange={onChangeSearch} />
      {!search ? (
        <div className={cls.text}>
          <Icon type='Search' />
          <Text color='gray' tag='span' size={14} weight={200}>
            Search
          </Text>
        </div>
      ) : (
        <span className={cls.close} onClick={onClearSearch}>
          &#215;
        </span>
      )}
      {search && (
        <HStack className={cls.list} justify='start' align='center'>
          {searchUsers.length > 0 ? (
            <VStack gap={8}>
              {searchUsers.map((user) => (
                <UserCard
                  onClick={onClearSearch}
                  key={user._id}
                  id={user._id}
                  title={`@${user.username}`}
                  content={user.username}
                />
              ))}
            </VStack>
          ) : search && !searchLoading ? (
            <Text>Ничего не найдено</Text>
          ) : (
            <Spin />
          )}
        </HStack>
      )}
    </div>
  );
};
