import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Renan Mascarenhas</Text>
          <Text color="gray.300" fontSize="small">renanmascg@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Renan Mascarenhas"
        src="https://avatars.githubusercontent.com/u/37426438?s=96&v=4"></Avatar>
    </Flex>
  );
}