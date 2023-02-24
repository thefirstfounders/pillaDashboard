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
      action: () => setPageName("BVN Verification"),
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
