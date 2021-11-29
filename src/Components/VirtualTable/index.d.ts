/*
 * @Author: kanglin
 * @Date: 2021-11-29 11:21:41
 * @LastEditTime: 2021-11-29 11:34:20
 * @LastEditors: kanglin
 * @FilePath: /tsie-lk/src/Components/VirtualTable/index.d.ts
 */
import type { TableProps, ColumnProps } from 'antd/lib/table';
export interface VirtualTableProps<RecordType = any>
  extends TableProps<RecordType> {
  height: number;
}

export interface VColumnProps<RecordType> extends ColumnProps<RecordType> {}
