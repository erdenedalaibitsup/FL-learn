import { Box, Container, Card } from '@mui/material';
import React from 'react';
import CustomButton from '../../components/button/CustomButton';
import InputField from '../../components/inputField/InputField';
import { useForm } from 'react-hook-form';
import SaveIcon from '@mui/icons-material/Save';
import Radio from "@mui/material/Radio";
import { makeStyles } from '@material-ui/core/styles'
import CustomAlert from '../../components/alert/CustomAlert';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

const useStyles = makeStyles(theme => ({
    textField: {
        border: "1px solid green"
    }
}))
const defaultValue = {
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    correct: "answer1"
};
function Index(props) {
    const classes = useStyles();
    const { updateShow, setUpdateShow, selectedItem, updateItem } = props;
    const [open, setOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm();
    const [loading, setLoading] = React.useState(false);

    const [item, setItem] = React.useState(
        {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            correct: "answer1",
        }
    );

    React.useEffect(() => {
        if (item) {
            setItem({ ...selectedItem });
            setValue("question", selectedItem.question);
            setValue("answer1", selectedItem.answer1);
            setValue("answer2", selectedItem.answer2);
            setValue("answer3", selectedItem.answer3);
        }
    }, [selectedItem]);
    const onSubmit = (data) => {
        data.correct = item.correct;
        setLoading(true);
        if (updateShow) {

        } else {
            props.addItem(data);
        }
        setOpen(true);
        setTimeout(function () {
            setLoading(false);
            clearItem();
        }, 400);
    }

    const handleChange = (e) => {
        const tempItem = { ...item };
        tempItem[e.target.name] = e.target.value;
        setItem({ ...tempItem })

    }

    const clearItem = () => {
        setItem({ ...defaultValue });
        setValue("question", "");
        setValue("answer1", "");
        setValue("answer2", "");
        setValue("answer3", "");
        setUpdateShow(false);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        < Container maxWidth="lg" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card variant="outlined" sx={{ maxWidth: 2000, padding: 2, boxShadow: 4 }} >
                    <Box mt={2} display="flex" flexDirection="column">
                        <Box display="flex" >
                            <InputField
                                id={"question"}
                                value={item.question}
                                onChange={handleChange}
                                error={errors && errors["question"] ? true : false}
                                errorText={errors && errors["question"] && "Асуултаа заавал оруулна уу"}
                                label={"Асуулт"}
                                type="text"
                                name={"question"}
                                variant="outlined"
                                register={register}
                            />
                        </Box>
                        <Box mt={2} display="flex">
                            <Radio
                                checked={item.correct === 'answer1'}
                                onChange={handleChange}
                                value="answer1"
                                name="correct"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <InputField
                                id="answer1"
                                name="answer1"
                                value={item.answer1}
                                onChange={handleChange}
                                error={errors && errors["answer1"] ? true : false}
                                errorText={errors && errors["answer1"] && "Хариултаа заавал оруулна уу"}
                                label="Хариулт 1"
                                type="text"
                                variant="outlined"
                                register={register}
                            />
                        </Box>
                        <Box mt={2} display="flex">
                            <Radio
                                checked={item.correct === 'answer2'}
                                onChange={handleChange}
                                value="answer2"
                                name="correct"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <InputField
                                id="answer2"
                                value={item.answer2}
                                onChange={handleChange}
                                error={errors && errors["answer2"] ? true : false}
                                errorText={errors && errors["answer2"] && "Хариултаа заавал оруулна уу"}
                                label="Хариулт 2"
                                type="text"
                                name="answer2"
                                variant="outlined"
                                register={register}
                            />
                        </Box>
                        <Box mt={2} display="flex">
                            <Radio
                                checked={item.correct === 'answer3'}
                                onChange={handleChange}
                                value="answer3"
                                name="correct"
                                label="sda"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <InputField
                                id="answer3"
                                className={classes.textField}
                                value={item.answer3}
                                onChange={handleChange}
                                error={errors && errors["answer3"] ? true : false}
                                errorText={errors && errors["answer3"] && "Хариултаа заавал оруулна уу"}
                                label="Хариулт 3"
                                type="text"
                                name="answer3"
                                variant="outlined"
                                register={register}
                            />
                        </Box>
                    </Box>
                    {/* <Box mt={2} display="flex" alignContent="center" justifyContent="center">
                        <CustomButton
                            type="submit"
                            color="success"
                            loading={loading}
                            icon={<SaveIcon />}
                            variant="contained"
                            text="Асуулт нэмэх"
                        />
                    </Box> */}
                    {updateShow ? <Box sx={{ marginTop: 2 }}
                        display="flex"
                        alignItems="center"
                        justifyContent="center">
                        <CustomButton
                            type="submit"
                            onClick={() => {
                                updateItem(item);
                            }}
                            color="secondary"
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
                            loading={loading}
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
                </Card>

            </form>

            <CustomAlert position={{ vertical: "top", horizontal: "center" }} open={open} duration={400} onClose={handleClose} text={updateShow ? "Амжилттай заслаа" : "Амжилттай нэмлээ"}></CustomAlert>

        </ Container >
    );
}

export default Index;