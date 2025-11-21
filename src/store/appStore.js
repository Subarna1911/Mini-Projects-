import {configureStore} from '@reduxjs/toolkit';
import appReducer from '../store/sideSlice';

const appStore = configureStore({
    reducer:{
      app:appReducer,
    }
});

export default appStore;