import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post, put } from "../../api/client";

export const fetchMySessions = createAsyncThunk(
  "sessions/fetchMy",
  async (_, { rejectWithValue }) => {
    try {
      const res = await get("/sessions/my");
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

export const bookSession = createAsyncThunk(
  "sessions/book",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await post("/sessions", payload);
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

export const cancelSession = createAsyncThunk(
  "sessions/cancel",
  async (id, { rejectWithValue }) => {
    try {
      const res = await put(`/sessions/${id}/cancel`);
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

export const reviewSession = createAsyncThunk(
  "sessions/review",
  async ({ id, rating, review }, { rejectWithValue }) => {
    try {
      const res = await post(`/sessions/${id}/review`, { rating, review });
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: {
    list:        [],
    status:      "idle",
    bookStatus:  "idle",
    error:       null,
  },
  reducers: {
    resetBookStatus(state) { state.bookStatus = "idle"; state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMySessions.pending,   (s) => { s.status = "loading"; })
      .addCase(fetchMySessions.fulfilled, (s, a) => { s.status = "succeeded"; s.list = a.payload; })
      .addCase(fetchMySessions.rejected,  (s, a) => { s.status = "failed"; s.error = a.payload; });

    builder
      .addCase(bookSession.pending,   (s) => { s.bookStatus = "loading"; s.error = null; })
      .addCase(bookSession.fulfilled, (s, a) => { s.bookStatus = "succeeded"; s.list.unshift(a.payload); })
      .addCase(bookSession.rejected,  (s, a) => { s.bookStatus = "failed"; s.error = a.payload; });

    builder.addCase(cancelSession.fulfilled, (s, a) => {
      const idx = s.list.findIndex((x) => x._id === a.payload._id);
      if (idx !== -1) s.list[idx] = a.payload;
    });

    builder.addCase(reviewSession.fulfilled, (s, a) => {
      const idx = s.list.findIndex((x) => x._id === a.payload._id);
      if (idx !== -1) s.list[idx] = a.payload;
    });
  },
});

export const { resetBookStatus } = sessionsSlice.actions;

export const selectSessions    = (s) => s.sessions.list;
export const selectSessionStatus = (s) => s.sessions.status;
export const selectBookStatus  = (s) => s.sessions.bookStatus;
export const selectSessionError= (s) => s.sessions.error;
export const selectUpcoming    = (s) => s.sessions.list.filter((x) => x.status === "pending" || x.status === "confirmed");
export const selectPast        = (s) => s.sessions.list.filter((x) => x.status === "completed" || x.status === "cancelled");

export default sessionsSlice.reducer;