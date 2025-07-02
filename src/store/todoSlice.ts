import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: "1",
      text: "김민수의 프로젝트 리뷰 #384에 피드백 남기기",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: "2",
      text: "이지영과 UI/UX 회의 일정 잡기",
      completed: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: "3",
      text: "박준호가 요청한 기술 문서 작성하기",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: "4",
      text: "최서연의 버그 리포트 #127 확인하기",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: "5",
      text: "정도현과 함께 코드 리팩토링 완료하기",
      completed: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: "6",
      text: "3분기 성과 보고서 최종 검토하기",
      completed: true,
      createdAt: new Date().toISOString(),
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      state.todos.unshift(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
