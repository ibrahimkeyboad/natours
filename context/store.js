const { configureStore } = require('@reduxjs/toolkit');
const { createWrapper } = require('next-redux-wrapper');
const { apiSlice } = require('./apiSlice');

const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

const wrapper = createWrapper(makeStore);

export default wrapper;
