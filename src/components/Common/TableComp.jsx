
import DataTable from "react-data-table-component";

import styled from "styled-components";

//import movies from "./movies";



export const TableCompData = ({
  title,
  data,
  pagination,
  columns,
  selectableRows,
  progressPending = false,
  setIsSelected = {},
  message,
  marginBottom
}) => {
  
  return (
    <Style MarginBottom={marginBottom}>
      
        <DataTable
          responsive={true}
          title={title}
          columns={columns}
          data={data ? data : []}
          defaultSortFieldId={1}
          // sortIcon={<SortIcon />}
          pagination={pagination ? true : false}
          // // onSelectedRowsChange={handleRowSelected}
          selectableRows={selectableRows ? true : false}
          progressPending={progressPending}
          noHeader={false}
          
          persistTableHead={false}
          noDataComponent={message?message:false}

          
            // selectableRows
        />
      
    </Style>
  );
};

const Style = styled.div`
  // width: 100%;

 
  .rdt_TableHeadRow {
    font-size: 15px !important;
    color: #fff;
    font-weight: 600;
    background:#8B313A;
    border-start-end-radius: 10px;
    border-start-start-radius: 10px;
   display:none
  }
  
   .rdt_TableBody{

      margin-bottom: ${props=>props?.MarginBottom?props?.MarginBottom:`20rem`};
   }
  .rdt_TableCell{
    border:none;
    padding:10px;
    font-size: 14px !important;
  }
  .rdt_TableRow{
    padding:15px 0px;
    font-size: 14px !important;
    // border:1px solid red;
  }
`;