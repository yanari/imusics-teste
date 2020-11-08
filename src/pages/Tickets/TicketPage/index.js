import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getTicket } from '../../../api';

const TicketPage = (props) => {
  const params = useParams();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const getTicketRequest = async () => {
      const response = await getTicket(params.id);
      setTicket(response);
    };
    getTicketRequest();
  }, [params.id]);

  

  if (ticket === null) return <div>Loading</div>;
  return (
    <div>
      {console.log(ticket)}
      {JSON.stringify(ticket)}
    </div>
  );
};

export default TicketPage;
