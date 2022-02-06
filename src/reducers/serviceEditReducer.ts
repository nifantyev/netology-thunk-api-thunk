import {
  SET_SERVICE_SAVING_STATUS,
  UPDATE_EDIT_SERVICE_PROP,
} from '../actions/actionTypes';
import { AsyncOperationStatus, ServiceFull } from '../types';

interface ServiceEditState {
  service: ServiceFull;
  savingStatus: AsyncOperationStatus;
}

const initialState = {
  service: { id: 0, name: '', price: 0, content: '' } as ServiceFull,
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
      return { ...state, service: { ...state.service, [name]: value } };
    default:
      return state;
  }
}
