---
title: Many to Many database design
description: cool post
date: '2023-10-30'
categories:
  - sql
  - database
published: true
---

# this is a H1 Header

## this is a h2

I'm trying to learn database design

```sql
CREATE TABLE something
 id SERIAL NO NULL
 name VARCHAR(50)
```

| id  | name       | color |
| --- | ---------- | ----- |
| 1   | typescript | blue  |
| 1   | react | blue  |
| 1   | Vue | blue  |
| 1   | solidjs | blue  |
| 1   | Svelte | blue  |

<style>
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  
  th {
    text-align: left;
    padding: 16px;
  }
  
  td {
    text-align: left;
    padding: 16px;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

</style>