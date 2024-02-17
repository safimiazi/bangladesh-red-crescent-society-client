import React from 'react';
import StockWarehousenav from '../../DashComponent/StockManagesment/StockWarehousenav';
import { Helmet } from 'react-helmet';
import DataTable from 'react-data-table-component';

const StockWarehouse = () => {
    const columns = [
        {
          name: "SL.",
          selector: (row) => row.sl,
          sortable: true,
        },
        {
          name: "Item Group",
          selector: (row) => row.itemrgoup,
          sortable: true,
        },
        {
          name: "Address",
          selector: (row) => row.address,
          sortable: true,
        },
        {
          name: "Longitude",
          selector: (row) => row.longitude,
          sortable: true,
        },
        {
          name: "Latitude",
          selector: (row) => row.latitude,
          sortable: true,
        },
        {
          name: "Actions",
          selector: (row) => row.actions,
          sortable: true,
        },
      ];
    
      const data = [
        {
          id: 1,
          sl: "ashikur",
          warehouse: "ashikur@gmail.com",
          item: "17",
          available: "fnd",
        },
        {
          id: 1,
          sl: "ashikur",
          warehouse: "ashikur@gmail.com",
          item: "17",
          available: "fnd",
        },
        {
          id: 1,
          sl: "ashikur",
          warehouse: "ashikur@gmail.com",
          item: "17",
          available: "fnd",
        },
        {
          id: 1,
          sl: "ashikur",
          warehouse: "ashikur@gmail.com",
          item: "17",
          available: "fnd",
        },
      ];


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
        <title>BDRCS | Add New WareHouse</title>
      </Helmet>
     {/* navber */}
     <StockWarehousenav/>

      <DataTable columns={columns} data={data} pagination customStyles={customStyles}></DataTable>
        </div>
    );
};

export default StockWarehouse;