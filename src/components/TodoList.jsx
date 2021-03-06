import { useState } from "react";
import { Box, Button, Center, Flex, Stack, Text } from "@chakra-ui/react";

const TodoList = ({ action, status, toggleStatus, deleteTodo }) => {
  // const renderButton = () => {
  //   if (props.status === "done") {
  //     return <Button color="success">Done</Button>;
  //   }

  //   return <Button color="danger">On Going</Button>;
  // };

  return (
    <Box>
      <Stack border="1px solid black" width="400px" padding="10px">
        <Flex justifyContent="space-between">
          <Box>
            <Text fontWeight="bold" padding="5px">
              {action}
            </Text>
            {status ? (
              <Button colorScheme="green" onClick={toggleStatus}>
                done
              </Button>
            ) : (
              <Button colorScheme="red" onClick={toggleStatus}>
                not done
              </Button>
            )}
          </Box>
          <Box>
            <Flex>
              <Button colorScheme="red" onClick={deleteTodo}>
                Delete
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default TodoList;
