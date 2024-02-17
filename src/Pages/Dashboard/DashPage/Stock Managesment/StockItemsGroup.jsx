import React from 'react';
import StockItemsGroupnav from '../../DashComponent/StockManagesment/StockItemsGroupnav';
import { Helmet } from 'react-helmet';
import DataTable from 'react-data-table-component';

const StockItemsGroup = () => {

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

  // table style
  const customStyles = {

    rows : {
     style: {
       fontSize: '14px',
       color: 'gray',
       fontWeight: 600,
       border: '1px solid #F2F2F2' 
     }
     
     
    },

    headCells : {
     style: {
       fontSize: '15px',
       color: 'black',
       text:'center',
       fontWeight: 700,
       border: '1px solid #F2F2F2' ,
       backgroundColor: '#3C8DBC'
     }}
     ,

     cells : {
       style: {
         border: '1px solid #F2F2F2' 
       }
     }
    
 }




    return (
        <div>
           
        
         

         <Helmet>
     <title>BDRCS | Item Group List</title>
   </Helmet>
  {/* navber */}
  <StockItemsGroupnav/>

   <DataTable columns={columns} data={data} pagination customStyles={customStyles}></DataTable>
  
        </div>
    );
};

export default StockItemsGroup;