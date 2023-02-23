import FallbackImage from "@/components/Common/ImageWrapper";

export const RecentTransactionsHeader=(TableDropDown)=>{

    return [
        {
          name: "name",
          selector: (row) => <div className='d-flex align-items-center'>
            <div className="me-2">
                {row?.status.toLowerCase() === "debit" ?
                 <FallbackImage
                 src='/Images/Icon/debit.png'
                 width={24}
                 height={24}
                 />
                :
                <FallbackImage
                src='/Images/Icon/credit.png'
                width={24}
                height={24}
                />
                }
               
                
            </div>
            <h5 className="fw-bold black mb-0">
                {row?.name}</h5>
          </div>,
        //    width:'190px'
        },
        {
          name: <div>Date</div>,
          selector: (row) => <div className="black">
           <h6 className="mb-0 font-2 fw-normal">{row?.date}</h6>
          </div>,
        //   width:'230px'
        },
        {
          name: "Status",
          selector: (row) => <div className="">
              <h6 className="mb-0 font-2 fw-normal">{row?.status}</h6>
          </div>,
        },
        {
          name: "Amount",
          selector: (row) => <div className={`${row?.status.toLowerCase() ==="debit"?"text-danger":"text-success"}`}>
             <h5 className="fw-bold  text-start">{row?.amount}</h5>
          </div>,
        },
     
         
      ];
  }

  export const TransactionsHeader=(TableDropDown)=>{

    return [
        {
          name: "Date",
          selector: (row) => <div className='d-flex align-items-center'>
            
               
          </div>,
        
        },
        {
          name: <div>Amount</div>,
          selector: (row) => <div className="black">
           <h6 className="mb-0 font-2 fw-normal">{row?.date}</h6>
          </div>,
        //   width:'230px'
        },
        {
          name: "Description",
          selector: (row) => <div className="">
              <h6 className="mb-0 font-2 fw-normal">{row?.status}</h6>
          </div>,
        },
        {
          name: "Balance",
          selector: (row) => <div className={`${row?.status.toLowerCase() ==="debit"?"text-danger":"text-success"}`}>
             <h5 className="fw-bold  text-start">{row?.amount}</h5>
          </div>,
        },
     
         
      ];
  }

  export const Data1 =[
    {
      date:''
    }
  ]

  export const RecentTransactionsData = [
    {
        name:'Transfer',
        date:'Aug 14 2022 | 08:24AM',
        status:'Debit',
        amount:' - ₦10,000.00'
    },
    {
        name:'Transfer',
        date:'Aug 14 2022 | 08:24AM',
        status:'Credit',
        amount:' ₦10,000.00'
    },
  ]