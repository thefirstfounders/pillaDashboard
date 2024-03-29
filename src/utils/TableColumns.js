import FallbackImage from "@/components/Common/ImageWrapper";

export const RecentTransactionsHeader = (TableDropDown) => {
  return [
    {
      name: "name",
      selector: (row) => (
        <div className="d-flex align-items-center">
          <div className="me-2">
            {row?.status.toLowerCase() === "debit" ? (
              <FallbackImage
                src="/Images/Icon/debit.png"
                width={24}
                height={24}
              />
            ) : (
              <FallbackImage
                src="/Images/Icon/credit.png"
                width={24}
                height={24}
              />
            )}
          </div>
          <h5 className="fw-bold black mb-0">{row?.name}</h5>
        </div>
      ),
      //    width:'190px'
    },
    {
      name: <div>Date</div>,
      selector: (row) => (
        <div className="black">
          <h6 className="mb-0 font-2 fw-normal">{row?.date}</h6>
        </div>
      ),
      //   width:'230px'
    },
    {
      name: "Status",
      selector: (row) => (
        <div className="">
          <h6 className="mb-0 font-2 fw-normal">{row?.status}</h6>
        </div>
      ),
    },
    {
      name: "Amount",
      selector: (row) => (
        <div
          className={`${
            row?.status.toLowerCase() === "debit"
              ? "text-danger"
              : "text-success"
          }`}
        >
          <h5 className="fw-bold  text-start">{row?.amount}</h5>
        </div>
      ),
    },
  ];
};

export const TransactionsHeader = (TableDropDown) => {
  return [
    {
      name: "Date",
      selector: (row) => (
        <div className="d-flex align-items-center">
          <div className="me-2">
            {row?.status.toLowerCase() === "debit" ? (
              <FallbackImage
                src="/Images/Icon/debit.png"
                width={24}
                height={24}
              />
            ) : (
              <FallbackImage
                src="/Images/Icon/credit.png"
                width={24}
                height={24}
              />
            )}
          </div>
          <div className=" black mb-0 h6tt">{row?.date}</div>
          <div className=" black mb-0 h6tt">{row?.time}</div>
        </div>
      ),
    },
    {
      name:'Amount',
      selector: (row) => (
        <div className="black">
          <h6 className="mb-0 font-2 fw-normal">{row?.amount}</h6>
        </div>
      ),
      //   
    },
    {
      name: "Description",
      selector: (row) => (
        <div className="">
          <h6 className="mb-0 font-2 fw-normal">{row?.desc}</h6>
        </div>
      ),
      // width:'230px'
    },
    {
      name: "Balance",
      selector: (row) => (
        <div
          className={``}
        >
          <div className="h6tt  text-start">{row?.balance}</div>
        </div>
      ),
    },
  ];
};
export const TransactionsHeader1 = (TableDropDown) => {
  return [
    {
      name: 'Date',
      selector: row =>     
       <div className="d-flex align-items-center">
      <div className="me-2">
        {row?.status.toLowerCase() === "debit" ? (
          <FallbackImage
            src="/Images/Icon/debit1.png"
            width={24}
            height={24}
          />
        ) : (
          <FallbackImage
            src="/Images/Icon/credit1.png"
            width={24}
            height={24}
          />
        )}
      </div>
      <div>
      <div className=" black mb-0 h6tt">{row?.date}</div>
      <div className=" black mb-0 h6tt">{row?.time}</div>
      </div>
    </div>,
    
  },

  {
      name: 'Amount',
      selector: row => row.amount,
      
      width:'100px'
  },
  {
      name: 'Description',
      selector: row => <span className="text-wrap">{row.desc}</span>,
      
  },
  {
      name: 'Balance',
      selector: row => row.balance,
      
  },
  ];
};

export const Data1 = [
  {
    date: "Wed Jan 25 2023 ",
    time: "8:21 am",
    amount: "$1",
    desc: "c0d1d524-4ab3-4555ae75-6c8a72c813c8 - www.pandabuy.com",
    balance: "$5",
    status: "debit",
  },
  {
    date: "Wed Jan 25 2023 ",
    time: "8:21 am",
    amount: "$5",
    desc: "Fund Card - Wallet",
    balance: "$6",
    status: "credit",
  },
];

export const RecentTransactionsData = [
  {
    name: "Transfer",
    date: "Aug 14 2022 | 08:24AM",
    status: "Debit",
    amount: " - ₦10,000.00",
  },
  {
    name: "Transfer",
    date: "Aug 14 2022 | 08:24AM",
    status: "Credit",
    amount: " ₦10,000.00",
  },
];


export const CryptoTransactionsData = [
  {
    name: "BTC Recieved",
    date: "Aug 14 2022",
    status: "Success",
    amount: "0.0001234",
  },
  {
    name: "Debit",
    date: "Aug 14 2022 ",
    status: "Pending",
    amount: "0.0001234",
  },
];
export const CryptoTransactionsHeader = (TableDropDown) => {
  return [
    {
      name: "Type",
      selector: (row) => (
        <div className="d-flex align-items-center gap-3">
          <div className="">
            {row?.status.toLowerCase() === "success" ? (
              <FallbackImage
                src="/Images/Icon/credit1.png"
                width={24}
                height={24}
              />
            ) : (
              <FallbackImage
                src="/Images/Icon/debit1.png"
                width={24}
                height={24}
              />
            )}
          </div>
          <div className=" black mb-0 h6tt">{row?.name}</div>
        </div>
      ),
         width:'190px'
    },
    {
      name: "Amount",
      selector: (row) => (
        <div
          className={``}
        >
          <div className=" h6tt text-start">{row?.amount}</div>
        </div>
      ),
    },
    {
      name: <div>Date</div>,
      selector: (row) => (
        <div className="black">
          <div className="mb-0 h6tt font-2 fw-normal ">{row?.date}</div>
        </div>
      ),
      //   width:'230px'
    },
    {
      name: "Status",
      selector: (row) => (
        <div className={`${row?.status==='Pending'?'pending':'text-success'}`}>
          <div className="mb-0 font-2 fw-normal h6tt">{row?.status}</div>
        </div>
      ),
    },
   
  ];
};



export const AccountingTransactionsData = [
  {
    name: "BTC Recieved",
    date: "Aug 14 2022",
    status: "Success",
    amount: "0.0001234",
    transId:'ID-HGYG127631'
  },
  {
    name: "Debit",
    date: "Aug 14 2022 ",
    status: "Pending",
    amount: "0.0001234",
    transId:'ID-HGYG127631'
  },
];
export const AccountingTransactionsHeader = (TableDropDown) => {
  return [
    {
      name: "Type",
      selector: (row) => (
        <div className="d-flex align-items-center gap-3">
          <div className="">
            {row?.status.toLowerCase() === "success" ? (
              <FallbackImage
                src="/Images/Icon/credit1.png"
                width={24}
                height={24}
              />
            ) : (
              <FallbackImage
                src="/Images/Icon/debit1.png"
                width={24}
                height={24}
              />
            )}
          </div>
          <div className=" black mb-0 h6tt">{row?.name}</div>
        </div>
      ),
         width:'190px'
    },
    {
      name: "Transaction ID",
      selector: (row) => (
        <div
          className={``}
        >
          <div className=" h6tt text-start">{row?.transId}</div>
        </div>
      ),
    },
    {
      name: "Amount",
      selector: (row) => (
        <div
          className={``}
        >
          <div className=" h6tt text-start">{row?.amount}</div>
        </div>
      ),
    },
    {
      name: <div>Date</div>,
      selector: (row) => (
        <div className="black">
          <div className="mb-0 h6tt font-2 fw-normal ">{row?.date}</div>
        </div>
      ),
      //   width:'230px'
    },
    {
      name: "Status",
      selector: (row) => (
        <div className={`${row?.status==='Pending'?'pending':'text-success'}`}>
          <div className="mb-0 font-2 fw-normal h6tt">{row?.status}</div>
        </div>
      ),
    },
   
  ];
};