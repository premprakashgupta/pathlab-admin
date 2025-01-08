import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter/counterSlice";
import { authSlice } from "./features/auth/authSlice";

// Combine the reducers using `combineReducers` (not `combineSlices`)
const rootReducer = combineReducers({
  counter: counterSlice.reducer, // Ensure you're passing the `.reducer` from each slice
  auth: authSlice.reducer,
});

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// `makeStore` encapsulates the store configuration for SSR
export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

// Infer the `AppStore` type from `makeStore`
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `AppDispatch` type from the store
export type AppDispatch = AppStore["dispatch"];

// Define `AppThunk` type for async actions (if you need custom async thunks)
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
