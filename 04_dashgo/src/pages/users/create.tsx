import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex width="100%" my="5" maxWidth={1400} mx="auto" px="6">
        <Sidebar />

        <Box flex='1' borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome Completo" ></Input>
              <Input name="email" type="email" label="E-Mail" ></Input>
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="Password" type="password" label="Senha" ></Input>
              <Input name="Password Confirmation" type="password" label="Confirmação da senha" ></Input>
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box >
  );
}