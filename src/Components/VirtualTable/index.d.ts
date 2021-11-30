/*
 * @Author: kanglin
 * @Date: 2021-11-29 11:21:41
 * @LastEditTime: 2021-11-30 18:14:27
 * @LastEditors: kanglin
 * @FilePath: /tsie-lk/src/Components/VirtualTable/index.d.ts
 */
import { JSXElement } from '@babel/types';
import type { TableProps, ColumnProps } from 'antd/lib/table';
import type { ReactNode } from 'react';

export interface EventObject {
  onClick?: (event: any) => void;
  onDoubleClick?: (event: any) => void;
  onContextMenu?: (event: any) => void;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
}

export interface RowSelectionType<RecordType = any> {
  title?: ReactNode;
  width?: string | number;
  renderCell?: (
    checked: boolean,
    record: RecordType,
    index: number,
    originNode: ReactNode,
  ) => ReactNode;
  selectedRowKeys?: string[];
  type?: 'checkbox' | 'radio';
  onChange?: (selectedRowKeys: string[], selectedRows: RecordType[]) => void;
}

export interface FilterOptionType<RecordType = any> {
  onFilter?: (record: RecordType, index: number) => boolean;
}

export interface SorterOptionType<RecordType = any> {
  onSorter?: (record: RecordType, index: number) => number;
}

export interface VColumnProps<RecordType = any> {
  align?: 'center' | 'left' | 'right';
  className?: string;
  dataIndex: string | string[];
  editable?: boolean;
  ellipsis?: boolean;
  key: string;
  render?: (record: RecordType, index: number) => ReactNode;
  title?: ReactNode;
  width?: string | number;
  onCell?: (record: RecordType, rowIndex: number) => EventObject;
  filterOption?: FilterOptionType<RecordType>;
  sorterOption?: SorterOptionType<RecordType>;
}

export interface VirtualTableProps<RecordType = any> {
  showHeader?: boolean;
  rowHeight?: number;
  rowSelection?: RowSelectionType;
  title?: ReactNode;
  onRow?: (record: RecordType, index: number) => EventObject;
  loading?: boolean;
  bordered?: boolean;
  columns?: VColumnProps<RecordType>;
  dataSource?: RecordType[];
}
