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