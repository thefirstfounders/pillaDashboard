export const HomeBannerData =(setPageName)=>{
    return [
     {
         title:'Available Balance',
         amount:'',
         color:'#FFFFFF',
         bg:'#020202',
         
     },
     {
         title:'Total Collection',
         amount:'',
         color:'#333333',
         bg:'#CCFFF9'
     },
     {
         title:'Crypto Balance ',
         amount:'',
         color:'#333333',
         bg:'#D3FFCC'
     },
     
    ]
 }


 export const BtnActionHome = (setPageName) =>{
    return[
        {
            name:'Fund Account',
            image:'/Images/Home/1.svg',
            action:()=>{setPageName('Fund Account');}
            
        },
        {
            name:'Transfer',
            image:'/Images/Home/2.svg',
            action:()=>{setPageName('Transfer Fund');}

        },
        {
            name:'Pay Rent',
            image:'/Images/Home/3.svg',
            action:()=>{setPageName('Pay Rent');}
        },
        {
            name:'Utility Bills',
            image:'/Images/Home/4.svg',
            action:()=>{}
        },
    ]
}


export const MerchantsCategoriesData =(setPageName) =>{
    return [
        {
            name:'Contractor/Vendor',
            action:()=>{setPageName('Buy Properties')}
        },
        {
            name:'Professional Services',
            action:()=>{setPageName('Buy Properties')}
        },
        {
            name:'Contractor/Vendor',
            action:()=>{setPageName('Buy Properties')}
        },
       
    ]
}