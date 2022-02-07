import {
  EDIT_SERVICE,
  PUT_SERVICE_LIST,
  SET_SERVICE_DELETING_STATUS,
  SET_SERVICE_LIST_LOADING_STATUS,
  SET_SERVICE_LOADING_STATUS,
  SET_SERVICE_SAVING_STATUS,
  UPDATE_EDIT_SERVICE_PROP,
} from './actionTypes';

import { AsyncOperationStatus, Service, ServiceFull } from '../types';

export function putServiceList(services: Service[]) {
  return { type: PUT_SERVICE_LIST, payload: services };
}

export function setServiceListLoadingStatus(status: AsyncOperationStatus) {
  return { type: SET_SERVICE_LIST_LOADING_STATUS, payload: status };
}

export function setServiceDeletingStatus(
  id: number,
  status: AsyncOperationStatus
) {
  return { type: SET_SERVICE_DELETING_STATUS, payload: { id, status } };
}

export function setServiceLoadingStatus(status: AsyncOperationStatus) {
  return { type: SET_SERVICE_LOADING_STATUS, payload: status };
}

export function setServiceSavingStatus(status: AsyncOperationStatus) {
  return { type: SET_SERVICE_SAVING_STATUS, payload: status };
}

export function updateEditServiceProp(name: string, value: any) {
  return { type: UPDATE_EDIT_SERVICE_PROP, payload: { name, value } };
}

export function editService(service: ServiceFull) {
  return { type: EDIT_SERVICE, payload: service };
}
