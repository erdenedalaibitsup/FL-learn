import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";
import InputField from "../../components/inputField/InputField";
import { useForm } from "react-hook-form";
import CustomButton from "../../components/button/CustomButton";
import SaveIcon from "@mui/icons-material/Save";
import CustomAlert from "../../components/alert/CustomAlert";
import { Link, useNavigate } from "react-router-dom"
import Copyright from "../../components/copyright"

const Login = (props) => {
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
        console.log(data);
        console.log(data.password + "-" + data.password1);
        if (data.password == data.password1) {

        } else {
            alert("Нууц үгүүд хоорондоо таарахгүй байна")
        }
        // const result = props.login(data.email, data.password);
        // console.log("result", result);
        // if (data.email === "dalai" && data.password === "000") {
        // history("/admin");
        // } else {
        //   setOpen(true);
        // }
    }
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
                            <VerifiedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Бүртгүүлэх
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
                            <InputField
                                id="password1"
                                error={errors && errors.password1 ? true : false}
                                errorText={errors && errors.password1 && "Нууц үгээ давтан оруулна уу"}
                                style={{ width: "500px" }}
                                label="Нууц үг давтан оруулна уу"
                                type="password1"
                                name="password1"
                                variant="outlined"
                                register={register}
                            />
                            <Box display="flex" alignContent="center" justifyContent="center">
                                <CustomButton
                                    type="submit"
                                    color="success"
                                    icon={<SaveIcon />}
                                    variant="contained"
                                    text="Бүртгүүлэх"
                                />
                            </Box>
                            <CustomAlert type="error" position={{ vertical: "top", horizontal: "center" }} open={open} duration={800} onClose={handleClose} text={"Бүртгүүлэхэд алдаа гарлаа"}></CustomAlert>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Box>
            </Grid>
        </form >
    );
}
export default Login;