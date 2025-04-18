import {configureStore} from "@reduxjs/toolkit"
import {baseApi} from "../baseApi";
import {setupListeners} from "@reduxjs/toolkit/query";
import {appSlice} from "../appSlice";


export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [appSlice.name]: appSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
