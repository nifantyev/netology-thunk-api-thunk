import {
  SET_SERVICE_SAVING_STATUS,
  UPDATE_EDIT_SERVICE_PROP,
} from '../actions/actionTypes';
import { AsyncOperationStatus } from '../types';

interface ServiceEditState {
  id: number;
  name: string;
  price: number;
  content: string;
  savingStatus: AsyncOperationStatus;
}

const initialState = {
  id: 0,
  name: '',
  price: 0,
  content: '',
  savingStatus: 'idle',
} as ServiceEditState;

export default function serviceEditReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case SET_SERVICE_SAVING_STATUS:
      return { ...state, savingStatus: action.payload };
    case UPDATE_EDIT_SERVICE_PROP:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}
