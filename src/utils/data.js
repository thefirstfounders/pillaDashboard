import { RiErrorWarningFill } from "react-icons/ri"

export const SideBarData = [
    {
        name:'Home',
        icon1:'',
        icon2:'/Images/SideBar/home.svg',
        activeNo:1
    },
    {
        name:'Pilla Card',
        icon1:'',
        icon2:'/Images/SideBar/1.png'
    },
    {
        name:'Pilla Savings',
        icon1:'',
        icon2:'/Images/SideBar/2.png'
    },
    {
        name:'Pilla Finance',
        icon1:'',
        icon2:'/Images/SideBar/3.svg'
    },
    {
        name:'Pilla Insure',
        icon1:'',
        icon2:'/Images/SideBar/4.svg'
    },
    {
        name:'Pilla Crypto',
        icon1:'',
        icon2:'/Images/SideBar/5.svg'
    },
    {
        name:'Profile',
        icon1:'',
        icon2:'/Images/SideBar/6.svg'
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