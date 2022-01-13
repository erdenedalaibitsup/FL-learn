
import { Box, Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';
import InputField from '../../components/inputField/InputField'
import UploadButton from '../../components/button/UploadButton'
import CustomButton from '../../components/button/CustomButton'
import CustomAlert from '../../components/alert/CustomAlert';
import { useForm } from 'react-hook-form';

import { connect } from "react-redux"
import * as actions from "../../redux/actions/word_actions"

const defaultValue = {
    engWord: "",
    monWord: ""
};
const Index = (props) => {
    const { updateShow, setUpdateShow, selectedItem, updateItem } = props;
    const [item, setItem] = React.useState({ ...defaultValue });
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


    const clearItem = () => {
        setUpdateShow(false);
        setItem({ ...defaultValue });
        setValue("monWord", "");
        setValue("engWord", "");
    }
    const onSubmit = (data) => {
        console.log("data", data);
        props.createWord(data);
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
                                loading={props.updateLoading}
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
                                    loading={props.saveLoading}
                                    icon={<SaveIcon />}
                                    variant="contained"
                                    text="Хадгалах"
                                />
                            </Box>}
                    </form>

                    {props.saveFinished && <CustomAlert position={{ vertical: "top", horizontal: "center" }} open={true} duration={1000} onClose={() => { props.createWordHideAlert(); }} text={"Амжилттай нэмлээ"}></CustomAlert>
                    }
                    {props.saveError && <CustomAlert position={{ vertical: "top", horizontal: "center" }} open={true} duration={1000} onClose={() => { props.createWordHideAlert(); }}
                        type="error" text={props.saveError}></CustomAlert>}
                </Grid>
            </Card>
        </Container >
    );
};
const mapStateToProps = state => {
    return {
        saveLoading: state.wordReducer.saveLoading,
        saveFinished: state.wordReducer.saveFinished,
        saveError: state.wordReducer.saveError,
        updateLoading: state.wordReducer.updateLoading,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        createWord: (newWord) => dispatch(actions.createWord(newWord)),
        createWordHideAlert: () => dispatch(actions.createWordHideAlert())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);