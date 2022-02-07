import store from '../store';
import {
  putServiceList,
  setServiceListLoadingStatus,
  setServiceLoadingStatus,
  editService,
  setServiceSavingStatus,
} from '../actions/actionCreators';
import { ServiceFull } from '../types';

const { dispatch } = store;

export async function getServices() {
  try {
    dispatch(setServiceListLoadingStatus('pending'));
    const response = await fetch(`${process.env.REACT_APP_API_URL}/services`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(putServiceList(data));
    dispatch(setServiceListLoadingStatus('success'));
  } catch (e) {
    dispatch(setServiceListLoadingStatus('error'));
  }
}

export async function getService(id: number) {
  try {
    dispatch(setServiceLoadingStatus('pending'));
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/services/${id}}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(editService(data));
    dispatch(setServiceLoadingStatus('success'));
  } catch (e) {
    dispatch(setServiceLoadingStatus('error'));
  }
}

export async function updateService(service: ServiceFull) {
  try {
    dispatch(setServiceSavingStatus('pending'));
    const response = await fetch(`${process.env.REACT_APP_API_URL}/services}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(service),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(setServiceSavingStatus('success'));
  } catch (e) {
    dispatch(setServiceSavingStatus('error'));
  }
}

export async function deleteService(id: number) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/services/${id}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (e) {}
}
