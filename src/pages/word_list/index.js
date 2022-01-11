import { Box, Container, Grid, Card, Typography } from '@mui/material';//Checkbox
import React, { Fragment } from 'react';
import DataTable from 'react-data-table-component';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageButton from "../../components/button/ImageButton"

function Index(props) {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const data = props.data;
    const sortIcon = <ArrowDownward />;
    const columns = [
        {
            name: 'Англи үг',
            selector: row => row.engWord,
            sortable: true,
        },
        {
            name: 'Монгол үг',
            selector: row => row.monWord,
            sortable: true,
        }, {
            key: "action",
            text: "Action",
            className: "action",
            width: 100,
            align: "left",
            sortable: false,
            cell: (record, index) => {
                return (
                    <Fragment>
                        <ImageButton onClick={() => {
                            record.id = index;
                            props.handleSelectItem(record);
                        }} color="secondary" icon={<EditIcon></EditIcon>}></ImageButton>
                    </Fragment>
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
                    <Fragment>
                        <ImageButton onClick={() => {
                            console.log(record)
                        }} color="error" icon={<DeleteIcon></DeleteIcon>}></ImageButton>
                    </Fragment>
                );
            }
        },
    ];


    return (
        <Box mt={2}>

            <Container maxWidth="lg" >
                <Card variant="outlined" sx={{ maxWidth: 2000, padding: 2, boxShadow: 4 }} >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"

                    >
                        <Typography mb={2} variant="h6" noWrap component="div">Үгсийн жагсаалт</Typography>
                        <DataTable
                            columns={columns}
                            data={data}
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
                        />
                    </Grid>
                </Card>
            </ Container >
        </Box>
    );
}

export default Index;