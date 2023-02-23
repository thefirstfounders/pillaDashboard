export const TargetsData =(setPageName)=>{
   return [
        {
            name:'Rent Savings',
            amount:'₦ 50,000.00',
            targetAmount:' ₦ 400,000.00 ',
            action:()=>setPageName('RentSaving')
            
        },
        {
            name:'Home Ownership Savings',
            amount:'₦ 200,000.00',
            targetAmount:' ₦ 400,000.00 ',
            action:()=>setPageName('Home Ownership Savings')

        },
    ]
}