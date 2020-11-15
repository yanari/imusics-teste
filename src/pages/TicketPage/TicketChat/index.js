import React, { Component } from 'react';

import { octadeskApi } from '../../../api';

import { StyledLoadingIcon } from '../../../styles';
import { StyledTicketChat } from './styles';

import ChatMessage from '../../../components/ChatMessage';
import ChatArea from '../../../components/ChatArea';

class TicketChat extends Component {
  state = {
    interactions: null,
    height: null,
  };

  componentDidMount() {
    const getInteractions = async () => {
      const response = await octadeskApi.getTicketInteractions(this.props.ticketNumber);
      const humanInteractions = response.filter((interaction) => {
        return interaction.isHumanInteraction;
      });
      this.setState({interactions: humanInteractions});
    };
    getInteractions();
  }

  componentDidUpdate(_, prevState) {
    if (prevState.interactions !== this.state.interactions) {
      const distanceToTop = this.container.getBoundingClientRect().top;
      this.setState({
        height: window.innerHeight - distanceToTop
      });
    }
  }

  render() {
    const {
      interactions,
      height,
    } = this.state;

    if (interactions === null) return <StyledLoadingIcon/>;
    return (
      <StyledTicketChat
        height={height}
        ref={el => (this.container = el)}
      >
        {interactions.map(interaction => (
          <ChatMessage key={interaction.id} interaction={interaction}/>
        ))}
        <ChatArea/>
      </StyledTicketChat>
    );
  }
}

export default TicketChat;
