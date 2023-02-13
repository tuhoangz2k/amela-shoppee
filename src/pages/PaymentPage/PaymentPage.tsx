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
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { addressRule, phoneRule, routePaths } from 'constants/index';
import { useSelector } from 'react-redux';
import { newProductList, cartItemTotal } from 'app/cartSelector';
import orderApi from 'api/orderApi';
import { IPayment } from 'models';
import { removeCartStore } from 'utils';
import { useAppDispatch } from 'hooks/reduxHooks';
import { cartPayment } from 'pages/CartPage/cartSlice';
type Props = {};

const PaymentPage = (props: Props) => {
  const user: any = useQueryClient().getQueryData(['user']);
  const cartProductCheck = useSelector(newProductList);
  const total = useSelector(cartItemTotal);
  const navigated = useNavigate();
  const dispatch = useAppDispatch();
  const paymentMutation = useMutation({
    mutationFn: (body: IPayment) => orderApi.payment(body),
    onSuccess(data, variables, context) {
      removeCartStore();
      dispatch(cartPayment());
      navigated(routePaths.products);
      toast('payment successful', {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });
  const isLogin = !!user;
  const onFinish = (values: any) => {
    values.total_price = total;
    values.obj = cartProductCheck;
    paymentMutation.mutate(values);
  };

  if (!isLogin) return <Navigate to={routePaths.home} />;
  if (total === 0) return <Navigate to={routePaths.cart} />;
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
          required
          initialValue={user?.data?.user?.name}
        >
          <InputStyled />
        </FormStyled.Item>

        <FormStyled.Item
          label="Phone"
          name="phone"
          rules={phoneRule}
          initialValue={user?.data?.profile?.phone}
        >
          <InputStyled />
        </FormStyled.Item>
        <FormStyled.Item
          label="Address"
          name="address"
          rules={addressRule}
          initialValue={user?.data?.profile?.address}
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
