/*
 * @Author: kanglin
 * @Date: 2021-11-29 11:06:22
 * @LastEditTime: 2021-11-29 18:04:52
 * @LastEditors: kanglin
 * @FilePath: /tsie-lk/src/Components/VirtualTable/index.tsx
 */

import React from 'react';
import type { VirtualTableProps } from './index.d';
import Table from '../Table';
import VirtualList from '../VirtualList';

export default (props: VirtualTableProps<Record<string, any>>) => {
  const {
    rowSelection,
    rowClassName,
    onRow,
    columns,
    dataSource,
    ...restProps
  } = props;

  const mergedColumns = React.useMemo(() => {
    return columns;
  }, [columns]);

  return (
    <Table
      {...restProps}
      className="virtual-table"
      columns={mergedColumns}
      pagination={false}
      components={{ body: VirtualList }}
    />
  );
};
