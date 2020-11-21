import React from 'react';

import { ServerButton } from '../ServerButton'
import { Container, Separator } from './styles';

export const ServerList: React.FC = () => {
  return(
    <Container>
      <ServerButton isHome={true} />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications={true} />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
}