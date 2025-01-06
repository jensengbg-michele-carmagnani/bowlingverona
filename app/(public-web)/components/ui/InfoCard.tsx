import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
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
  className?: string;
  classTitle?: string;
  classDescription?: string;
  actionButton?: { text: string; className: string; imgUrl: string };
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  descriptions,
  borderPosition = "none",
  className = "",
  classDescription = "",
  classTitle = "",
  actionButton,
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
      className={cn(
        `md:p-10 gap-3 space-y-2 w-full md:min-h-52  ${borderClasses[borderPosition]} ${className}`
      )}
    >
      <div className="flex gap-3 w-full items-center">
        <div>{Icon && <Icon size={20} />}</div>
        <h2 className={cn(`uppercase text-xl text-slate-50 ${classTitle}`)}>
          {title}
        </h2>
      </div>
      <div className="flex justify-center flex-col space-y-2 font-[Rajani]">
        {descriptions.map((desc, index) => (
          <p key={index} className={cn(`leading-tight ${classDescription}`)}>
            {desc.text}
            {desc.highlight && (
              <span className="text-orange-400 w-full block">
                {desc.highlight}
              </span>
            )}
          </p>
        ))}
      </div>
      {/* Render the ActionButton if provided */}
      {actionButton && (
        <div className="mt-4 flex justify-center">
          <Link href={"/menu"}>
            <Button
              className="text-black hover:text-white mt-5 hover:transform hover:scale-105 transition-all duration-500 min-w-10  font-[Rajdhani] upperca"
              imgUrl={actionButton?.imgUrl}
            >
              {actionButton.text}
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default InfoCard;
