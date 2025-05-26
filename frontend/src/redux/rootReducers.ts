'use client';

import { combineReducers } from 'redux';
import resetSlice from './store/slices/resetSlice';
import authSlice from './store/slices/authSlice';
import assetSlice from './store/slices/assetSlice';
import { authApi } from './store/generatedServices/authApi';
import { assetApi } from './store/generatedServices/assetApi';

// Combine all reducers into one root reducer
const MainReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [assetApi.reducerPath]: assetApi.reducer,

  authSlice: authSlice, // Add reset slice here
  resetSlice: resetSlice, // Add reset slice here
  assetSlice: assetSlice // Add reset slice here
});

// Define the root reducer function
const rootReducer = (state: any, action: any) => {
  if (action.type === 'auth/resetStore') {
    state = undefined; // Reset entire state
  }
  return MainReducer(state, action);
};

export default rootReducer;
