import {createSlice, isPending, isFulfilled, isRejected} from "@reduxjs/toolkit"

export type ThemeMode = "dark" | "light"
export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isLoggedIn: false,
  },
  reducers: (create) => ({
    setIsLoggedIn: create.reducer<{ isLoggedIn: boolean }>((state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn
    }),
  }),
  extraReducers: (builder) => {
    builder

      .addMatcher(
        isPending,
        (state, action) => {
          state.status = "loading"
        },
      )
      .addMatcher(
        isFulfilled,
        // (action) => {
        //   return action.type.endsWith("/fulfilled")
        // },
        (state, action) => {
          state.status = "idle"
        },
      )
      .addMatcher(
        isRejected,
        // (action) => {
        //   return action.type.endsWith("/rejected")
        // },
        (state, action) => {
          state.status = "failed"
        },
      )
  },
  selectors: {

    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
})

export const { setIsLoggedIn} = appSlice.actions
export const { selectIsLoggedIn} = appSlice.selectors
export const appReducer = appSlice.reducer
