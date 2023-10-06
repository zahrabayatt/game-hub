import { Button, Collapse, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length < limit) return <Text>{children}</Text>;

  return (
    <>
      <Collapse
        startingHeight={70}
        in={expanded}
        transition={{ exit: { duration: 0.3 }, enter: { duration: 0.5 } }}
      >
        {children}
      </Collapse>
      <Button
        onClick={() => setExpanded(!expanded)}
        marginTop={3}
        size="xs"
        colorScheme="yellow"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </>
  );
};

export default ExpandableText;
