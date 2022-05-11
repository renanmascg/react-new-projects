import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Renan Mascarenhas</Text>
        <Text color="gray.300" fontSize="small">renanmascg@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Renan Mascarenhas" src="https://avatars.githubusercontent.com/u/37426438?s=96&v=4"></Avatar>
    </Flex>
  );
}