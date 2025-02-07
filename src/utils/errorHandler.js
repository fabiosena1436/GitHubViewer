export const handleApiError = (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          return {
            title: 'Não encontrado',
            message: 'O recurso solicitado não foi encontrado.'
          };
        case 403:
          return {
            title: 'Limite excedido',
            message: 'Limite de requisições da API excedido. Tente novamente mais tarde.'
          };
        case 401:
          return {
            title: 'Não autorizado',
            message: 'Acesso não autorizado.'
          };
        default:
          return {
            title: 'Erro',
            message: 'Ocorreu um erro inesperado. Tente novamente.'
          };
      }
    }
    return {
      title: 'Erro de conexão',
      message: 'Verifique sua conexão com a internet e tente novamente.'
    };
  };