import * as React from 'react';
import * as Styled from './notificationStyle';

const Notification = ({ alertMessage }) => {
  return (
    <>
      <Styled.ClosureAlertContainer>
        <Styled.ClosureAlert> {alertMessage}</Styled.ClosureAlert>
      </Styled.ClosureAlertContainer>
    </>
  );
};

export default Notification;
