import {
  PUT_SERVICES,
  SET_SERVICES_LOADING_STATUS,
  SET_SERVICE_SAVING_STATUS,
  UPDATE_EDIT_SERVICE_PROP,
} from './actionTypes';

export function putServices(
  services: { id: number; name: string; price: number }[]
) {
  return { type: PUT_SERVICES, payload: services };
}

export function setServicesLoadingStatus(status: string) {
  return { type: SET_SERVICES_LOADING_STATUS, payload: status };
}

export function setServicesSavingStatus(status: string) {
  return { type: SET_SERVICE_SAVING_STATUS, payload: status };
}

export function updateEditServiceProp(name: string, value: any) {
  return { type: UPDATE_EDIT_SERVICE_PROP, payload: { name, value } };
}
