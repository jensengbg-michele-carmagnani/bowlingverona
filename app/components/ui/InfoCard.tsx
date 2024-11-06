import React from "react";

interface Description {
  text: string;
  highlight?: string;
}

type BorderPosition = "top" | "right" | "bottom" | "left" | "all" | "none";

interface InfoCardProps {
  icon?: React.ComponentType<{ size?: number }>;
  title: string;
  descriptions: Description[];
  borderPosition?: BorderPosition;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  descriptions,
  borderPosition = "none",
}) => {
  // Map border position to the appropriate class names
  const borderClasses = {
    top: "border-t border-slate-500",
    right: "border-r border-slate-500",
    bottom: "border-b border-slate-500",
    left: "border-l border-slate-500",
    all: "border border-slate-500",
    none: "",
  };

  return (
    <div
      className={`md:p-10 gap-3 space-y-2 w-full md:min-h-52 rounded-md ${borderClasses[borderPosition]}`}
    >
      <div className="flex gap-3">
        <div>{Icon && <Icon size={20} />}</div>
        <h2 className="uppercase text-xl">{title}</h2>
      </div>
      <div className="flex justify-center flex-col space-y-2 text-slate-400 font-[Rajani]">
        {descriptions.map((desc, index) => (
          <p key={index} className="leading-tight">
            {desc.text}{" "}
            {desc.highlight && (
              <span className="text-orange-400">{desc.highlight}</span>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
