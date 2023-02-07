import React from 'react';
import { Spacing } from './Header.styled';
import HeaderTopComp from './components/HeaderTopComp';
import HeaderBodyComp from './components/HeaderBodyComp';
import { useQuery } from '@tanstack/react-query';
import userApi from 'api/userApi';

type Props = {};

const Header = (props: Props) => {
  const user = useQuery({
    queryKey: ['user'],
    queryFn: userApi.getUser,
    retry: false,
    staleTime: 60 * 1000,
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <>
      <HeaderTopComp user={user.data?.data} refetchUser={user.refetch} />
      <HeaderBodyComp />
      <Spacing />
    </>
  );
};

export default Header;
