import { useState } from "react";
import Swal from "sweetalert2";
import { AdobeExpress } from "../scripts/Images";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([
    {
      id: 1,
      imageUrl: AdobeExpress,
      color: "#727274",
      quantity: 1,
      name: "DJI MOVIC 3 Pro",
      price: 2000,
    },
    {
      id: 2,
      imageUrl: AdobeExpress,
      color: "#727274",
      quantity: 1,
      name: "Pro",
      price: 1000,
    },
  ]);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    Swal.fire({
      title: "Do you want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No, Cancel!",
      customClass: {
        confirmButton:
          "bg-red-600 hover:bg-red-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-md mr-2 md:mr-3 cursor-pointer",
        cancelButton:
          "bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-md ml-2 md:ml-3 cursor-pointer",
      },
      buttonsStyling: false,
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));

        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
          confirmButtonText: "OK",
          customClass: {
            confirmButton:
              "bg-[#0F334C] hover:bg-green-700 text-white px-2 md:px-7 py-2 md:py-3 rounded-md cursor-pointer",
          },
          buttonsStyling: false,
        });
      }
    });
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const discount = 300;
  const Total = subtotal - discount;

  return (
    <div className="my-[100px]">
      <div className="bg-[#EAF6FF] wrapper">
        <div>
          <h1 className="font-[700] lg:text-[56px] md:text-[46px] sm:text-[36px] text-[20px] p-6">
            Shopping Cart
            <hr className="text-[#7B7B7B]  w-[60px] md:w-[120px] lg:w-[190px] mt-1 md:mt-2 lg:mt-2" />
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg text-sm md:text-base">
            <thead>
              <tr className="border-b border-[#7B7B7B]">
                <th className="py-3 px-4 font-[600] lg:text-[20px] md:text-[16px] sm:text-[10px] text-[8px] ">
                  Product
                </th>
                <th className="py-3 px-4 font-[600] lg:text-[20px] md:text-[16px] sm:text-[10px] text-[8px]">
                  Color
                </th>
                <th className="py-3 px-4 font-[600] lg:text-[20px] md:text-[16px] sm:text-[10px] text-[8px]">
                  Quantity
                </th>
                <th className="py-3 px-4 font-[600] lg:text-[20px] md:text-[16px] sm:text-[10px] text-[8px]">
                  Total
                </th>
                <th className="py-3 px-4 font-[600] lg:text-[20px] md:text-[16px] sm:text-[10px] text-[8px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="text-center">
                  <td className="lg:pl-1  flex lg:flex-row md:flex-row lg:flex-row sm:flex-col flex-col items-center justify-start  lg:gap-4  md:gap-2 gap-1 py-4 ml-6">
                    <img
                      src={item.imageUrl}
                      alt="Product"
                      className="lg:w-20 lg:h-20 w-10 h-10 mb-2"
                    />
                    <p className="font-[700] lg:text-[20px] md:text-[16px] sm:text-[10px] text-[8px]">
                      {item.name}
                    </p>
                  </td>
                  <td className="py-3 px-4">
                    <div
                      className="lg:w-6 md:w-4 w-2 lg:h-6 md:h-4 h-2 mx-auto"
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </td>
                  <td className="">
                    <div className="flex items-center justify-center lg:gap-2 gap-1 border border-[#7B7B7B] lg:p-2 p-1 rounded-md">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                        className="lg:px-2 px-1 text-[#7B7B7B] font-[500] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[10px]"
                      >
                        <FiMinus />{" "}
                      </button>
                      <span className="font-[500] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[10px]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="lg:px-2 px-1 text-[#7B7B7B] font-[500] lg:text-[18px] md:text-[16px] sm:text-[14px] text-[10px]"
                      >
                        <GoPlus />
                      </button>
                    </div>
                  </td>

                  <td className="py-3 px-4 font-[500] lg:text-[20px] md:text-[16px] sm:text-[10px] text-[8px]">
                    Rs {item.quantity * item.price} USD
                  </td>
                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-[#7B7B7B] cursor-pointer transition-transform duration-300 hover:scale-120 hover:text-[#F26122]"
                    >
                      <RiDeleteBin6Line className="lg:w-8 lg:h-8 md:w-6 md:h-6  w-4 h-4 " />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon Section */}
        <div className="bg-white mt-4 p-4 flex flex-col sm:flex-row   justify-between items-center shadow-md rounded-lg">
          <h2 className="font-[600] lg:text-[20px] md:text-[18px] text-[16px]  ">
            Coupon
          </h2>
          <div className="flex flex-col sm:flex-row   gap-4 mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Enter Coupon"
              className="border px-4 py-2 border-[#7B7B7B] rounded-md lg:text-[20px] md:text-[16px] text-[10px]"
            />
            <button className="bg-[#0F334C] text-white px-4 py-2 lg:text-[20px] md:text-[16px] text-[10px]">
              Use Coupon
            </button>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="bg-white mt-4 p-4 shadow-md rounded-lg text-center sm:text-right md:text-right lg:text-right">
          <h2 className="font-[500] lg:text-[20px] md:text-[18px] text-[16px] border-b border-[#7B7B7B] pb-2">
            Cart Totals:
          </h2>
          <p className="font-[500] lg:text-[20px] md:text-[16px] text-[14px] p-2">
            Subtotal: <span className="ml-4">Rs {subtotal}</span>
          </p>
          <p className="font-[500] lg:text-[20px] md:text-[16px] text-[14px] border-b border-[#7B7B7B] p-2">
            Discount: <span className="ml-4">Rs {discount}</span>
          </p>
          <p className="font-[500] lg:text-[20px] md:text-[16px] text-[14px] p-2 pt-4">
            Total: <span className="ml-4">Rs {Total}</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
            <h2 className="lg:text-[20px] md:text-[18px] text-[16px]  font-[600]">
              Proceed to Checkout
            </h2>
            <button className="bg-[#0F334C] text-white px-6 py-2 mt-2 lg:text-[20px]  md:text-[16px] text-[10px] cursor-pointer" onClick={() => navigate("/Checkout")}>
              Checkout  </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
