import {createSlice} from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name:'fetchStatus',
    initialState: {
        fetchDone : false, // false:PENDING AND true:DONE
        currentlyFeching :true,
    },
    reducers: {
        markFetchDone: (state)=>{
            return state.fetchDone = true;
        },
        markFetchingStarted: (state)=>{
            return state.currentlyFeching = true;
        },
        markFetchingFinished: (state)=>{
            return state.currentlyFeching = false;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions; 
export default fetchStatusSlice;

