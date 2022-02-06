import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceEditReducer from '../reducers/serviceEditReducer';

const rootReducer = combineReducers({
  serviceList: serviceListReducer,
  serviceEdit: serviceEditReducer,
});

const store = createStore(rootReducer);

export default store;
