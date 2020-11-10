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