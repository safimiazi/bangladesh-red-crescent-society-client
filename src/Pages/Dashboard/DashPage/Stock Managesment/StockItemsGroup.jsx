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
            name : 'Item Group',
            selector : row => row.itemgroup,
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
       fontWeight: 600,
       border: '1px solid #F2F2F2' ,
       backgroundColor: '#2AA778'
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