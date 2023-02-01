import styled from 'styled-components';
import { Input } from 'antd';
import { breakPonits } from 'constants/index';
const { Search } = Input;
export const SearchInputWrap = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px;
  animation: FadeIn 0.5s linear;
  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: ${breakPonits.sm}px) {
    padding: 0 12px;
  }
`;

export const SearchStyled = styled(Search)`
  font-size: 20px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  & .ant-input-affix-wrapper {
    border: none !important;
    height: 44px !important;
  }
  & .ant-input-group-addon {
    width: 40px;
  }
  & .ant-input-group-addon .ant-input-search-button {
    width: 100%;
    height: 44px;
    border: none;
    font-size: 20px !important;
    color: #444 !important;
  }
`;
export const CategoriesWrap = styled.div`
  & .ant-select-selector {
    height: 44px !important;
    border: none !important;
  }
  & .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
`;

export const ButtonClose = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 12px;
`;
