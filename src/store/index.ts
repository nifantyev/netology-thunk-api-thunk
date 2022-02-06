import { createStore, combineReducers, Store } from 'redux';
import serviceListReducer, {
  ServiceListState,
} from '../reducers/serviceListReducer';
import serviceEditReducer, {
  ServiceEditState,
} from '../reducers/serviceEditReducer';

interface AppState {
  serviceList: ServiceListState;
  serviceEdit: ServiceEditState;
}

const rootReducer = combineReducers({
  serviceList: serviceListReducer,
  serviceEdit: serviceEditReducer,
});

const store: Store<AppState> = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
