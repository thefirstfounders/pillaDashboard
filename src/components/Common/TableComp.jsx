
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
  marginBottom,
  noHeader=false,
  HeaderBackgroundColor,
  fontWeight,
}) => {
  
  return (
    <Style MarginBottom={marginBottom} showHeader={noHeader} HeaderBackgroundColor={HeaderBackgroundColor} fontWeight={fontWeight}>
      
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
          pointerOnHover
          noHeader={noHeader}
          persistTableHead={noHeader}
          noDataComponent={message?message:false}

          
            // selectableRows
        />
      
    </Style>
  );
};

const Style = styled.div`
  // width: 100%;

 
  .rdt_TableHeadRow {
    font-size: 14px !important;
    color: #000;
    font-weight: ${props=>props?.fontWeight?props.fontWeight:'600'};
    background: ${props=>props?.HeaderBackgroundColor?props.HeaderBackgroundColor:'transparent'};
     border-start-end-radius: 10px;
     border-start-start-radius: 10px;
    border-bottom:none;
    font-family: "Space Grotesk", sans-serif !important;
    display: ${props=>props?.showHeader?'flex':'none'};
    justify-content:between;
  }
  
   .rdt_TableBody{

      margin-bottom: ${props=>props?.MarginBottom?props?.MarginBottom:`20rem`};
   }
  .rdt_TableCell{
    border:none;
    padding-top:10px;
    font-size: 13px !important;
    white-space:break-spaces !important;
    
  }
  .rdt_TableRow{
    padding:15px 0px;
    font-size: 13px !important;
    // border:1px solid red;
    color:#1A1A1A;
    
  }
`;