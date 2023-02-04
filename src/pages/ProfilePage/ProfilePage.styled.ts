import styled from 'styled-components';
import { Typography } from 'antd';
import { breakPonits, colors } from 'constants/index';
import { Button, Form, Input } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export const Wrapper = styled.div`
  display: flex;
`;
export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  font-size: 16px;
  padding: 1.5em 0;

  @media (min-width: ${breakPonits.lg}px) {
    width: 1024px;
  }

  @media (max-width: ${breakPonits.lg}px) and (min-width: ${breakPonits.md}px) {
    width: 740px;
  }
  @media (max-width: ${breakPonits.md}px) {
    width: 100%;
  }
  @media (max-width: ${breakPonits.sm}px) {
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const WrapperAccountNavComp = styled.div`
  width: 13.4375em;
  font-weight: 600;
  @media (max-width: ${breakPonits.sm}px) {
    width: 100%;
  }
`;

export const ProfileContent = styled.div`
  flex: 1;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;
export const ProfileTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 92px;
  border: 1px solid ${colors.borderColor};
`;
export const TypographyStyled = styled(Typography)``;
export const TitleProfile = styled(Title)`
  font-weight: 700;
`;
export const ParagraphProfile = styled(Paragraph)`
  font-size: 16px;
  font-weight: 500;
`;

export const Profilebody = styled.div`
  flex: 1;
  border: 1px solid ${colors.borderColor};
  padding: 1.5em 0;
`;
export const InputStyled = styled(Input)``;

export const ProfileForm = styled(Form)`
  max-width: 43.75em;
  margin-left: auto;
  margin-right: auto;
`;
export const ButtonStyled = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  width: 11.25em;
  border-radius: 40px;

  @media (max-width: ${breakPonits.sm}px) {
    width: 100%;
    height: 2.625em;
  }
  @media (min-width: ${breakPonits.sm}px) and (max-width: ${breakPonits.lg}px) {
    width: 12.5em;
    height: 2.5em;
  }
`;

export const ButtonWrapperStyled = styled.div`
  display: flex;
`;
