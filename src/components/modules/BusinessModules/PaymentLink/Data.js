export const Data1 =[
    {
      title:'Total Amount',
      
    },
    {
        title:'Total Payment'
    },
    {
        title:'Paid Payment'
    },
    {
        title:'Unpaid Payment'
    }
]

export const BtnActionHome = () =>{
    return[
        {
            name:'New Payment Link',
            image:'/Images/Home/1.svg',
            action:()=>{}
        },
       
        
    ]
}


export const PaymentLinkHeader =[
    {
        name: 'Payment ID',
        selector: row => row.title,
    },
    {
        name: 'Customer',
        selector: row => row.year,
    },
    {
        name: 'Payment Link',
        selector: row => row.year,
    },
    {
        name: 'Amount',
        selector: row => row.year,
    },
    {
        name: 'Status',
        selector: row => <div  className="black">{row.year}</div>,
    },
]

export const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]