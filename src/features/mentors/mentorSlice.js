import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../api/client";

export const fetchMentors = createAsyncThunk(
  "mentors/fetchAll",
  async ({ expertise = "", search = "" } = {}, { rejectWithvalue }) => {
    try {
      const params = new URLSearchParams();

      if (expertise) params.set("expertise", expertise);

      const qs = params.toString() ? `?${params.toString()}` : "";
      const res = await get(`/mentors${qs}`);

      const data = search
        ? (res.data || []).filter(
            (m) =>
              m.user?.name
                ?.toLowerCase()
                .includes(search.toLocaleLowerCase()) ||
              m.expertise?.some((e) =>
                e.toLowerCase().includes(search.toLowerCase()),
              ),
          )
        : res.data || [];

      return data;
    } catch (error) {
      return rejectWithvalue(error.message);
    }
  },
);

const mentorsSlice = createSlice({
  name: "mentors",
  initialState: {
    list: [],
    slots: {},
    status: "idle",
    slotsStatus: "idle",
    applyStatus: "idle",
    error: null,
    filters: { expertise: "", search: "" },
  },
  reducers: {
    setMentorFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetApplyStatus(state) {
      state.applyStatus = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMentors.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(fetchMentors.fulfilled, (s, a) => {
        s.status = "succeeded";
        s.list = a.payload;
      })
      .addCase(fetchMentors.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload;
      });
  },
});
