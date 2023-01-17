import styled from 'styled-components';
import { ArrowLeftOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { breakPonits } from 'constants/index';

type headerLabelProps = {
  size?: number;
  weight?: number;
};

export const WrapHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5.125em;
  padding: 0 2.5em;
  background-color: white;
  @media (max-width: ${breakPonits.sm}px) {
    padding-left: 1.25em;
    padding-right: 1.25em;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const HeaderLabel = styled.p`
  font-size: ${(props: headerLabelProps) => props.size || 16}px;
  font-weight: ${(props: headerLabelProps) => props.weight};
`;
export const HelpButton = styled.a`
  color: #ee4d2d;
  cursor: pointer;
  font-weight: 500;
`;
export const GoHomeArrow = styled(ArrowLeftOutlined)`
  color: #ee4d2d;
  font-size: 24px;
`;
export const QuestionCircleIcon = styled(QuestionCircleOutlined)`
  color: #ee4d2d;
  font-size: 24px;
`;
