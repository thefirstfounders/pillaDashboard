import PageSwitch from "@/components/Common/PageSwitch";
import React, { useState } from "react";
import Message from "../../Home/Message";
import Progress from "../../Saving/Progress";
import CheckCreditMain from "./CheckCreditMain";
import LinkSalaryBankAccount from "./LinkSalaryBankAccount";

export default function CheckCredit({setPageNameMain}) {
  const [pageName, setPageName] = useState("main");

  const usePage = [
    {
      name: "main",
      component: (
        <CheckCreditMain
          onNext={() => setPageName("Link Salary Bank Account")}
        />
      ),
    },
    {
      name: "Link Salary Bank Account",
      component: (
        <LinkSalaryBankAccount onNext={() => setPageName("Message")} />
      ),
    },
    {
      name: "Message",
      component: (
        <Message
          btnBG="#00AA96"
          title="Credit Check"
          desc="Verification takes 1-3 day, check your mail for update"
          onNext={()=>{
            setPageName();
            setPageNameMain()}}
        />
      ),
    },
  ];

  return (
    <section>
      <div className="mb-5">
        <Progress
          col={"col-6"}
          pageName={pageName}
          arrayList={["main", "Link Salary Bank Account"]}
          arrayListI={["main", "Link Salary Bank Account"]}
        />
      </div>
      <PageSwitch pageArray={usePage} pageName={pageName} />
    </section>
  );
}
