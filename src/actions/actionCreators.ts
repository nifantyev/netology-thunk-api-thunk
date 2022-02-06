import {
  PUT_SERVICES,
  SET_SERVICES_LOADING_STATUS,
  SET_SERVICE_SAVING_STATUS,
  UPDATE_EDIT_SERVICE_PROP,
} from './actionTypes';

import { AsyncOperationStatus, Service } from '../types';

export function putServices(services: Service[]) {
  return { type: PUT_SERVICES, payload: services };
}

export function setServicesLoadingStatus(status: AsyncOperationStatus) {
  return { type: SET_SERVICES_LOADING_STATUS, payload: status };
}

export function setServicesSavingStatus(status: AsyncOperationStatus) {
  return { type: SET_SERVICE_SAVING_STATUS, payload: status };
}

export function updateEditServiceProp(name: string, value: any) {
  return { type: UPDATE_EDIT_SERVICE_PROP, payload: { name, value } };
}
