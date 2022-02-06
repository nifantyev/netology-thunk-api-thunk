import {
  PUT_SERVICE_LIST,
  SET_SERVICE_LIST_LOADING_STATUS,
} from '../actions/actionTypes';

import { AsyncOperationStatus, Service } from '../types';

interface ServiceListState {
  loadingStatus: AsyncOperationStatus;
  services: Service[];
}

const initialState = {
  loadingStatus: 'idle',
  services: [],
} as ServiceListState;

export default function serviceListReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case PUT_SERVICE_LIST:
      return { ...state, services: action.payload };
    case SET_SERVICE_LIST_LOADING_STATUS:
      return { ...state, loadingStatus: action.payload };
    default:
      return state;
  }
}
