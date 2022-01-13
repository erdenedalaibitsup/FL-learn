import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import InputField from "../../components/inputField/InputField";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/button/CustomButton";
import SaveIcon from "@mui/icons-material/Save";
import CustomAlert from "../../components/alert/CustomAlert";
import { Link, useNavigate } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../../redux/actions/login_actions"
function Copyright(props) {

  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a color="inherit" href="https://mui.com/">
        BitsUp.com LLC
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const SignIn = (props) => {
  console.log("hey", props)
  let history = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    login(data);
  };
  const login = (data) => {
    console.log(data)
    const result = props.login(data.email, data.password);
    console.log("result", result);
    // if (data.email === "dalai" && data.password === "000") {
    history("/admin");
    // } else {
    //   setOpen(true);
    // }
  }
  { props.isLogin && console.log("nevterlee") }
  return (
    < form onSubmit={handleSubmit(onSubmit)} >

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          variant="outlined"
          sx={{ padding: 2, boxShadow: 8, maxWidth: 500 }}
        >
          <CssBaseline />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Нэвтрэх
            </Typography>
            <Box
              sx={{ mt: 1 }}
            >
              <InputField
                id="email"
                error={errors && errors.email ? true : false}
                errorText={errors && errors.email && "И-мэйл хаягаа оруулна уу"}
                style={{ width: "500px" }}
                label="И-мэйл хаяг"
                type="email"
                name="email"
                variant="outlined"
                register={register}
              />
              <InputField
                id="password"
                error={errors && errors.password ? true : false}
                errorText={errors && errors.password && "Нууц үгээ оруулна уу"}
                style={{ width: "500px" }}
                label="Нууц үг"
                type="password"
                name="password"
                variant="outlined"
                register={register}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Намайг сана"
              /> */}
              <Box display="flex" alignContent="center" justifyContent="center">
                <CustomButton
                  type="submit"
                  color="success"
                  icon={<SaveIcon />}
                  variant="contained"
                  text="Нэвтрэх"
                />
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link to="/" variant="body2">
                    Нууц үгээ мартсан уу?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Бүртгүүлэх"}
                  </Link>
                </Grid>
              </Grid>
              <CustomAlert type="error" position={{ vertical: "top", horizontal: "center" }} open={open} duration={800} onClose={handleClose} text={"Нууц үг нэвтрэх нэр буруу байна"}></CustomAlert>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Grid>
    </form >
  );
}
const mapStateToProps = state => {
  return {
    isLogin: state.loginReducer.isLogin,
    userName: state.loginReducer.userName
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: (userName, password) => dispatch(actions.login(userName, password)),
    register: (userName, password) => dispatch(actions.register(userName, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);