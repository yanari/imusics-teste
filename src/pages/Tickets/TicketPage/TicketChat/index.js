import React, { useEffect, useState } from 'react';

import { getTicketInteractions } from '../../../../api';

const TicketChat = ({ ticketNumber }) => {
  const [interactions, setInteractions] = useState(null);
  useEffect(() => {
    const getInteractions = async () => {
      const response = await getTicketInteractions(ticketNumber);
      const humanInteractions = response.filter(interaction => interaction.isHumanInteraction);
      setInteractions(humanInteractions);
    };
    getInteractions();
  }, []);
  return (
    <div>
      {console.log(interactions)}
    </div>
  );
};

export default TicketChat;
