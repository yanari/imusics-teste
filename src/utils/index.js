export const getStatusTagColor = (statusName) => {
  switch (statusName) {
    case 'Novo':
      return '#58cad1';
    case 'Em andamento':
      return '#50b848';
    case 'Pendente':
      return '#ffb238';
    case 'Resolvido':
      return '#acbcc5';
    case 'Cancelado':
      return '#acbcc5';
    default:
      return null;
  }
};

const formatDateCreation = (dateCreation) => {
  const [date] = dateCreation.split('.');
  const formattedDate = date.slice(0, date.length - 3);
  return formattedDate;
};

export const mapNewInteractions = (interactions) => {
  const reducedInteractions = interactions.reduce((prev, current, index) => {
    let isNewInteraction = true;
    let prevDateCreaction = '';
    const currentDateCreation = formatDateCreation(current.dateCreation);
    if (index > 0) {
      prevDateCreaction = formatDateCreation(prev[index-1].dateCreation);
      if (currentDateCreation === prevDateCreaction) {
        isNewInteraction = false;
      }
    }
    return [
      ...prev, {
        ...current,
        isNewInteraction,
      },
    ];
  }, []);
  return reducedInteractions;
};