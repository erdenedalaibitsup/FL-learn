import React from "react";
import { Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const getColumnSearchPropsLocal = (dataIndex, state, setState) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Хайх ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() =>
          handleSearch(selectedKeys, confirm, dataIndex, setState)
        }
        style={{ marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() =>
            handleSearch(selectedKeys, confirm, dataIndex, setState)
          }
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Хайх
        </Button>
        <Button
          onClick={() => handleReset(clearFilters, setState)}
          size="small"
          style={{ width: 90 }}
        >
          Цэвэрлэх
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
  ),
  onFilter: (value, record) => {
    return record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : "";
  },
  render: (text) =>
    state.searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[state.searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ""}
      />
    ) : (
      text
    ),
});

const handleSearch = (selectedKeys, confirm, dataIndex, setState) => {
  confirm();
  setState({
    searchText: selectedKeys[0],
    searchedColumn: dataIndex,
  });
};

const handleReset = (clearFilters, setState) => {
  clearFilters();
  setState({ searchText: "" });
};

export default getColumnSearchPropsLocal;
