import React from "react";

const WhyShopHereItem = ({ icon, content, title }) => {
  return (
    <div
      className={`bg-neutral mb-2 border-slate-100 p-8 sm:w-1/2 sm:rounded-3xl sm:border-2 sm:shadow-lg md:w-[31%]`}
    >
      {icon}
      <h3 className="my-2 font-semibold lg:text-xl">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default WhyShopHereItem;
