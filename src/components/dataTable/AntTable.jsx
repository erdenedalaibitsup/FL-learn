import React from "react";
import "react-widgets/styles.css";

import { Table, Spin, Empty } from "antd";

export const AntTable = (props) => {
  const {
    columns,
    data,
    loading,
    scroll,
    onChange,
    sortName,
    rowSelection,
    pagination,
    rowKey,
  } = props;
  const sort = sortName === "descend" ? "Сүүлээс нь" : "Эхнээс нь";
  return (
    <>
      <Spin spinning={loading} tip="Уншиж байна...">
        <Table
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Хоосон байна"
              />
            ),
          }}
          bordered
          responsive
          rowKey={rowKey}
          showSorterTooltip={{ title: sort + " эрэмбэлэх" }}
          onChange={onChange}
          columns={columns}
          dataSource={data}
          pagination={pagination ? pagination : false}
          scroll={scroll}
          style={{ marginTop: "20px" }}
          rowSelection={rowSelection && rowSelection}
        />
      </Spin>
    </>
  );
};
