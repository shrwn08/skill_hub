import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { del, get, post } from "../../api/client";

export const fetchBookmarks = createAsyncThunk(
  "bookmarks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await get("/bookmarks");
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

export const addBookmark = createAsyncThunk(
  "bookmarks/add",
  async (ideaId, { rejectWithValue }) => {
    try {
      const res = await post("/bookmarks", { ideaId });
      return res.data;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

export const removeBookmark = createAsyncThunk(
  "bookmarks/remove",
  async (ideaId, { rejectWithValue }) => {
    try {
      await del(`/bookmarks/${ideaId}`);
      return ideaId;
    } catch (err) { return rejectWithValue(err.message); }
  }
);

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookmarks.pending,   (s) => { s.status = "loading"; })
      .addCase(fetchBookmarks.fulfilled, (s, a) => { s.status = "succeeded"; s.list = a.payload; })
      .addCase(fetchBookmarks.rejected,  (s, a) => { s.status = "failed"; s.error = a.payload; });

    builder.addCase(addBookmark.fulfilled,    (s, a) => { s.list.unshift(a.payload); });
    builder.addCase(removeBookmark.fulfilled, (s, a) => {
      s.list = s.list.filter((b) => b.idea?._id !== a.payload);
    });
  },
});

export const selectBookmarks       = (s) => s.bookmarks.list;
export const selectBookmarkStatus  = (s) => s.bookmarks.status;
export const selectIsBookmarked    = (ideaId) => (s) =>
  s.bookmarks.list.some((b) => b.idea?._id === ideaId || b.idea === ideaId);

export default bookmarksSlice.reducer;