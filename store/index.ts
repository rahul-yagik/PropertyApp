import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import {LoginReducer} from './reducer/login';
import {PropertiesReducer} from './reducer/properties';

const rootReducer = combineReducers({
  login: LoginReducer,
  properties: PropertiesReducer,
});

const configureStore = createStore(rootReducer, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof configureStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof configureStore.dispatch;

export default configureStore;
