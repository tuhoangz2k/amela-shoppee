import React from 'react';
import type { ColumnsType } from 'antd/es/table';
import { Space, Table } from 'antd';
import { OrderList } from 'models';
import { Link } from 'react-router-dom';
import { routePaths } from 'constants/index';

const columns: ColumnsType<OrderList> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Total',
    dataIndex: 'total_price',
    key: 'total',
  },
  {
    title: 'Date',
    dataIndex: 'created_at',
    key: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`${routePaths.orderDetail(record?.id)}`}>More Info +</Link>
      </Space>
    ),
  },
];

type Props = {
  data: Array<OrderList>;
};

const OrderComp: React.FC<Props> = ({ data = [] }) => {
  const orderList = data?.map((item) => ({ ...item, key: item.id }));
  return (
    <div>
      <Table columns={columns} dataSource={orderList as Array<OrderList>} />
    </div>
  );
};

export default OrderComp;
