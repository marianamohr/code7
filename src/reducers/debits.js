import { SAVE_DEBIT} from '../actions/types';

const INITIAL_STATE = {
    listDebits: [{
        idUsuario: 1,
        motivo: 'Parcela 3 carro',
        valor: 199,
      },
      {
        idUsuario: 2, // (plaaceholder id)
        motivo: 'Parcela 3 moto',
        valor: 700,
      },
      {
        idUsuario: 1, // (plaaceholder id)
        motivo: 'Escola',
        valor: 500,
      },
      {
        idUsuario: 1, // (plaaceholder id)
        motivo: 'Parcela 3 carro',
        valor: 700,
      }
    ],
    newDebit: false,
};

const debits = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SAVE_DEBIT:
            return {
                ...state,
                listDebits: payload.data,
            };

        default:
            return state;
    }
};

export default debits;