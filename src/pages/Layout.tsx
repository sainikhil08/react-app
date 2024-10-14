import { Box } from "@chakra-ui/react";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
