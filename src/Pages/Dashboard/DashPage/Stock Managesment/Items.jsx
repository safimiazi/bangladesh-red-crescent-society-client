import React from "react";
import Itemnav from "../../DashComponent/StockManagesment/Itemnav";
import DataTable from "react-data-table-component";
import { Helmet } from "react-helmet";

const Items = () => {
  const columns = [
    {
      name: "SL.",
      selector: (row) => row.sl,
      sortable: true,
    },
    {
      name: "Warehouse",
      selector: (row) => row.warehouse,
      sortable: true,
    },
    {
      name: "Item",
      selector: (row) => row.item,
      sortable: true,
    },
    {
      name: "Available",
      selector: (row) => row.available,
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

  return (
    <>
     <Helmet>
        <title>BDRCS | Items</title>
      </Helmet>
      {/* nav */}
      <Itemnav />

      <DataTable columns={columns} data={data} pagination></DataTable>
    </>
  );
};

export default Items;
