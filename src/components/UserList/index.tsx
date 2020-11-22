import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps{
  nickName: string;
  isBot?: boolean;
}

export const UserRow: React.FC<UserProps> = ({ nickName, isBot }) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{ nickName }</strong>
      { isBot && <span>Bot</span> }
    </User>
  );
};

export const UserList: React.FC = () => {
  return(
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickName='Guilherme Neves' />

      <Role>Offline - 3</Role>
      <UserRow nickName='Fulano de Tal' isBot />
    </Container>
  );
};
