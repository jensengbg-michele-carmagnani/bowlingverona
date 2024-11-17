import React from "react";

interface MenuItemProps {
  title: string;
  items: { name: string; price: string }[];
}

const MenuItem: React.FC<MenuItemProps> = ({ title, items }) => {
  return (
    <div className="pb-5">
      <h2 className="text-red-500 font-[Domcasuald] text-4xl">{title}</h2>
      {items.map((item, index) => (
        <p
          key={index}
          className="flex items-baseline w-full py-2 font-[Domcasuald] text-2xl"
        >
          <span className="mr-2">{item.name}</span>
          <span className="flex-grow border-b border-dotted border-black mx-2"></span>
          <span className="text-xl">{item.price}</span>
        </p>
      ))}
    </div>
  );
};

export default MenuItem;
