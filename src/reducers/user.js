import { SAVE_USER } from '../actions/types';

const INITIAL_STATE = {
listUsers: [],
nome:'',
email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVE_USER:
    return {
      ...state,
      listUsers: payload.data,
      nome: payload.nome, 
      email: payload.email,
    };
  
  default:
    return state;
  }
};

export default user;