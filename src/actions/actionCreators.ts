import {
  EDIT_SERVICE,
  PUT_SERVICES,
  SET_SERVICES_LOADING_STATUS,
  SET_SERVICE_SAVING_STATUS,
  UPDATE_EDIT_SERVICE_PROP,
} from './actionTypes';

import { AsyncOperationStatus, Service, ServiceFull } from '../types';

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

export function editService(service: ServiceFull) {
  return { type: EDIT_SERVICE, payload: service };
}
