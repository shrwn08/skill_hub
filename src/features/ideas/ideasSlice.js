import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { get } from "../../api/client";

export const fetchIdeas = createAsyncThunk("ideas/fetchAll", async({category="", search= "", page=1, limit=9}, {rejectWithValue})=>{
   try {
     const params = new URLSearchParams(); 
     if(category && category !== "all")
        params.set("category", category);

     if(search) params.set("search", search);

     params.set("page", page);
     params.set("limit", limit);

     const qs = params.toString() ? `?${params.toString()}` : "";

     return await get(`/ideas${qs}`);
   } catch (error) {
    return rejectWithValue(error.message);
   }
})

export const fetchIdeaById = createAsyncThunk(
  "ideas/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await get(`/ideas/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchRecommended = createAsyncThunk(
  "ideas/fetchRecommended",
  async (_, { rejectWithValue }) => {
    try {
      const res = await get("/ideas/recommended");
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);


const ideasSlice = createSlice({
    name : "ideas",
    initialState : {
        list : [],
        total: 0,
        pages: 1,
        currentPage : 1,
        detail : null,
        recommended :  [],
        status : "idle",
        detailStatus : "idle",
        error : null,
        filters : {category : "all", search : ""},
    },
    reduces:{
            setFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
      state.currentPage = 1;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    clearDetail(state) {
      state.detail       = null;
      state.detailStatus = "idle";
    },
    },
    extraReducers: (builder) => {
    builder
      .addCase(fetchIdeas.pending,    (s) => { s.status = "loading"; s.error = null; })
      .addCase(fetchIdeas.fulfilled,  (s, a) => {
        s.status      = "succeeded";
        s.list        = a.payload.data;
        s.total       = a.payload.total;
        s.pages       = a.payload.pages || 1;
        s.currentPage = a.payload.page  || 1;
      })
      .addCase(fetchIdeas.rejected,   (s, a) => { s.status = "failed"; s.error = a.payload; });

      builder
      .addCase(fetchIdeaById.pending,   (s) => { s.detailStatus = "loading"; s.error = null; })
      .addCase(fetchIdeaById.fulfilled, (s, a) => { s.detailStatus = "succeeded"; s.detail = a.payload; })
      .addCase(fetchIdeaById.rejected,  (s, a) => { s.detailStatus = "failed";    s.error  = a.payload; });

    builder
      .addCase(fetchRecommended.fulfilled, (s, a) => { s.recommended = a.payload; });
    }
});

export const { setFilter, setPage, clearDetail } = ideasSlice.actions;

export const selectIdeas        = (s) => s.ideas.list;
export const selectIdeasStatus  = (s) => s.ideas.status;
export const selectIdeasPages   = (s) => s.ideas.pages;
export const selectCurrentPage  = (s) => s.ideas.currentPage;
export const selectIdeaDetail   = (s) => s.ideas.detail;
export const selectDetailStatus = (s) => s.ideas.detailStatus;
export const selectFilters      = (s) => s.ideas.filters;
export const selectRecommended  = (s) => s.ideas.recommended;

export default ideasSlice.reducer;