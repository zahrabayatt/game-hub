import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box paddingX={3} paddingBottom={5}>
      <NavBar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
