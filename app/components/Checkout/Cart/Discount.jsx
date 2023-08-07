"use client";

import { useState, useRef } from "react";
import Button from "../../UI/Button";
import Accordion from "../../Product/Accordion";

const Discount = () => {
  const [error, setError] = useState(false);

  const discountRef = useRef();

  const handleDiscountCode = (e) => {
    e.preventDefault();
    setError(false);
    if (discountRef.current.value !== "JlaK819z0") {
      setError(true);
    }
  };

  const discountForm = (
    <form className="pt-6">
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          ref={discountRef}
          className="h-10 basis-4/5 border-2 border-slate-200 indent-2"
          type="text"
          placeholder="Enter Discount Code"
        ></input>
        <Button className="!py-2" text="Apply" onClick={handleDiscountCode} />
      </div>
      {error && (
        <p className="text-sm text-red-600">
          The code entered is not valid, please try again.
        </p>
      )}
    </form>
  );

  //ACCORDION IS BUGGED ON THIS PAGE AS IT CLOSES WHEN THE INPUT BOX IS FOCUSED

  return (
    <div className="mt-4 w-full border-t-2 border-neutral-100 py-4 lg:order-3">
      <Accordion
        id="discountCode"
        className="border-none lg:w-1/3"
        heading="Discount Code"
        giftcard
        content={discountForm}
      />
    </div>
  );
};

export default Discount;
