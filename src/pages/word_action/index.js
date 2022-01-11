
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import InputField from '../../components/input_field/InputField'
import UploadButton from '../../components/button/UploadButton'
import CustomButton from '../../components/button/CustomButton'
import CustomAlert from '../../components/alert/CustomAlert';
import { useForm } from 'react-hook-form';
const defaultValue = {
    engWord: "",
    monWord: ""
};
const Index = (props) => {
    const { updateShow, setUpdateShow, selectedItem, updateItem } = props;
    const [item, setItem] = React.useState({ ...defaultValue });
    const [loading, setLoading] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({

        defaultValues: {
            monWord: item.monWord,
            engWord: item.eng,
        }
    }
    );
    React.useEffect(() => {
        if (item) {
            setItem({ ...selectedItem })
            setValue("monWord", selectedItem.monWord);
            setValue("engWord", selectedItem.engWord);
        }
    }, [selectedItem]);

    React.useEffect(() => {
    }, [item])

    const clearItem = () => {
        setUpdateShow(false);
        setItem({ ...defaultValue });
        setValue("monWord", "");
        setValue("engWord", "");
    }
    const onSubmit = (data) => {
        setLoading(true);
        if (updateShow) {

        } else {
            props.addItem(data);
        }
        setOpen(true);
        setTimeout(function () {
            setLoading(false);
        }, 400);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleChange = (e) => {
        const tempItem = { ...item };
        tempItem[e.target.name] = e.target.value;
        setItem({ ...tempItem })
    }
    return (
        <Container maxWidth="lg">
            <Card variant="outlined" sx={{ maxWidth: 2000, padding: 2, boxShadow: 8 }} >
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"

                >
                    <Typography mb={2} variant="h6" noWrap component="div">Үг нэмэх</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box>
                            <InputField
                                id="engWord"
                                onChange={handleChange}
                                value={item.engWord}
                                error={errors && errors.engWord ? true : false}
                                errorText={errors && errors.engWord && "Англи үг заавал оруулна уу"}
                                style={{ width: "500px" }}
                                label="Англи үг"
                                type="text"
                                name="engWord"
                                variant="outlined"
                                register={register} />
                        </Box>
                        <Box sx={{ marginTop: 2 }} >
                            <InputField
                                id="monWord"
                                onChange={handleChange}
                                error={errors && errors.engWord ? true : false}
                                errorText={errors && errors.engWord && "Монгол үг заавал оруулна уу"}
                                style={{ width: "500px" }}
                                value={item.monWord}
                                label="Монгол үг"
                                type="text"
                                name="monWord"
                                variant="outlined"
                                register={register} />
                        </Box>
                        <Box sx={{ marginTop: 2 }} >
                            <UploadButton
                                variant="contained"
                                component="label"
                                text=" Зураг оруулах"
                                name="image"
                                register={register}
                            >
                            </UploadButton>
                            {errors && errors.image &&
                                <Typography fontSize={12} variant="body2" mb={2}
                                    mt={0.5} ml={2} noWrap color={"red"} component="div">Зураг заавал оруулна уу</Typography>}
                        </Box>
                        {updateShow ? <Box sx={{ marginTop: 2 }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center">
                            <CustomButton
                                type="submit"
                                color="secondary"
                                onClick={() => {
                                    updateItem(item);
                                }}
                                loading={loading}
                                icon={<EditIcon />}
                                variant="contained"
                                text="Засах"
                            />
                            <Box ml={2}></Box>
                            <CustomButton
                                onClick={() => {
                                    clearItem();
                                }}
                                icon={<CancelIcon />}
                                variant="contained"
                                text="Буцах"
                            />
                        </Box> :
                            <Box sx={{ marginTop: 2 }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center">
                                <CustomButton
                                    type="submit"
                                    color="success"
                                    loading={loading}
                                    icon={<SaveIcon />}
                                    variant="contained"
                                    text="Хадгалах"
                                />
                            </Box>}
                    </form>
                    <CustomAlert position={{ vertical: "top", horizontal: "center" }} open={open} duration={400} onClose={handleClose} text={updateShow ? "Амжилттай заслаа" : "Амжилттай нэмлээ"}></CustomAlert>
                </Grid>
            </Card>
        </Container >
    );
};

export default Index;