import { configureStore, getDefaultMiddleware , combineReducers } from '@reduxjs/toolkit'; 
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    phoneBook: phoneBookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store);

const commonStore = {
    store,
    persistor,
};

export default commonStore;