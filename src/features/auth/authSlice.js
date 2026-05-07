import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../api/client";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await post("/auth/login", { email, password });
      localStorage.setItem("token", res.token);

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const resigterUser = createAsyncThunk(
  "/auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await post("/auth/register", formData);
      localStorage.setItem("token", res.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await get("/auth/me");
      return res.data;
    } catch (error) {
      localStorage.removeItem("token");
      return rejectWithValue(error.message);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    status: "idle",
    error: null,
    initialized: false,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
      state.initialized = true;
    },
    clearAuthError(state) {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeed";
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
    //register
    builder
      .addCase(resigterUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(resigterUser.fulfilled, (state, action) => {
        state.status = "succeed";
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(resigterUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });

    //fetchMe
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.status = "succeed";
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.initialized = true;
      });
  },
});

export const { logout, clearAuthError } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => !!state.auth.user;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;
export const selectInitialized = (state) => state.auth.initialized;

export default authSlice.reducer;
