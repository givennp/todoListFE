import { useEffect, useState } from "react";
import { Box, Center, Flex, Input, Stack, Text, Button } from "@chakra-ui/react";
import TodoList from "../components/TodoList";

import { axiosInstance } from "../configs/api";

const TodoPage = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("")

  const fetchTodoList = () => {
    axiosInstance.get("/todos").then((res) => {
        console.log(res.data)
      setTodoList(res.data.result);
    });
  };

  const renderTodoList = () => {
      console.log(todoList)
    return todoList.map((val) => {
      return (
        <TodoList
          action={val.action}
          status={val.status}
          deleteTodo={() => deleteTodoItem(val.id)}
          toggleStatus={() => toggleTodoStatus(val.id)}
        />
      );
    });
  };

  const deleteTodoItem = async (id) => {
   await axiosInstance.delete(`/todos/${id}`).then(() => {
      fetchTodoList();
    });
  };

  const toggleTodoStatus = (id) => {
    const dataToFind = todoList.find((val) => {
      return val.id === id;
    });
    axiosInstance
      .patch(`/todos/${id}`, {
        status: !dataToFind.status,
      })
      .then(() => {
        fetchTodoList();
      });
  };

  const inputHandler = (event) => {
      const { value } = event.target

      setTodoInput(value)

  }

  const buttonHandler = () => {
    const newTodo = {
        action: todoInput,
        status: false
    }   


      axiosInstance.post("/todos", newTodo).then(()=> {
        fetchTodoList()
      })
  }

  useEffect(() => {
    fetchTodoList();
  }, []);

  return (
    <Box>
      <Text textAlign="center" fontWeight="bold" fontSize="32px">
        TO DO LIST
      </Text>
      <Center>
        <Flex margin="10px">
          <Input onChange={inputHandler} placeholder="new action" mr="10px"/>
          <Button onClick={buttonHandler} width="100px">Add</Button>
        </Flex>
      </Center>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Stack spacing={5}>{renderTodoList()}</Stack>
      </Box>
    </Box>
  );
};

export default TodoPage;
