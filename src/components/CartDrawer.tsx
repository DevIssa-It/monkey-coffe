"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex h-full w-full max-w-md flex-col bg-[#FDFBF7] text-[#2A1E17] shadow-2xl border-l border-[#E5DCD3]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E5DCD3] px-6 py-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#C47D4F]" />
                <h2 className="font-serif text-xl font-bold">Your Order</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-1 hover:bg-[#E5DCD3] transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-[#E5DCD3] p-4 text-[#A96B43] mb-4">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <p className="font-serif text-lg font-semibold">Your cart is empty</p>
                  <p className="text-sm text-[#A89880] mt-1">
                    Add some highlighted signatures to get started.
                  </p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b border-[#E5DCD3]/60 pb-4 last:border-0"
                  >
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-[#E5DCD3]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="font-serif font-bold text-sm leading-tight">
                          {item.name}
                        </h4>
                        {item.origin && (
                          <p className="text-xs text-[#A89880] mt-0.5">
                            {item.origin}
                          </p>
                        )}
                        <p className="font-sans font-semibold text-xs text-[#C47D4F] mt-1">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-[#E5DCD3] rounded-md bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-[#E5DCD3] transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-[#E5DCD3] transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#A89880] hover:text-red-600 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer / Summary */}
            {cartItems.length > 0 && (
              <div className="border-t border-[#E5DCD3] bg-white px-6 py-6 space-y-4">
                <div className="flex justify-between items-center text-base font-bold">
                  <span className="font-serif">Subtotal</span>
                  <span className="text-[#C47D4F]">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-xs text-[#A89880] text-center">
                  Taxes and shipping calculated at checkout.
                </p>
                <button
                  onClick={() => alert("Checkout function mock. Thank you for your order!")}
                  className="w-full rounded-full bg-[#C47D4F] hover:bg-[#A96B43] text-[#FDFBF7] py-3 text-sm font-bold tracking-wide uppercase transition-colors shadow-lg shadow-[#C47D4F]/25"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
