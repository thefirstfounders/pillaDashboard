import { BsCalendar4Event } from "react-icons/bs"

export const HowFrequentData = () => {
    return [
        {
            name:'Daily',
            action:()=>{}
        },
        {
            name:'Weekly',
            action:()=>{}
        },
        {
            name:'Monthly',
            action:()=>{}
        },
        {
            name:'Just Once',
            action:()=>{}
        },
    ]
}

export const HowMuchData = () => {
    return [
        {
            name:'₦ 1,000.00',
            action:()=>{}
        },
        {
            name:'₦ 2,000.00',
            action:()=>{}
        },
        {
            name:'₦ 5,000.00',
            action:()=>{}
        },
        {
            name:'₦ 10,000.00',
            action:()=>{}
        },
        {
            name:'₦ 20,000.00',
            action:()=>{}
        },
        {
            name:'₦ 50,000.00',
            action:()=>{}
        },
    ]
}
export const HowLongData = () => {
    return [
        {
            id:1,
            name:'3 Month',
            action:()=>{}
        },
        {
            id:2,
            name:'6 Month',
            action:()=>{}
        },
        {
            id:3,
            name:'9 Month',
            action:()=>{}
        },
        {
            id:4,
            name:'1 Year',
            action:()=>{}
        },
        {
            id:5,
            name:<span><BsCalendar4Event size={20} className="me-2"/> Let me choose</span>,
            action:()=>{}
        },
        
    ]
}


export const HowFrequentButtonState = [
    {
        border:' 1px solid #00AA96',
        background:'#E5FFFC',
        color:'#00AA96'
    },
    {
       
        background:'#F2F2F2',
        color:'#1A1A1A'
    },
]



