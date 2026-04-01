import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, put } from "../../api/client";

export const fetchAllProgress = createAsyncThunk(
  "progress/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await get("/progress/all");
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

export const fetchProgressForIdea = createAsyncThunk(
  "progress/fetchForIdea",
  async (ideaId, { rejectWithValue }) => {
    try {
      const res = await get(`/progress/${ideaId}`);
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

export const toggleProgressStep = createAsyncThunk(
  "progress/toggleStep",
  async ({ ideaId, stepId }, { rejectWithValue }) => {
    try {
      const res = await put(`/progress/${ideaId}/step/${stepId}`);
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    all:    [],       // summary list (all ideas)
    byIdea: {},       // { [ideaId]: progressRecord }
    status: "idle",
    error:  null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProgress.pending,   (s) => { s.status = "loading"; })
      .addCase(fetchAllProgress.fulfilled, (s, a) => { s.status = "succeeded"; s.all = a.payload; })
      .addCase(fetchAllProgress.rejected,  (s, a) => { s.status = "failed"; s.error = a.payload; });

    builder.addCase(fetchProgressForIdea.fulfilled, (s, a) => {
      const rec = a.payload;
      s.byIdea[rec.idea] = rec;
      // keep summary list in sync
      const idx = s.all.findIndex((r) => r.idea?._id === rec.idea || r.idea === rec.idea);
      if (idx !== -1) s.all[idx] = rec; else s.all.push(rec);
    });

    builder.addCase(toggleProgressStep.fulfilled, (s, a) => {
      const rec = a.payload;
      s.byIdea[rec.idea] = rec;
      const idx = s.all.findIndex((r) => r.idea?._id === rec.idea || r.idea === rec.idea);
      if (idx !== -1) s.all[idx] = rec;
    });
  },
});

export const selectAllProgress      = (s) => s.progress.all;
export const selectProgressForIdea  = (ideaId) => (s) => s.progress.byIdea[ideaId] || null;
export const selectProgressStatus   = (s) => s.progress.status;

export default progressSlice.reducer;