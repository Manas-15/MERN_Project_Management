// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from '../rootReducers';
import { usersApi } from './generatedServices/usersApi';
import { authBaseApi } from './base/authBaseApi';
import { vendorBaseApi } from './base/vendorBaseApi';
import { tenantAdminBaseApi } from './base/tenantAdminBaseApi';
import { organizationBaseApi } from './base/organizationBaseApi';
import { tenantsBaseApi } from './base/tenantsBaseApi';
import { projectBaseApi } from './base/projectBaseApi';
import { assetBaseApi } from './base/assetBaseApi';
import { fileMetaBaseApi } from './base/fileMetaBaseApi';

// Load state from localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadStateFromLocalStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      usersApi.middleware,
      tenantAdminBaseApi.middleware,
      authBaseApi.middleware,
      vendorBaseApi.middleware,
      organizationBaseApi.middleware,
      tenantsBaseApi.middleware,
      projectBaseApi.middleware,
      assetBaseApi.middleware,
      fileMetaBaseApi.middleware
    )
});

// Save state to localStorage whenever store updates
store.subscribe(() => {
  try {
    if (typeof window !== 'undefined') {
      const serializedState = JSON.stringify(store.getState());
      localStorage.setItem('reduxState', serializedState);
    }
  } catch (err) {
    console.error('Error saving state:', err);
  }
});

setupListeners(store.dispatch);
export default store;
