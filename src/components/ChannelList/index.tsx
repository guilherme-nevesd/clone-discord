import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import { ChannelButtom } from '../ChannelButton';

export const ChannelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButtom channelName="chat-livre" />
      <ChannelButtom channelName="trabalho" />
      <ChannelButtom channelName="lolzinho" />
      <ChannelButtom channelName="fortnite" />
    </Container>
  );
};
