export const PillaFinanceData =(setPageName)=>{
    return [
     {
         title:'Pilla Finance',
         amount:'',
         color:'#333333',
         bg:'#FFFFFF',
         
     },
     {
         title:'Credit Limit',
         amount:'',
         color:'#333333',
         bg:'#FFFFFF',
         desc:'Check Credit',
         action:()=>setPageName('Check Credit')
         
     },
    
    ]
 }

 export const HowLongData = () => {
    return [
        {
            id:1,
            name:'1 Month',
            action:()=>{}
        },
        {
            id:2,
            name:'3 Month',
            action:()=>{}
        },
        {
            id:3,
            name:'6 Month',
            action:()=>{}
        },
        
       
        
    ]
}