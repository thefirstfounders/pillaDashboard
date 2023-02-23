import { RiErrorWarningFill } from "react-icons/ri"

export const SideBarData = [
    {
        name:'Home',
        icon1:'/Images/SideBar/home.svg',
        icon2:'/Images/SideBar/homea.svg',
        activeNo:1,
        path:'/'
    },
    {
        name:'Pilla Card',
        icon1:'/Images/SideBar/2a.svg',
        icon2:'/Images/SideBar/1.png',
        activeNo:2,
        path:'/card'
    },
    {
        name:'Pilla Savings',
        icon1:'/Images/SideBar/2a.svg',
        icon2:'/Images/SideBar/2.png',
        activeNo:3,
        path:'/savings'
    },
    {
        name:'Pilla Finance',
        icon1:'/Images/SideBar/2a.svg',
        icon2:'/Images/SideBar/3.svg',
        activeNo:4,
        path:'/'
    },
    {
        name:'Pilla Insure',
        icon1:'/Images/SideBar/2a.svg',
        icon2:'/Images/SideBar/4.svg',
        activeNo:5,
        path:'/'
    },
    {
        name:'Pilla Crypto',
        icon1:'/Images/SideBar/2a.svg',
        icon2:'/Images/SideBar/5.svg',
        activeNo:6,
        path:'/'
    },
    {
        name:'Profile',
        icon1:'/Images/SideBar/2a.svg',
        icon2:'/Images/SideBar/6.svg',
        activeNo:7,
        path:'/'
    },
    
]

export const HomeBannerData =()=>{
   return [
    {
        title:'Available Balance',
        amount:'',
        color:'#FFFFFF',
        bg:'#020202'
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
            action:()=>{setPageName('Verification_Status')}
        },
        {
            name:'Set Transactin Pin',
            icon:<RiErrorWarningFill color="red" size={30} className="me-2" />,
            action:()=>{setPageName('Verification_Status')}
        },
    ]
}

export const MerchantsCategoriesData =() =>{
    return [
        {
            name:'Buy Property',
        },
        {
            name:'Property Tax & Government Levies',
        },
    ]
}