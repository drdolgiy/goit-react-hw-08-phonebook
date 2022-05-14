
import { configureStore } from '@reduxjs/toolkit';
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
import {authSlice} from 'redux/auth/auth-slice';
import { filterSlice } from 'redux/filterSlice';
import { contactsApi } from './contacts/contactsApi';
// import {contactsSlice} from "redux/contacts/contactsSlice"

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,

  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    } ).concat(contactsApi.middleware)
  }   ,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);