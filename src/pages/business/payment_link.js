import PaymentLink from "@/components/modules/BusinessModules/PaymentLink/PaymentLink";
import BusinessAccountLayout from "@/Layout/BusinessAccountLayout";
import React from "react";

export default function Payment_link() {
  return (
    <BusinessAccountLayout active={10}>
      <PaymentLink />
    </BusinessAccountLayout>
  );
}
