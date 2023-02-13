import React from 'react';
import { OrderDetailWrap } from './OrderDetail.styled';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import orderApi from 'api/orderApi';

type Props = {};

const OrderDetail = (props: Props) => {
  const id = useParams()?.id;
  const orderDetailQuery = useQuery({
    queryKey: ['orderdetail', id],
    queryFn: (context) => orderApi.orderDetail(context.queryKey[1] as string),
  });
  return <OrderDetailWrap>Order</OrderDetailWrap>;
};

export default OrderDetail;
