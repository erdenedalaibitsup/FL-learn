import React from "react";
import { Empty } from "antd";

export default function EmptyData() {
  return (
    <div className="text-center my-5" style={{ height: "300px" }}>
      <Empty
        style={{ verticalAlign: "middle" }}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={<span>Дата байхгүй байна</span>}
      />
    </div>
  );
}
