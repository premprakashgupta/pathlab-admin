import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserApi, login } from "./authAPI";

interface AuthResponse {
  data: UserData;
  message: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
}

interface AuthErrorPayload {
  message: string;
}

// Async thunk for login
export const loginAsync = createAsyncThunk<
  AuthResponse,
  { email: string; password: string; loginAgent: string; deviceId: string },
  { rejectValue: AuthErrorPayload }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await login(credentials.email, credentials.password, credentials.loginAgent, credentials.deviceId);
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return rejectWithValue({ message: error.response.data.message });
    }
    return rejectWithValue({ message: "Login failed" });
  }
});

// Async thunk for fetching user
export const fetchUser = createAsyncThunk<
  AuthResponse,
  void,
  { rejectValue: AuthErrorPayload }
>("auth/fetchUser", async (_, { rejectWithValue }) => {
  try {
    const response = await fetchUserApi();
    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      return rejectWithValue({ message: error.response.data.message });
    }
    return rejectWithValue({ message: "Failed to fetch user" });
  }
});

interface AuthSliceState {
  user: UserData | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: boolean;
  message: string | null;
}

const initialState: AuthSliceState = {
  user: null,
  status: "idle",
  error: false,
  message: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.status = "idle";
      state.error = false;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
        state.error = false;
        state.message = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
        state.message = action.payload.message;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload?.message || "Login failed";
        state.error = true;
      })
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
        state.error = false;
        state.message = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.message = action.payload?.message || "Failed to fetch user";
        state.error = true;
      });
  },
});

export const { logout } = authSlice.actions;

export const selectAuthUser = (state: { auth: AuthSliceState }) => state.auth.user;
export const selectAuthStatus = (state: { auth: AuthSliceState }) => state.auth.status;
export const selectAuthError = (state: { auth: AuthSliceState }) => state.auth.error;
export const selectAuthMessage = (state: { auth: AuthSliceState }) => state.auth.message;

export default authSlice.reducer;
