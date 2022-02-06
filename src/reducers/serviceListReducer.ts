import {
  PUT_SERVICES,
  SET_SERVICES_LOADING_STATUS,
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
    case PUT_SERVICES:
      return { ...state, services: action.payload };
    case SET_SERVICES_LOADING_STATUS:
      return { ...state, loadingStatus: action.payload };
    default:
      return state;
  }
}
