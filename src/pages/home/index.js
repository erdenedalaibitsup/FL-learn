import { Typography } from '@mui/material';
import React, { useState } from 'react';
import WordAdd from '../word_action'
import WordList from '../word_list'

const Index = () => {
    const [selectedItem, setSelectedItem] = useState({
        engWord: "",
        monWord: ""
    });
    const [updateShow, setUpdateShow] = useState(false);

    const [datas, setDatas] = useState([]);

    const handleSelectItem = (item) => {
        const tempItem = { ...item };
        setSelectedItem({ ...tempItem });
        setUpdateShow(true)
    }
    const addItem = (item) => {
        datas.push(item);
        setDatas([...datas]);
    }
    const updateItem = (item) => {
        if (datas[item.id]) {
            datas[item.id] = item;
        } else {
            alert("bhgui baina");
        }
        setDatas([...datas]);
    }
    const deleteItem = (id) => {
        console.log("delete item" + id);
    }
    return (
        <div>
            <Typography paragraph>
                <WordAdd updateShow={updateShow} setUpdateShow={setUpdateShow} addItem={addItem} updateItem={updateItem} selectedItem={selectedItem}></WordAdd>

                <WordList deleteItem={deleteItem} handleSelectItem={handleSelectItem} data={datas} ></WordList>
            </Typography>
        </div>
    );
};

export default Index;