import React from 'react';
// import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ImageButton from "../../components/button/ImageButton"

import DoneAll from '@mui/icons-material/DoneAll';
import { Fragment } from 'react';
import { Box } from '@mui/material';
import CustomButton from '../../components/button/CustomButton';
import FilterComponent from '../../components/filterComponent'
function Index(props) {
    const [filterText, setFilterText] = React.useState('');

    const { datas, handleSelectItem, deleteItem } = props;
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const sortIcon = <ArrowDownward />;
    const columns = [
        {
            name: 'Асуулт',
            selector: row => row.question,
            sortable: true,
        },
        {
            name: 'Хариулт 1',
            selector: row => row.answer1,
            sortable: true,
        },
        {
            name: 'Хариулт 2',
            selector: row => row.answer2,
            sortable: true,
            filter: true,
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: 'Хариулт 3',
            selector: row => row.answer3,
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
                            handleSelectItem(record);
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
                            console.log(record);

                            // record.id = index;
                            deleteItem(index);
                        }} color="error" icon={<DeleteIcon></DeleteIcon>}></ImageButton>
                    </Fragment>
                );
            }
        },
    ];
    const filteredItems = datas.filter(
        item => item.question && item.question.toLowerCase().includes(filterText.toLowerCase()),
    );
    const subHeaderComponent = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                // setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText]);
    return (
        <div>
            <Box mt={2} justifyContent="center" display="flex">
                <CustomButton
                    color="primary"
                    loading={false}
                    icon={<DoneAll />}
                    variant="contained"
                    text="Дуусгах"
                />
            </Box>
            {/* <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                expandableRows
                // selectableRows
                filterModel={{
                    items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
                }}
                expandableRowsComponent={ExpandedComponent}
                // selectableRowsComponent={Checkbox}
                // selectableRowsComponentProps={selectProps}
                filterable={true}
                fixedHeader
                fixedHeaderScrollHeight="300px"
                pointerOnHover
                highlightOnHover
                sortIcon={sortIcon}
                dense
                subHeader
                subHeaderComponent={subHeaderComponent}
            /> */}
        </div>
    );
}

export default Index;