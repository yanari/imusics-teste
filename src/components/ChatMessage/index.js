import React from 'react';
import parse from 'html-react-parser';
import { useIntl } from 'react-intl';

import {
  StyledChatMessage,
  StyledMessages,
  StyledFlex,
  StyledParagraph,
  StyledComment,
  StyledAttachment,
} from './styles';

import Avatar from '../Avatar';

const ChatMessage = ({ interaction }) => {
  const {
    comments,
    attachments,
    dateCreation,
    person,
    propertiesChanges,
    isNewInteraction,
  } = interaction;
  const { formatDate } = useIntl();
  return (
    <StyledChatMessage isNewInteraction={isNewInteraction}>
      <StyledFlex>
        <StyledMessages>
          {comments.length > 0 && comments.map(comment => (
            <StyledComment as={comment.type === 2 ? 'div' : null} key={comment.content}>
              {parse(comment.contentHtml)}
            </StyledComment>
          ))}
          {attachments.length > 0 && attachments.map(attachment => (
            <a key={attachment.name} href={attachment.url} target="_blank" rel="noopener noreferrer">
              <StyledAttachment/>
            </a>
          ))}
        </StyledMessages>
        <Avatar
          avatarName={person.avatarName}
          name={person.name}
          thumbUrl={person.thumbUrl}
          invisible={!isNewInteraction}
        />
      </StyledFlex>
      {(isNewInteraction || propertiesChanges.status) && (
        <StyledParagraph>
          {propertiesChanges.status && <>Mudou o status para: <b>{propertiesChanges.status}</b> | </>}
          {isNewInteraction && formatDate(dateCreation, { minute: 'numeric', hour: 'numeric'})}
        </StyledParagraph>
      )}
    </StyledChatMessage>
  );
};

export default ChatMessage;
