import React from 'react';
import {
  PaymentWrap,
  FormStyled,
  ButtonStyled,
  InputStyled,
  TotalWrap,
  Total,
  TitleTotal,
} from './PaymentPage.styled';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Navigate } from 'react-router-dom';
import { routePaths } from 'constants/index';
import { useSelector } from 'react-redux';
import { newProductList, cartItemTotal } from 'app/cartSelector';
import orderApi from 'api/orderApi';
import { IPayment } from 'models';
import { removeCartStore } from 'utils';
type Props = {};

const PaymentPage = (props: Props) => {
  const user: any = useQueryClient().getQueryData(['user']);
  const cartProductCheck = useSelector(newProductList);
  const total = useSelector(cartItemTotal);
  const paymentMutation = useMutation({
    mutationFn: (body: IPayment) => orderApi.payment(body),
    onSuccess(data, variables, context) {
      removeCartStore();
    },
  });
  const isLogin = !!user;
  console.log(user?.data);
  const onFinish = (values: any) => {
    values.total_price = total;
    values.obj = cartProductCheck;
    paymentMutation.mutate(values);
  };
  console.log(user?.data?.user?.name);
  if (!isLogin) return <Navigate to={routePaths.home} />;
  return (
    <PaymentWrap>
      <FormStyled
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <FormStyled.Item
          label="name"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          initialValue={user?.data?.user?.name}
        >
          <InputStyled />
        </FormStyled.Item>

        <FormStyled.Item
          label="Phone"
          name="phone"
          rules={[{ required: true, message: 'Please input your phone' }]}
        >
          <InputStyled />
        </FormStyled.Item>
        <FormStyled.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please input your address!' }]}
        >
          <InputStyled />
        </FormStyled.Item>
        <FormStyled.Item wrapperCol={{ offset: 8, span: 16 }}>
          <ButtonStyled type="primary" htmlType="submit">
            Submit
          </ButtonStyled>
        </FormStyled.Item>
      </FormStyled>

      <TotalWrap>
        <TitleTotal>Total:</TitleTotal>
        <Total>${total}</Total>
      </TotalWrap>
    </PaymentWrap>
  );
};

export default PaymentPage;
