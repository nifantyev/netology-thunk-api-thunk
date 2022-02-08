import {
  createStore,
  combineReducers,
  Store,
  applyMiddleware,
  AnyAction,
} from 'redux';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
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

const store: Store<AppState> = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch &
  ThunkDispatch<RootState, null, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
