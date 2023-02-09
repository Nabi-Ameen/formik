import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "learning redux toolkit",
        content: "I have heard about the redux this is very important for state managment"
    },
    {
        id: 2,
        title: "learning redux",
        content: "this is old version react redux"
    }
]

const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },

            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    }
                }
            }
        }
    }
})

export const { postAdded } = postSlice.actions

export default postSlice.reducer