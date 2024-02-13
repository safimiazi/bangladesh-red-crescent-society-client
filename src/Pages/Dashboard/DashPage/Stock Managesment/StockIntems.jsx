import React from 'react';
import StockIntemsnav from '../../DashComponent/StockManagesment/StockIntemsnav';
import { Helmet } from 'react-helmet';
import StockSummarynav from '../../DashComponent/StockManagesment/StockSummarynav';
import DataTable from 'react-data-table-component';

const StockIntems = () => {

    const columns = [

        {
            name : 'SL.',
            selector : row => row.sl,
            sortable:true,
        },
        {
            name : 'Stock Item',
            selector : row => row.stockitem,
            sortable:true,
        },
        {
            name : 'Stock Warehouse Level',
            selector : row => row.stockwarehouselevel,
            sortable:true,
        },
        {
            name : 'Stock In Quntity',
            selector : row => row.stockinquntity,
            sortable:true,
        },
        {
            name : 'Date',
            selector : row => row.date,
            sortable:true,
        },
     
        {
            name : 'Action',
            selector : row => row.action,
            sortable:true,
        },
     
     
      
    ]

  const data =[
    {
        id:1,
        sl:'ashikur',
        stockitem : 'ashikur@gmail.com',
        stockwarehouselevel:'17',
        stockinquntity:'fnd',
        date:'fnd',
        action:'fnd'

    },
    {
        id:1,
        sl:'ashikur',
        stockitem : 'ashikur@gmail.com',
        stockwarehouselevel:'17',
        stockinquntity:'fnd',
        date:'fnd',
        action:'fnd'

    },
    {
        id:1,
        sl:'ashikur',
        stockitem : 'ashikur@gmail.com',
        stockwarehouselevel:'17',
        stockinquntity:'fnd',
        date:'fnd',
        action:'fnd'

    },
    {
        id:1,
        sl:'ashikur',
        stockitem : 'ashikur@gmail.com',
        stockwarehouselevel:'17',
        stockinquntity:'fnd',
        date:'fnd',
        action:'fnd'

    },
  
  ]
    return (
  
            
            <div className="">
      <Helmet>
        <title>BDRCS | Stock In Items</title>
      </Helmet>





     {/* data table */}
      <div>
        {/* navber */}
      <StockIntemsnav/>
        <DataTable  columns={columns}
            data={data} pagination>
          
        </DataTable>
      </div>

    </div>
       
    );
};

export default StockIntems;