import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getAllTasks } from "../allTasks/allTasksSlice";
import { clearSelectedItem, setSelectedItem } from "../itemList/itemListSlice";

const initialState = {
    isLoading: false,
    isEditing: false,
    id: 0,
    title: "",
    is_complete: false,
    is_favorite: false,
    due_to: "",
    updated_at: "",
    tags: [],
    category: null,
    content: "",
    created_at: "",
    completion_time: null,
};

export const getTask = createAsyncThunk(
    "task/getTask",
    async (id, thunkAPI) => {
        try {
            const resp = await customFetch.get(`manager/tasks/${id}`);
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const saveTask = createAsyncThunk(
    "task/saveTask",
    async ({ id, task }, thunkAPI) => {
        try {
            const resp = await customFetch.patch(`manager/tasks/${id}/`, task);
            thunkAPI.dispatch(getAllTasks());
            thunkAPI.dispatch(getTask(id));
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const createTask = createAsyncThunk(
    "task/createTask",
    async ({ task }, thunkAPI) => {
        try {
            const resp = await customFetch.post(`manager/tasks/`, task);
            thunkAPI.dispatch(getAllTasks());
            thunkAPI.dispatch(getTask(resp.data.id));
            thunkAPI.dispatch(
                setSelectedItem({ id: resp.data.id, type: "task" })
            );
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteTask = createAsyncThunk(
    "task/deleteTask",
    async (id, thunkAPI) => {
        try {
            const resp = await customFetch.delete(`manager/tasks/${id}`);
            thunkAPI.dispatch(getAllTasks());
            thunkAPI.dispatch(clearSelectedItem());
            return resp.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        handleChange: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        emptyNewTask: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        builder
            // Get task
            .addCase(getTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTask.fulfilled, (state, { payload }) => {
                return { ...payload, isLoading: false, isEditing: true };
            })
            .addCase(getTask.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            // Save task
            .addCase(saveTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(saveTask.fulfilled, (state, { payload }) => {
                state.isLoading = false;
            })
            .addCase(saveTask.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            // Create task
            .addCase(createTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createTask.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                toast.success("New task added.");
            })
            .addCase(createTask.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            })
            // Delete task
            .addCase(deleteTask.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteTask.fulfilled, (state, { payload }) => {
                state.isLoading = false;
            })
            .addCase(deleteTask.rejected, (state, { payload }) => {
                state.isLoading = false;
                toast.error(payload);
            });
    },
});

export const { handleChange, emptyNewTask } = taskSlice.actions;

export default taskSlice.reducer;
