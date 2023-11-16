import { configureStore } from "@reduxjs/toolkit";

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
// import storage from "redux-persist/lib/storage";

import { authReducer } from "redux/auth/authSlice.js";


const persistConfig = {
    key: 'root',
    // storage,
    whitelist: ['token'],
  };  


export const store = configureStore({
    reducer: {
      auth: persistReducer(persistConfig, authReducer),
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
      evTools: process.env.NODE_ENV === 'development',
  });
  
  export const persistor = persistStore(store);

