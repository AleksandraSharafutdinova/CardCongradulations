import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {URI_API} from "../components/const/const";

export const fetchPicture = createAsyncThunk(
    'picture/fetchPicture',
    async (holiday) => {
    const res = await fetch(`${URI_API}image/${holiday}`);
    const data = await res.json();
    return data;
    }
);

export const fetchPictureId = createAsyncThunk(
    'picture/fetchPictureId',
    async (id) => {
        const res = await fetch(`${URI_API}image/${id}`);
        const data = await res.json();
        return data;
    }
);

const pictureSlice = createSlice({
    name: 'picture',
    initialState: {
        urlImg: '',
        loading: '',
        idImg: '',
    },
    reducers: {},
    extraReducers: {
        [fetchPicture.pending]: state => {
            state.urlImg = '';
            state.loading = 'loading';
        },
        [fetchPicture.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchPicture.rejected]: state => {
            state.urlImg = '';
            state.idImg = '';
            state.loading = 'failed';
        },
        [fetchPictureId.pending]: state => {
            state.urlImg = '';
            state.loading = 'loading';
        },
        [fetchPictureId.fulfilled]: (state, action) => {
            state.loading = 'success';
            state.urlImg = action.payload.urlImg;
            state.idImg = action.payload.idImg;
        },
        [fetchPictureId.rejected]: state => {
            state.urlImg = '';
            state.idImg = '';
            state.loading = 'failed';
        },
    }
});

export default pictureSlice.reducer;