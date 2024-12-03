
import tasksReducer from './tasksSlice';
import filtersReducer from './filtersSlice';

import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./reducer";

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer
}
})