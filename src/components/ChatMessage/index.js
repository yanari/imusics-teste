import React from 'react';
import parse from 'html-react-parser';

import {
  StyledChatMessage,
  StyledMessages,
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
  } = interaction;
  console.log(interaction);
  return (
    <StyledChatMessage>
      <StyledMessages>
        {comments.length > 0 && comments.map(comment => (
          <StyledComment>{parse(comment.contentHtml)}</StyledComment>
        ))}
        {attachments.length > 0 && attachments.map(attachment => (
          <StyledAttachment key={attachment.name}>{console.log(attachment)}</StyledAttachment>
        ))}
      </StyledMessages>
      <Avatar
        avatarName={person.avatarName}
        name={person.name}
        thumbUrl={person.thumbUrl}
      />
    </StyledChatMessage>
  );
};

export default ChatMessage;
