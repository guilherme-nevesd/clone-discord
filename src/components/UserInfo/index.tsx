import React, { Profiler } from 'react';

import { Container, Profile, Avatar, UserDate, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

export const UserInfo: React.FC = () => {
  return(
    <Container>
      <Profile>
        <Avatar />
        <UserDate>
          <strong>Guilherme Neves</strong>
          <span>#7777</span>
        </UserDate>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};
