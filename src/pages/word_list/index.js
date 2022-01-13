// import { Box, Container, Grid, Card, Typography } from '@mui/material';//Checkbox
import React from 'react';
// import ArrowDownward from '@mui/icons-material/ArrowDownward';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ImageButton from "../../components/button/ImageButton"
import { connect } from "react-redux"
import * as actions from "../../redux/actions/word_actions"

import { AntTable } from "../../components/dataTable/AntTable";
import getColumnSearchProps from "../../components/dataTable/getColumnSearchPropsLocal";

function Index(props) {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const data = props.data;
    // const sortIcon = <ArrowDownward />;
    const [selectedItems, setSelectedItems] = React.useState({
        selectedRowKeys: [],
        batchRecord: [],
        loading: false,
    });
    const { loading, selectedRowKeys, batchRecord } = selectedItems;
    const [state, setState] = React.useState({
        searchText: "",
        searchedColumn: "",
    });
    const onSelectChange = (selectedRowKeys, selectedRows) => {
        console.log("selectRow", selectedRowKeys)
        console.log("selectedRows", selectedRows)
        // const batchRecord = selectedRows;
        setSelectedItems({
            selectedRowKeys,

        });
    };
    const rowSelection = {
        fixed: true,
        selectedRowKeys,
        batchRecord,
        onChange: onSelectChange,
    };

    const columns = [
        {
            title: 'Англи үг',
            dataIndex: "engWord",
            width: 150,
            ...getColumnSearchProps("engWord", state, setState),
        },
        {
            title: 'Монгол үг',
            dataIndex: "monWord",
            width: 150,
            ...getColumnSearchProps("engWord", state, setState),
        }, {
            key: "action",
            text: "Action",
            className: "action",
            width: 100,
            align: "left",
            sortable: false,
            cell: (record, index) => {
                return (
                    <>
                        <button onClick={() => {
                            console.log("index", index)
                            // record.id = index;
                            // props.handleSelectItem(record);
                        }} color="secondary" ></button>

                        {/* icon={<EditIcon></EditIcon>} */}
                    </>
                );
            }
        },
        {
            key: "action",
            text: "Action",
            className: "action",
            align: "left",
            sortable: false,
            cell: (record, index) => {
                return (
                    <>
                        <button onClick={() => {
                            console.log(record)
                        }} color="error" ></button>
                        {/* icon={<DeleteIcon></DeleteIcon>} */}
                    </>
                );
            }
        },
    ];

    React.useEffect(() => {
        props.loadWords();
    }, [])

    return <AntTable
        rowSelection={rowSelection}
        columns={columns}
        rowKey="id"
        data={props.datas}
        loading={props.loading}
        pagination={{ pageSize: 100 }}
        scroll={{ y: 500, x: 2000 }}
    />
    // <div>

    //     <div >
    //         <Card variant="outlined" sx={{ maxWidth: 2000, padding: 2, boxShadow: 4 }} >
    //             <Grid
    //                 container
    //                 direction="column"
    //                 alignItems="center"
    //                 justifyContent="center"

    //             >
    //                 <Typography mb={2} variant="h6" noWrap component="div">Үгсийн жагсаалт</Typography>
    {/* <DataTable
                            columns={columns}
                            data={props.datas}
                            pagination
                            expandableRows
                            // selectableRows
                            expandableRowsComponent={ExpandedComponent}
                            // selectableRowsComponent={Checkbox}
                            // selectableRowsComponentProps={selectProps}
                            fixedHeader
                            fixedHeaderScrollHeight="300px"
                            pointerOnHover
                            highlightOnHover
                            sortIcon={sortIcon}
                            dense
                        /> */}

    //             </Grid>
    //         </Card>
    //     </ Container >
    // </div>
    // );
}

const mapStateToProps = state => {
    return {
        loading: state.wordReducer.loading,
        datas: state.wordReducer.datas
    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadWords: () => dispatch(actions.loadWords()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);