import styled from 'styled-components';
import { Tabs } from 'antd';
export const OrderPageWrap = styled.div``;
export const Wrapper = styled.div`
  border: 1px solid #d1d7dc;
  height: 100%;
  overflow-x: hidden;
`;
export const TabsStyled = styled(Tabs)`
  height: 100%;
  & .ant-tabs-content .ant-tabs-content-top {
    height: 100% !important;
  }
  & .ant-tabs-tabpane {
    height: 100%;
  }
`;
