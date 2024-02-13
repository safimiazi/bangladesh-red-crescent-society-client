import React from "react";
import { Helmet } from "react-helmet";
import StockSummarynav from "../../DashComponent/StockSummarynav";
import DataTable from "react-data-table-component";
const StockSummary = () => {

    const columns = [

        {
            name : 'SL.',
            selector : row => row.sl,
            sortable:true,
        },
        {
            name : 'Warehouse',
            selector : row => row.warehouse,
            sortable:true,
        },
        {
            name : 'Item',
            selector : row => row.item,
            sortable:true,
        },
        {
            name : 'Available',
            selector : row => row.available,
            sortable:true,
        },
     
      
    ]

  const data =[
    {
        id:1,
        sl:'ashikur',
        warehouse : 'ashikur@gmail.com',
        item:'17',
        available:'fnd'

    },
    {
        id:1,
        sl:'ashikur',
        warehouse : 'ashikur@gmail.com',
        item:'17',
        available:'fnd'

    },
    {
        id:1,
        sl:'ashikur',
        warehouse : 'ashikur@gmail.com',
        item:'17',
        available:'fnd'

    },
    {
        id:1,
        sl:'ashikur',
        warehouse : 'ashikur@gmail.com',
        item:'17',
        available:'fnd'

    },
  ]

  return (
    <div className="">
      <Helmet>
        <title>BDRCS | Stock Summary</title>
      </Helmet>





     {/* data table */}
      <div>
        {/* navber */}
      <StockSummarynav/>
        <DataTable   columns={columns}
            data={data} pagination>
          
        </DataTable>
      </div>

    </div>
  );
};

export default StockSummary;
