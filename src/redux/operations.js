import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { fetchInProgress, fetchInSuccess, fetchError } from './tasksSlice';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

// export const fetchTasks = () => async dispatch => {
//     try {
//         dispatch(fetchInProgress())
//         const response = await axios.get('/tasks')
//         dispatch(fetchInSuccess(response.data))
//     }
//     catch (e) {
//         dispatch(fetchError(e.message))
//     }
// }

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/tasks')
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }

)

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (text, thunkAPI) => {
        try {
            const response = await axios.post('/tasks', { text })
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, thunkAPI) => {
        try {
            const response = await axios.delete(`/tasks/${taskId}`)
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }

    }
)

import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

// // Начальное состояние
// const initialState = {
//   items: [
//     { id: 1, name: 'John Doe', phone: '123-456-7890' },
//     { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
    
//   ],
//   filter: '', 
// };

// import { createSlice } from '@reduxjs/toolkit';
// import { createSelector } from 'reselect';

// Начальное состояние
const initialState = {
  items: [
    { id: 1, name: 'John Doe', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
    // Прочие контакты...
  ],
  filter: '', // Строка фильтра для поиска по имени
};

// Создание слайса
const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  selectors: {
    // Простое извлечение всех контактов
    selectContacts: (state) => state.contacts.items,

    // Мемоизированный селектор для фильтрации контактов с использованием reselect
    selectFilteredContacts: createSelector(
      [(state) => state.contacts.items, (state) => state.filters.name],
      (contacts, filter) => {
        if (!filter) return contacts;
        return contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
    ),
  },
});

export const {selectContacts} = contactsSlice.selectors

// Экспорт экшенов и редьюсера
export const { setFilter, addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;





