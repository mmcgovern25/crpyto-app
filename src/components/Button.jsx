import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`button-theme relative h-12 w-40 overflow-hidden button-gradient font-semibold text-black shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-yellow-500 hover:before:-translate-x-40`}
  >
    <span className="relative z-10 font-semibold">Get Started</span>
  </button>
);



export default Button;
