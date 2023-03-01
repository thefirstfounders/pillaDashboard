import ButtonComp from "@/components/Ui/Button";


export default function LinkSalaryBankAccount({onNext}) {
  return (
    <section>
      <div className="mb-4">
        <h4 className="fw-bold">Link Salary Bank Account</h4>
        <div className="h6tt gray">
          Make sure the bank is linked is your salary account. we going to fetch
          financial transaction, balance, income, and identity data.
        </div>

        
        <div className='my-5'>
        <ButtonComp
        onClick={onNext}
        btnText={<h4 className='mb-0'>Proceed</h4>}
        btnClassName='bg-garyI py-2 text-white w-100'
        />
    </div>
      </div>
    </section>
  );
}
