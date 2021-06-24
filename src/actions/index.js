import {
  SAVE_USER,
  SAVE_DEBIT,

} from './types';
import { apiUserRequest, apiDebitSave } from '../services/api';


export const actionFetchUsers = (nome, email) => (dispatch) => (
  apiUserRequest()
    .then((data) => dispatch({
      type: SAVE_USER,
      payload: {
        data,
        nome,
        email,
      },
    })));


export const actionSaveDebit = (debit) => (dispatch) => (
  apiDebitSave(debit)
    .then((data) => dispatch({
      type: SAVE_DEBIT,
      payload: {
        data,
      },
    })));


