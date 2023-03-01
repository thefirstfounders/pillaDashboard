export const GetStartedWithPillaData = (setPageName) => {
  return [
    {
      name: "BVN Verification ",
      desc: "Enter BVN to complete BVN verification",
      icon: "/Images/Home/house.png",
      action: () => setPageName("BVN Verification"),
    },
    {
      name: "Identity Verification ",
      desc: "Upload ID to complete identity verification",
      icon: "/Images/Home/ID.png",
      action: () => setPageName("Identity Verification"),
    },
    {
      name: "Proof of address",
      desc: "upload an utility bill",
      icon: "/Images/Home/address.png",
      action: () => setPageName("Proof of address"),
    },
  ];
};

export const IdentityVerificationData = (setDefaultSave) => {
  return [
    {
      name: "NIN Card",
      action: () => setDefaultSave("NIN Card"),
    },
    {
      name: "Driver License",
      action: () => setDefaultSave("Driver License"),
    },
    {
      name: "Passport",
      action: () => setDefaultSave("Passport"),
    },
  ];
};


export const DocTypeData = [
  {
    label:'Electricity Bill',
    value:'Electricity Bill'
  },
  {
    label:'Water Bill',
    value:'Water Bill'
  },
  {
    label:'Waste Bill',
    value:'Waste Bill'
  },
  {
    label:'Dstv/Cable Bill',
    value:'Dstv/Cable Bill'
  },
]

export const BuyPropertiesData=()=>{
  return [
    {
      name:'PropertyVileji',
      desc:'Real estate agency',
      action: () => setPageName("PropertyVileji"),
    },
    {
      name:'Merlwood Realtors',
      desc:'Real estate agency',
      action: () => setPageName(""),
    },
    {
      name:'Oparah Realty',
      desc:'Real estate agency',
      action: () => setPageName(""),
    },
    {
      name:'Throkaz Property',
      desc:'Real estate agency',
      action: () => setPageName(""),
    },
    {
      name:'Zoyols Realtors',
      desc:'Real estate agency',
      action: () => setPageName(""),
    },
    {
      name:'Centurystone',
      desc:'Real estate agency',
      action: () => setPageName(""),
    },
    {
      name:'Realtor Baruwa',
      desc:'Real estate agency',
      action: () => setPageName(""),
    },
  ]
}