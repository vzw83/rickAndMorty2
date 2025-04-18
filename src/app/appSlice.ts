import {createSlice, isPending, isFulfilled, isRejected} from "@reduxjs/toolkit"

export type ThemeMode = "dark" | "light"
export type RequestStatus = "idle" | "loading" | "succeeded" | "failed"

export const appSlice = createSlice({
  name: "app",
  initialState: {
    status: "idle" as RequestStatus,
  },
  reducers: (create) => ({
    setAppStatus: create.reducer<{ status: RequestStatus }>((state, action) => {
      state.status = action.payload.status
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
    selectIsStatus: (state) => state.status,
  },
})

export const {setAppStatus } = appSlice.actions
export const { selectIsStatus } = appSlice.selectors
export const appReducer = appSlice.reducer
