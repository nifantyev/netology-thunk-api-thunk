import { AppThunk } from '../store';
import { ServiceFull } from '../models';
import {
  editService,
  putServiceList,
  setServiceListLoadingStatus,
  setServiceDeletingStatus,
  setServiceLoadingStatus,
  setServiceSavingStatus,
} from '../actions/actionCreators';

export function getServices(): AppThunk<Promise<void>> {
  return async function getServicesThunk(dispatch, getState) {
    try {
      dispatch(setServiceListLoadingStatus('pending'));
      const response = await fetch(`${process.env.REACT_APP_API_URL}/services`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(putServiceList(data));
      dispatch(setServiceListLoadingStatus('idle'));
    } catch (e) {
      dispatch(setServiceListLoadingStatus('error'));
    }
  };
}

export function getService(id: number): AppThunk<Promise<void>> {
  return async function getServiceThunk(dispatch, getState) {
    try {
      dispatch(setServiceLoadingStatus('pending'));
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/services/${id}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(editService(data));
      dispatch(setServiceLoadingStatus('idle'));
    } catch (e) {
      dispatch(setServiceLoadingStatus('error'));
    }
  };
}

export function updateService(service: ServiceFull): AppThunk<Promise<void>> {
  return async function updateServiceThunk(dispatch, getState) {
    try {
      dispatch(setServiceSavingStatus('pending'));
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/services`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(service),
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(setServiceSavingStatus('idle'));
    } catch (e) {
      dispatch(setServiceSavingStatus('error'));
      throw e;
    }
  };
}

export function deleteService(id: number): AppThunk<Promise<void>> {
  return async function deleteServiceThunk(dispatch, getState) {
    try {
      dispatch(setServiceDeletingStatus(id, 'pending'));
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/services/${id}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(setServiceDeletingStatus(id, 'idle'));
    } catch (e) {
      dispatch(setServiceDeletingStatus(id, 'error'));
    }
  };
}
