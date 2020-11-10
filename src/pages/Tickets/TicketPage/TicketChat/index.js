import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

import { getTicketInteractions } from '../../../../api';

import { StyledLoadingIcon } from '../../../../styles';

const TicketChat = ({ ticketNumber }) => {
  const [interactions, setInteractions] = useState(null);
  const { formatDate } = useIntl();
  useEffect(() => {
    const getInteractions = async () => {
      const response = await getTicketInteractions(ticketNumber);
      const humanInteractions = response.filter((interaction) => {
        return interaction.isHumanInteraction;
      });
      setInteractions(humanInteractions);
    };
    getInteractions();
  }, [ticketNumber]);

  if (interactions === null) return <StyledLoadingIcon/>;
  console.log(interactions);
  return (
    <div>
      {interactions.map(interaction => (
        <div>
          {formatDate(interaction.dateCreation, {minute: 'numeric', hour: 'numeric'})}
        </div>
      ))}
    </div>
  );
};

export default TicketChat;
