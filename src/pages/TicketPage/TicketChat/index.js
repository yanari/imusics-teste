import React, { Component, createRef } from 'react';

import { octadeskApi } from '../../../api';

import { StyledLoadingIcon } from '../../../styles';
import { StyledTicketChat } from './styles';

import ChatMessage from '../../../components/ChatMessage';

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
        <div>
          {interactions.map(interaction => (
            <ChatMessage key={interaction.id} interaction={interaction}/>
          ))}
        </div>
      </StyledTicketChat>
    );
  }
}

// const TicketChat = ({ ticketNumber }) => {
//   const chatRef = useRef(null);
//   const [interactions, setInteractions] = useState(null);
//   const [height, setHeight] = useState(null);
  
//   useEffect(() => {
//     const getInteractions = async () => {
//       const response = await octadeskApi.getTicketInteractions(ticketNumber);
//       const humanInteractions = response.filter((interaction) => {
//         return interaction.isHumanInteraction;
//       });
//       setInteractions(humanInteractions);
//     };
//     getInteractions();
//   }, [ticketNumber]);

//   useEffect(() => {
//     if (interactions !== null) {
//       const distanceToTop = chatRef.current.getBoundingClientRect().top;
//       setHeight(window.innerHeight - distanceToTop);
//     }
//   }, [interactions]);

//   if (interactions === null) return <StyledLoadingIcon/>;
//   console.log(height);
//   return (
    
//   );
// };

export default TicketChat;
