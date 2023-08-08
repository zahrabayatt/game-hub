import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />;
};

export default ColorModeSwitch;
