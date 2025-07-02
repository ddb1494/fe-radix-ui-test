import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Checkbox,
  TextField,
  Button,
  IconButton,
  Card,
} from "@radix-ui/themes";
import { PlusIcon, TrashIcon, Share1Icon } from "@radix-ui/react-icons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTodo, toggleTodo, deleteTodo } from "../store/todoSlice";
import type { Todo } from "../store/todoSlice";

const TodoPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.todos);
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (newTodoText.trim()) {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText("");
    }
  };

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const completedTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  return (
    <Container size="2" style={{ padding: "2rem 1rem" }}>
      <Card style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
        {/* Header */}
        <Flex justify="between" align="center" mb="4">
          <Box>
            <Heading size="6" mb="1">
              할일
            </Heading>
            <Text size="2" color="gray">
              일일 작업을 체계적으로 관리하세요.
            </Text>
          </Box>
          <Flex gap="2">
            <IconButton variant="ghost" size="2" aria-label="Share">
              <Share1Icon />
            </IconButton>
            <IconButton variant="ghost" size="2" aria-label="Add new">
              <PlusIcon />
            </IconButton>
          </Flex>
        </Flex>

        {/* Add new todo */}
        <Flex gap="2" mb="4">
          <TextField.Root
            placeholder="새 작업을 추가하세요..."
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{ flex: 1 }}
          />
          <Button onClick={handleAddTodo} disabled={!newTodoText.trim()}>
            <PlusIcon />
            추가
          </Button>
        </Flex>

        {/* Todo list */}
        <Box>
          {todos.map((todo: Todo) => (
            <Flex
              key={todo.id}
              align="center"
              gap="3"
              py="2"
              style={{
                borderBottom: "1px solid var(--gray-6)",
                opacity: todo.completed ? 0.7 : 1,
              }}
            >
              <Checkbox
                checked={todo.completed}
                onCheckedChange={() => handleToggleTodo(todo.id)}
                aria-label={`"${todo.text}"을(를) ${
                  todo.completed ? "미완료" : "완료"
                }로 표시`}
              />
              <Text
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "var(--gray-9)" : "inherit",
                }}
              >
                {todo.text}
              </Text>
              <IconButton
                variant="ghost"
                size="1"
                color="red"
                onClick={() => handleDeleteTodo(todo.id)}
                aria-label={`"${todo.text}" 삭제`}
              >
                <TrashIcon />
              </IconButton>
            </Flex>
          ))}
        </Box>

        {/* Stats */}
        {todos.length > 0 && (
          <Flex
            justify="between"
            mt="4"
            pt="3"
            style={{ borderTop: "1px solid var(--gray-6)" }}
          >
            <Text size="1" color="gray">
              {pendingTodos.length}개 진행중
            </Text>
            <Text size="1" color="gray">
              {completedTodos.length}개 완료
            </Text>
          </Flex>
        )}

        {todos.length === 0 && (
          <Box style={{ textAlign: "center", padding: "2rem 0" }}>
            <Text color="gray">
              아직 작업이 없습니다. 위에서 첫 번째 작업을 추가해보세요!
            </Text>
          </Box>
        )}
      </Card>
    </Container>
  );
};

export default TodoPage;
