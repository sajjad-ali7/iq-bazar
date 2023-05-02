import CheckoutInputs from "@/components/CheckoutInputs";
import { calcTotalPrice, priceFormatter } from "@/helpers";
import { cartItemsState, showCartState } from "@/recoil";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
const Checkout = () => {
  const [, showCart] = useRecoilState(showCartState);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);

  useEffect(() => {
    showCart(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-bgColor h-screen">
      <div className="w-11/12 md:w-3/4 m-auto flex md:flex-row flex-col gap-5 py-10 max-md:pb-20">
        <div className="md:w-2/3 flex flex-col gap-5">
          <CheckoutInputs
            name={"phoneNumber"}
            header={"Phone Number"}
            type={"tel"}
            number={1}
          />
          <CheckoutInputs name={"name"} header={"Name"} number={2} />
          <CheckoutInputs
            name={"billingAddress"}
            header={"Billing Address"}
            number={3}
          />
          <CheckoutInputs
            name={"shippingAddress"}
            header={"Shipping Address"}
            number={4}
          />
          <CheckoutInputs
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
          </CheckoutInputs>
        </div>
        <div className="md:w-1/3">
          <YourOrders cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

const YourOrders = ({ cartItems }) => {
  return (
    <div>
      <h1 className="text-center text-xl font-bold">Your Orders</h1>
      <div className="flex flex-col gap-2 py-6">
        {cartItems.length > 0 ? (
          cartItems?.map((el) => (
            <div key={el.id} className="flex items-center justify-between">
              <div className="flex gap-1">
                <strong>{el.amount}</strong>
                <span>x</span>{" "}
                <p title={el.name}>
                  {el.name.length > 20 ? `${el.name.slice(0, 20)}...` : el.name}
                </p>
              </div>
              <p>$ {el.price}</p>
            </div>
          ))
        ) : (
          <h1 className="text-center text-2xl">No Orders Yet</h1>
        )}
      </div>

      <hr />

      <div className="flex flex-col gap-2 py-3 mb-2">
        <p className="flex justify-between items-center">
          <span>Total</span>{" "}
          <span>{priceFormatter(calcTotalPrice(cartItems))}</span>
        </p>
      </div>

      <button className="bg-fontColor p-3 text-center text-white rounded-lg font-bold w-full">
        Check Availability
      </button>
    </div>
  );
};

const SelectBtn = ({ date, fromTo }) => {
  return (
    <button className="border focus:scale-110 focus:bg-bgColor rounded-md hover:bg-drawerBg transition-all duration-300 flex flex-col gap-2 text-center items-center border-fontColor p-2">
      <p>{date}</p>
      <p>{fromTo}</p>
    </button>
  );
};
