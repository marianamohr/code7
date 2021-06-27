import {
  SAVE_USER,
  SAVE_DEBIT,
  SAVE_LIST_DEBITS,
  NEW_DEBIT,
  SEND_DEBTOR,
  DELETE_DEBIT,

} from './types';
import { apiUserRequest, apiDebitSave, apiGetDebits, apiDeleteDebit } from '../services/api';


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

export const actionGetDebits = () => (dispatch) => (
  apiGetDebits()
    .then((result) => dispatch({
      type: SAVE_LIST_DEBITS,
      payload: {
        data: result,
      },
    }))
);

export const actionDeleteDebit = (id) => (dispatch) =>(
  apiDeleteDebit(id)
  .then(() => dispatch({
    type: DELETE_DEBIT,
  }))
)

export const actionNewDebit = () => ({
  type: NEW_DEBIT,
});



export const actionSendDebtor = (id) => ({
  type: SEND_DEBTOR,
  payload: {
    id,
  }
})