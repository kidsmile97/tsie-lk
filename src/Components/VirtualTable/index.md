---
nav:
  title: Components
  path: /components
---

## 快速使用

```tsx
import React from 'react';
import { VirtualTable } from 'tsie-lk';

export default () => <VirtualTable />;
```

## API

VirtualTable

| 参数       | 说明         | 类型                | 默认值 | 版本 |
| ---------- | ------------ | ------------------- | ------ | ---- |
| dataSource | 数据列表     | Record<string, any> |
| columns    | 表格列配置项 | VColumnsType[]      |
