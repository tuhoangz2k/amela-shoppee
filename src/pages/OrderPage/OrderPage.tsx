import React from 'react';
import { OrderPageWrap, Wrapper, TabsStyled } from './OrderPage.styled';
import AccountNavComp from 'components/AccountNavComp/AccountNavComp';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import type { TabsProps } from 'antd';
import {
  Container,
  WrapperAccountNavComp,
  ProfileContent,
} from 'pages/ProfilePage/ProfilePage.styled';
import NoOrder from 'components/NoOrder/NoOrder';
import OrderComp from './components/OrderComp/OrderComp';
import orderApi from 'api/orderApi';
type Props = {};

const OrderPage = (props: Props) => {
  const user: any = useQueryClient().getQueryData(['user']);

  const orderList = useQuery({ queryKey: ['orders'], queryFn: orderApi.orderList });
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `All`,
      children: <OrderComp data={orderList.data?.data?.orders} />,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: <NoOrder />,
    },
    {
      key: '3',
      label: `To Ship`,
      children: <NoOrder />,
    },
    {
      key: '4',
      label: `To Receive`,
      children: <NoOrder />,
    },
    {
      key: '5',
      label: `Completed`,
      children: <NoOrder />,
    },
  ];
  return (
    <OrderPageWrap>
      <Container>
        <WrapperAccountNavComp>
          <AccountNavComp user={user?.data} />
        </WrapperAccountNavComp>
        <ProfileContent>
          <Wrapper>
            <TabsStyled defaultActiveKey="1" items={items} />
          </Wrapper>
        </ProfileContent>
      </Container>
    </OrderPageWrap>
  );
};

export default OrderPage;
