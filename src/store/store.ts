import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// why need RootState and AppDispatch?
// The RootState type will be used to define the type of the useSelector hooks in the components.
// The AppDispatch type will be used to define the type of the useDispatch hook in the components.
