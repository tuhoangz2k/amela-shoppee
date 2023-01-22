import styled from 'styled-components';
import { Input, Button } from 'antd';
type PropContentWrap = {
  span?: number;
  start: number;
};
export const FooterBodyWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding-bottom: 2.5em;
`;
export const ContentWrap = styled.div`
  grid-column: ${(props: PropContentWrap) => props.start} / span
    ${(props: PropContentWrap) => props.span || 1};
  display: flex;
  flex-direction: column;
  color: #acacac;
`;
export const ContentLabel = styled.span`
  color: white;
  font-weight: 600;
  margin-bottom: 1.875em;
`;
export const FooterInput = styled(Input)`
  display: block;
  height: 44px;
  border-radius: 40px;
  margin-bottom: 1.5em;
`;

export const FooterButton = styled(Button)`
  background-color: #0e5ba4;
  font-size: 12px;
  width: 11.16em !important;
  height: 3.5em;
  border: none;
  color: white;
`;
