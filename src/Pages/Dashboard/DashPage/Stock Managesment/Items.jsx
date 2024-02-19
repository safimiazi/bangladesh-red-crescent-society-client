import React, { useEffect, useState } from "react";
import Itemnav from "../../DashComponent/StockManagesment/Itemnav";
import DataTable from "react-data-table-component";
import { Helmet } from "react-helmet";
import { getItemList } from "../../../../Api/Table/StockManagesmentTable";

const Items = () => {

  const[itemlist,setItemlist] = useState(null)
  // get item list data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItemList();
        setItemlist(data.itemlist);
        console.log(data);
      } catch (error) {
        console.error("Error fetching Prefix:", error);
      }
    };

    fetchData();
  }, []);



  const columns = [
    {
      name: "SL.",
      selector: (row) => row.sl,
      sortable: true,
    },
    {
      name: "Item Group",
      selector: (row) => row.itemgroup,
      sortable: true,
    },
    {
      name: "	Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  // data row
  const data =
  (itemlist &&
    itemlist.map((list) => ({
      item: list.item,
      description: list.description,
    }))) ||
  [];


 
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
    <>
     <Helmet>
        <title>BDRCS | Items</title>
      </Helmet>
      {/* nav */}
      <Itemnav />

      <DataTable columns={columns} data={data} pagination customStyles={customStyles}></DataTable>
    </>
  );
};

export default Items;
