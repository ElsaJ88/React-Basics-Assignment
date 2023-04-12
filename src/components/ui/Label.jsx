import { Flex, Text, Tag, Container } from "@chakra-ui/react";

export const Label = (props) => {
  return (
    <Container>
      <Text fontSize={"xs"} as={"i"}>
        {props.text}
      </Text>
      <Flex gap={1} flexWrap="wrap">
        {props.recipe.map((label) => (
          <Tag
            padding={1}
            color="gray.50"
            size="xs"
            m={0.5}
            fontSize={"xs"}
            key={label}
            bg={props.color}
          >
            {label}
          </Tag>
        ))}
      </Flex>
    </Container>
  );
};
