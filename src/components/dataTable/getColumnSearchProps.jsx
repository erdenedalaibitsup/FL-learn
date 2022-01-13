import { Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { FaSearch } from "react-icons/fa";

const getColumnSearchProps = (dataIndex, dataName, state, setState) => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Хайх ${dataName}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() =>
            handleSearch(selectedKeys, confirm, dataIndex, state, setState)
          }
          icon={<FaSearch />}
          size="small"
          style={{ width: 90 }}
        >
          &nbsp; Хайх
        </Button>
        <Button
          onClick={() => handleReset(clearFilters, dataIndex, state, setState)}
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
  render: (text) => (
    <Highlighter
      highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
      searchWords={[state[dataIndex]]}
      autoEscape
      textToHighlight={text ? text.toString() : ""}
    />
  ),
});

const handleSearch = (selectedKeys, confirm, dataIndex, state, setState) => {
  confirm();
  setState({
    ...state,
    [dataIndex]: selectedKeys[0],
  });
};

const handleReset = (clearFilters, dataIndex, state, setState) => {
  clearFilters();
  setState({
    ...state,
    [dataIndex]: "",
  });
};

export default getColumnSearchProps;
