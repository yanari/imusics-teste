import React, { Component } from 'react';

import { octadeskApi, awsApi } from '../../../api';
import { mapNewInteractions } from '../../../utils';

import { StyledLoadingIcon } from '../../../styles';
import {
  StyledTicketChat,
  StyledChatMessagesList,
} from './styles';

import ChatMessage from '../../../components/ChatMessage';
import ChatArea from '../../../components/ChatArea';

class TicketChat extends Component {
  state = {
    interactions: null,
    height: null,
    file: null,
    loading: true,
  };

  componentDidMount() {
    this.getTicketInteractions();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.interactions !== this.state.interactions) {
      const distanceToTop = this.container.getBoundingClientRect().top;
      this.setState({
        height: window.innerHeight - distanceToTop,
      });
    }
  }

  getTicketInteractions = async () => {
    const response = await octadeskApi.getTicketInteractions(this.props.ticketNumber);
    const humanInteractions = response.filter((interaction) => interaction.isHumanInteraction);
    const interactions = mapNewInteractions(humanInteractions);
    this.setState({
      interactions,
      loading: false,
    });
  };

  handleUpdateTicket = async (message) => {
    this.setState({loading: true});
    const response = await octadeskApi.updateTicket(
      this.props.ticketNumber,
      message,
      this.state.file,
    );
    if (response) {
      this.getTicketInteractions();
    }
  };

  handleUploadFile = async (targetFile) => {
    this.setState({loading: true});
    const fileUrl = await awsApi.uploadFile(targetFile.name, targetFile);
    this.setState({
      file: fileUrl,
      loading: false,
    });
  };

  render() {
    const {
      interactions,
      height,
    } = this.state;

    if (interactions === null || this.state.loading) return <StyledLoadingIcon/>;
    return (
      <StyledTicketChat
        height={height}
        ref={el => (this.container = el)}
      >
        <StyledChatMessagesList>
          {interactions.map(interaction => {
            return (
              <ChatMessage
                key={interaction.id}
                interaction={interaction}
              />
            )
          })}
        </StyledChatMessagesList>
        <ChatArea
          handleUpload={this.handleUploadFile}
          handleSend={this.handleUpdateTicket}
        />
      </StyledTicketChat>
    );
  }
}

export default TicketChat;
