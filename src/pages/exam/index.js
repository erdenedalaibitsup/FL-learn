import { DataSaverOffOutlined } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import ExamAction from '../exam_action'
import ExamList from '../exam_list'
function Index(props) {
    const [selectedItem, setSelectedItem] = React.useState(
        {
            question: "",
            answer1: "",
            answer2: "",
            answer3: "",
            correct: "answer1",
        }
    );
    const [updateShow, setUpdateShow] = React.useState(false);
    const [datas, setData] = React.useState([])

    const addItem = (data) => {
        datas.push(data);
        setData([...datas]);
    }
    const updateItem = (data) => {
        if (datas[data.id]) {
            datas[data.id] = data;
        } else {
            alert("bhgui baina");
        }
        setData([...datas]);
    }

    const deleteItem = (id) => {
        datas.splice(id, 1);
        console.log(datas);
        setData([...datas]);
    }
    const handleSelectItem = (item) => {
        const tempItem = { ...item };
        setSelectedItem({ ...tempItem });
        setUpdateShow(true);
    }
    return (
        < Container maxWidth="lg" >
            <ExamAction selectedItem={selectedItem} addItem={addItem} updateShow={updateShow} setUpdateShow={setUpdateShow} updateItem={updateItem}></ExamAction>
            <ExamList deleteItem={deleteItem} handleSelectItem={handleSelectItem} datas={datas}></ExamList>

        </ Container >
    );
}

export default Index;