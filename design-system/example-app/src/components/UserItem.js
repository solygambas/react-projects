import React from "react";
import styled from "styled-components";

import { Avatar } from "@solygambas/learnstorybook-design-system";

const Container = styled.div`
  background: #eee;
  margin-bottom: 1em;
  padding: 0.5em;
`;

const Name = styled.span`
  color: #333;
  font-size: 16px;
`;

const UserItem = ({ user: { name, avatarUrl } }) => (
  <Container>
    <Avatar username={name} src={avatarUrl} />
    <Name>{name}</Name>
  </Container>
);

export default UserItem;
