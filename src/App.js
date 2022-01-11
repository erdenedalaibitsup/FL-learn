import MiniDrawer from "./pages/drawer";

import { StyledEngineProvider } from '@mui/material/styles';
import { Box } from "@mui/material";
import Home from './pages/home';
import Exam from './pages/exam';
import {
  BrowserRouter as Router,
  useRoutes
} from "react-router-dom";
import Dashboard from "./pages/dahsboard"
import Login from "./pages/login"
import SignUp from "./pages/singUp"
import React from "react";

import { connect } from "react-redux"
const MainRoot = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    { path: "/register", element: < SignUp /> },
    { path: "/dashboard", element: < Dashboard /> },
    { path: "/admin", element: <Home /> },
    { path: "/admin/exam", element: <Exam /> },
  ]);
  return routes;
};
function App(props) {
  return (
    <StyledEngineProvider injectFirst>

      {props.isLogin && <MiniDrawer></MiniDrawer>}
      <Router>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <MainRoot></MainRoot>
        </Box>
      </Router>
    </StyledEngineProvider>

  );
}
const mapStateToProps = state => {
  return {
    isLogin: state.loginReducer.isLogin,
    userName: state.loginReducer.userName
  }
}

export default connect(mapStateToProps, null)(App);
