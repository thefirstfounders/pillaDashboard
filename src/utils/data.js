import { RiErrorWarningFill } from "react-icons/ri"

export const SideBarData = [
    {
        name:'Home',
        icon1:'/Images/SideBar/home.png',
        icon2:'/Images/SideBar/home1.png',
        activeNo:1,
        path:'/'
    },
    {
        name:'Pilla Card',
        icon1:'/Images/SideBar/card1.png',
        icon2:'/Images/SideBar/card.png',
        activeNo:2,
        path:'/card'
    },
    {
        name:'Pilla Savings',
        icon1:'/Images/SideBar/saving1.png',
        icon2:'/Images/SideBar/saving.png',
        activeNo:3,
        path:'/savings'
    },
    {
        name:'Pilla Finance',
        icon1:'/Images/SideBar/finance1.png',
        icon2:'/Images/SideBar/finance.png',
        activeNo:4,
        path:'/finance'
    },
    {
        name:'Pilla Insure',
        icon1:'/Images/SideBar/insure.png',
        icon2:'/Images/SideBar/insure1.png',
        activeNo:5,
        path:'/insure'
    },
    {
        name:'Pilla Crypto',
        icon1:'/Images/SideBar/crypto2.png',
        icon2:'/Images/SideBar/5.svg',
        activeNo:6,
        path:'/crypto'
    },
    {
        name:'Settings',
        icon1:'/Images/SideBar/setting2.png',
        icon2:'/Images/SideBar/setting1.png',
        activeNo:7,
        path:'/settings'
    },
    
]
export const SideBarBusinessData = [
    {
        name:'Get Started',
        icon1:'/Images/SideBar/gettingStarted.png',
        icon2:'/Images/SideBar/gettingStarted1.png',
        activeNo:1,
        path:'/business/get_started',
        type:true
    },
    {
        name:'Verification',
        icon1:'/Images/SideBar/verification1.png',
        icon2:'/Images/SideBar/verification.png',
        activeNo:2,
        path:'/business/verification',
        type:true
    },
    {
        name:'Dashboard',
        icon1:'/Images/SideBar/home2.png',
        icon2:'/Images/SideBar/home.png',
        activeNo:3,
        path:'/business/'
    },
    {
        name:'Pilla Account',
        icon1:'/Images/SideBar/account1.png',
        icon2:'/Images/SideBar/account.png',
        activeNo:4,
        path:'/business/account'
    },
    {
        name:'Pilla Card',
        icon1:'/Images/SideBar/cardA.png',
        icon2:'/Images/SideBar/cardB.png',
        activeNo:5,
        path:'/business/card'
    },
    {
        name:'Pilla Savings',
        icon1:'/Images/SideBar/savingA.png',
        icon2:'/Images/SideBar/savingB.png',
        activeNo:6,
        path:'/business/savings'
    },
    {
        name:'Pilla Insure',
        icon1:'/Images/SideBar/insureA.png',
        icon2:'/Images/SideBar/insureB.png',
        activeNo:7,
        path:'/business/insure'
    },
    {
        name:'Pilla Crypto',
        icon1:'/Images/SideBar/cryptoA.png',
        icon2:'/Images/SideBar/cryptoB.png',
        activeNo:8,
        path:'/business/crypto'
    },
    {
        name:'Pilla Finance',
        icon1:'/Images/SideBar/financeA.png',
        icon2:'/Images/SideBar/financeB.png',
        activeNo:9,
        path:'/business/finance'
    },
    {
        name:'Payment Link',
        icon1:'/Images/SideBar/linkC.png',
        icon2:'/Images/SideBar/linkB.png',
        activeNo:10,
        path:'/business/payment_link'
    },
   
    
    {
        name:'Settings',
        icon1:'/Images/SideBar/setting2.png',
        icon2:'/Images/SideBar/settingB.png',
        activeNo:11,
        path:'/business/settings'
    },
    
]

export const HomeBannerData =(setPageName)=>{
   return [
    {
        title:'Available Balance',
        amount:'',
        color:'#FFFFFF',
        bg:'#020202',
        
    },
    {
        title:'Pilla Finance',
        amount:'',
        color:'#333333',
        bg:'#CCFFF9'
    },
    {
        title:'Pilla Savings',
        amount:'',
        color:'#333333',
        bg:'#D3FFCC'
    },
    {
        title:'Crypto Balance',
        amount:'',
        color:'#333333',
        bg:'#CCD7FF'
    },
   ]
}


export const BtnActionHome = () =>{
    return[
        {
            name:'Add Money',
            image:'/Images/Home/1.svg',
            action:()=>{}
        },
        {
            name:'Transfer',
            image:'/Images/Home/2.svg',
            action:()=>{}

        },
        {
            name:'Pay Rent',
            image:'/Images/Home/3.svg',
            action:()=>{}
        },
        {
            name:'Pay Bills',
            image:'/Images/Home/4.svg',
            action:()=>{}
        },
    ]
}

export const ActionNeededButtonData =(setPageName) =>{
    return [
        {
            name:'Verification Status',
            icon:<RiErrorWarningFill color="red" size={30} className="me-2" />,
            action:()=>{setPageName('Get started with Pilla')}
        },
        {
            name:'Set Transaction Pin',
            icon:<RiErrorWarningFill color="red" size={30} className="me-2" />,
            action:()=>{setPageName('Verification_Status')}
        },
    ]
}

export const MerchantsCategoriesData =(setPageName) =>{
    return [
        {
            name:'Buy Property',
            action:()=>{setPageName('Buy Properties')}
        },
        {
            name:'Property Tax & Government Levies',
        },
    ]
}