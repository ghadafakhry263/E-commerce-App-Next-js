
'use client';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, setDelivery, applyDiscount } from '@/redux/cartSlice';
import Image from 'next/image';
import { useState } from 'react';

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, delivery, discount } = useSelector((state) => state.cart);
  const [promoCode, setPromoCode] = useState('');
  const [applied, setApplied] = useState(false);

  // Calculate totals
  const subtotal = items.reduce((total, item) => total + item.totalPrice, 0);
  const tax = subtotal * 0.14;
  // Calculate total price after applying delivery and discount
  const total = subtotal + tax + delivery - discount;
// Handle promo code application
  const handleApplyPromo = () => {
    if (promoCode === 'GHADA10') {
      dispatch(applyDiscount(10));
      setApplied(true);
    } else {
      alert('Invalid promo code');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-4 p-4 border rounded-xl bg-white shadow-sm">
                <Image src={item.image} alt={item.name} width={100} height={100} className="rounded" />
                <div className="flex-1">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600 text-sm">Size: {item.size.name}</p>
                  {item.extras.length > 0 && (
                    <p className="text-gray-600 text-sm">
                      Extras: {item.extras.map((e) => e.name.trim()).join(', ')}
                    </p>
                  )}
                  <p className="font-semibold mt-1">{item.totalPrice.toFixed(2)} EGP</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

    <div className="flex justify-center items-center mt-10">
  <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6 space-y-6">

    {/* Delivery */}
    <div className="text-left">
      <label className="block font-semibold mb-2">Delivery Method:</label>
      <select
        onChange={(e) => dispatch(setDelivery(Number(e.target.value)))}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
      >
        <option value="0">Choose delivery option</option>
        <option value="20">Standard (20 EGP)</option>
        <option value="40">Express (40 EGP)</option>
      </select>
    </div>

    {/* Promo Code */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <input
        type="text"
        placeholder="Promo code"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        className="flex-1 border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        onClick={handleApplyPromo}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Apply
      </button>
    </div>

    {/* Promo message */}
    {applied && (
      <p className="text-green-600 text-sm font-medium">Promo code applied!</p>
    )}

    {/* Summary */}
    <div className="text-right text-gray-700 space-y-1">
      <p>Subtotal: <span className="font-medium">{subtotal.toFixed(2)} EGP</span></p>
      <p>Tax (14%): <span className="font-medium">{tax.toFixed(2)} EGP</span></p>
      <p>Delivery: <span className="font-medium">{delivery} EGP</span></p>
      <p>Discount: <span className="font-medium">{discount} EGP</span></p>
      <p className="text-xl font-bold">Total: {total.toFixed(2)} EGP</p>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
      <button
        onClick={() => dispatch(clearCart())}
        className="text-red-600 border border-red-600 px-4 py-2 rounded hover:bg-red-50 transition"
      >
        Clear Cart
      </button>
  <button
        onClick={() => {
          alert("Your order has been placed successfully!");
        }}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Place Order
      </button>

    </div>
  </div>
</div>

        </>
      )}
    </div>
  );
}
