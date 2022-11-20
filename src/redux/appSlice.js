import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: true,
    data: null,
    bgColor: `rgb(255, 0, 255)`
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setData: (state, action) => {
            console.log(action.payload.author)
            state.data = action.payload;
        },
        setBgColor: (state) => {
            var originalArray = [1, 1, 1];
            var newArr = originalArray.map((num) => {
                return Math.floor(Math.random(num) * 180);
            });
            state.bgColor = `rgb(${[...newArr]})`;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLoading, setData, setBgColor } = appSlice.actions

export default appSlice.reducer