import React, { useState } from "react";
import { Table as AntTable } from "antd";

function convertColumns (columns) {
    return columns.map(column =>({...column ,dataIndex : column.key}))
}


export default function Table({data , columns , rowKey='id' , ...props}) {

    const [tableColumns] = useState(()=>convertColumns(columns))

  return (
    <div>
        <AntTable
        dataSource ={data}
        rowKey = {rowKey}
        columns ={tableColumns}
        {...props}
        />
        
    </div>
  )
}
