import React from 'react';
import {
  NotFoundWrap,
  Title,
  Light,
  Container,
  ContainerTitle,
  Text,
  LinkStyled,
} from './NotFoundPage.styled';
import { routePaths } from 'constants/index';

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <NotFoundWrap>
      <Container>
        <ContainerTitle>
          <Title>
            4<Light>0</Light>4
          </Title>
        </ContainerTitle>
        <Text>
          The page you are looking for might have been removed had its name changed or is
          temporarily unavailable.
        </Text>
        <LinkStyled to={routePaths.home}>Home Page</LinkStyled>
      </Container>
    </NotFoundWrap>
  );
};

export default NotFoundPage;
