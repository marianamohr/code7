import { SAVE_LIST_DEBITS, NEW_DEBIT, SEND_DEBTOR, UPDATE_DEBIT } from '../actions/types';

const INITIAL_STATE = {
  listDebits: [],
  newDebit: true,
};

const debits = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case SAVE_LIST_DEBITS:
      return {
        ...state,
        listDebits: payload.data,

      };
    case NEW_DEBIT:
      return {
        ...state,
        newDebit: !state.newDebit,
      };
    case SEND_DEBTOR:
      return {
        ...state,
        id: payload.id,
        newDebit: false,
      };
      case UPDATE_DEBIT:
        console.log(payload.data);
        return {
          ...state,
        };
    default:
      return state;
  }
};

export default debits;