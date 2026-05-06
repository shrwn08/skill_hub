import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from "../../api/client";

export const fetchMentors = createAsyncThunk(
  "mentors/fetchAll",
  async ({ expertise = "", search = "" } = {}, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();

      if (expertise) params.set("expertise", expertise);
       if (search) params.set("search", search);

      const qs = params.toString() ? `?${params.toString()}` : "";
      const res = await get(`/mentors${qs}`);

      console.log("MENTORS API RESPONSE:", res);
const mentorsArray = res.data || res.mentors || res || [];

      const data = search
        ? mentorsArray.filter(
            (m) =>
              m.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
              m.expertise?.some((e) =>
                e.toLowerCase().includes(search.toLowerCase())
              )
          )
        : mentorsArray;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMentorSlots = createAsyncThunk(
  "mentors/fetchSlots",
  async (mentorId, { rejectWithValue }) => {
    try {
      const res = await get(`/mentors/${mentorId}/slots`);
      return { mentorId, slots: res.data };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const applyAsMentor = createAsyncThunk(
  "mentors/apply",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await post("/mentors/apply", formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
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
       builder
      .addCase(fetchMentorSlots.pending,   (s) => { s.slotsStatus = "loading"; })
      .addCase(fetchMentorSlots.fulfilled, (s, a) => {
        s.slotsStatus = "succeeded";
        s.slots[a.payload.mentorId] = a.payload.slots;
      })
      .addCase(fetchMentorSlots.rejected,  (s) => { s.slotsStatus = "failed"; });

    builder
      .addCase(applyAsMentor.pending,   (s) => { s.applyStatus = "loading"; s.error = null; })
      .addCase(applyAsMentor.fulfilled, (s) => { s.applyStatus = "succeeded"; })
      .addCase(applyAsMentor.rejected,  (s, a) => { s.applyStatus = "failed"; s.error = a.payload; });
  
  },
});

export const { setMentorFilter, resetApplyStatus } = mentorsSlice.actions;

export const selectMentors      = (s) => s.mentors.list;
export const selectMentorStatus = (s) => s.mentors.status;
export const selectMentorSlots  = (mentorId) => (s) => s.mentors.slots[mentorId] || [];
export const selectApplyStatus  = (s) => s.mentors.applyStatus;
export const selectMentorFilters= (s) => s.mentors.filters;
export const selectMentorError  = (s) => s.mentors.error;

export default mentorsSlice.reducer;