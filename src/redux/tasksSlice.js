// import { createSlice } from "@reduxjs/toolkit";

import { createAction, createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./operations";
import { addTask } from "./operations";
import { deleteTask } from "./operations";

// const slice = createSlice({
//     name: 'tasks',
//     initialState: {
//      items: [
// 	    { id: 0, text: "Learn HTML and CSS", completed: true },
// 	    { id: 1, text: "Get good at JavaScript", completed: true },
// 	    { id: 2, text: "Master React", completed: false },
// 	    { id: 3, text: "Discover Redux", completed: false },
// 	    { id: 4, text: "Build amazing apps", completed: false },
// 	  ]
//     },
//     reducers: {
//         addTask: (state, action) => {
//             state.items.push(action.payload)
//         },
//         deleteTask: (state, action) => {
//             state.items.filter(task => task.id !== action.payload)
//             },
//         toggleCompleted: (state, action) => {
//             for (const task of state.items) {
//                 if (task.id === action.payload) {
//                     task.completed = !task.completed
//                     break
//                 }
//             }
//         },
//     }
// })

// export const { addTask, deleteTask, toggleCompleted } = slice.actions
// export default slice.reducer

// const tasksSlice = createSlice({
//     name: 'tasks',
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//     },
//     reducers: {
//         fetchInProgress(state) {
//             state.isLoading = true
//         },
//         fetchInSuccess(state, action) {
//             state.isLoading = false
//             state.items = action.payload
//             state.error = null
//         },
//         fetchError(state, action) {
//             state.error = action.payload
//         }
//     }
// })

const handlePending = (state) => {
    state.isLoading = true
}

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

const tasksSlice = createSlice({
     name: 'tasks',
     initialState: {
         items: [],
         isLoading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, handlePending)
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = action.payload
                state.error = null
            })
            .addCase(fetchTasks.rejected, handleRejected)
        .addCase(addTask.pending, handlePending)
            .addCase(addTask.fulfilled, (state, action) => {
                state.isLoading = false
                state.items.push(action.payload)
                state.error = null
            })
            .addCase(addTask.rejected, handleRejected)
        .addCase(deleteTask.pending, handlePending)
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isLoading = false
                state.items = state.items.filter(item => item.id !== action.payload.id)
                state.error = null
            })
            .addCase(deleteTask.rejected, handleRejected)
    }
})

export default tasksSlice.reducer
// export const {fetchInProgress, fetchInSuccess, fetchError} = tasksSlice.actions