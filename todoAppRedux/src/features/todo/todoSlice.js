import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [],
    editTodo: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, actions)=> {
            const todo = {
                id: nanoid(),
                text: actions.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, actions)=> {
            state.todos = state.todos.filter((todo) => todo.id !== actions.payload)
        },
        setEditTodo: (state, action) => {
            state.editTodo = action.payload;
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
            state.editTodo = null;
        }
    }
})

export const {addTodo, removeTodo, setEditTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer