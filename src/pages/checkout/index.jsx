import dynamic from "next/dynamic";
import React from "react";

const index = () => {
  const DynamicCheckoutInputs = dynamic(
    () => "../../components/CheckoutInputs"
  );
  return (
    <div className="bg-bgColor h-screen">
      <div className="w-11/12 md:w-3/4 m-auto flex gap-5 py-10 max-md:pb-20">
        <div className="w-2/3 flex flex-col gap-5">
          <DynamicCheckoutInputs
            name={"phoneNumber"}
            header={"Phone Number"}
            type={"tel"}
            number={1}
          />
          <DynamicCheckoutInputs name={"name"} header={"Name"} number={2} />
          <DynamicCheckoutInputs
            name={"billingAddress"}
            header={"Billing Address"}
            number={3}
          />
          <DynamicCheckoutInputs
            name={"shippingAddress"}
            header={"Shipping Address"}
            number={4}
          />
          <DynamicCheckoutInputs
            name={"shippingAddress"}
            header={"Shipping Address"}
            number={5}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <SelectBtn
                date={"Express Delivery"}
                fromTo={"90 min express delivery"}
              />
              <SelectBtn date={"Morning"} fromTo={"8.00 AM - 11.00 AM"} />
              <SelectBtn date={"Noon"} fromTo={"11.00 AM - 2.00 PM"} />
              <SelectBtn date={"Afternoon"} fromTo={"2.00 PM - 5.00 PM"} />
              <SelectBtn date={"Evening"} fromTo={"5.00 PM - 8.00 PM"} />
            </div>
          </DynamicCheckoutInputs>
        </div>
        <div className="w-1/3">
          <YourOrders />
        </div>
      </div>
    </div>
  );
};

export default index;

const SelectBtn = ({ date, fromTo }) => {
  return (
    <button className="border focus:scale-110 focus:bg-bgColor rounded-md hover:bg-drawerBg transition-all duration-300 flex flex-col gap-2 text-center items-center border-fontColor p-2">
      <p>{date}</p>
      <p>{fromTo}</p>
    </button>
  );
};

const YourOrders = () => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold">Your Orders</h1>
      <div className="flex flex-col gap-2 py-6">
        <p>2</p>
      </div>

      <hr />

      <div className="flex flex-col gap-2 py-3">
        <p className="flex justify-between items-center">
          <span>Sub Total</span> <span>$1,085.45</span>
        </p>
        <p className="flex justify-between items-center">
          <span>Tax</span> <span>Calculated at checkout</span>
        </p>
        <p className="flex justify-between items-center">
          <span>Estimated Shipping</span> <span>Calculated at checkout</span>
        </p>
      </div>

      <button className="bg-fontColor p-3 text-center text-white rounded-lg font-bold w-full">
        Check Availability
      </button>
    </div>
  );
};
