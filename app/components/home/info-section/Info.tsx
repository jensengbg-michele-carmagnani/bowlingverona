import React from "react";
import Link from "next/link";
import { MapPin, PhoneCall, InfoIcon } from "lucide-react";
import InfoCard from "../../ui/InfoCard";

const InfoSection: React.FC = () => {
  return (
    <div className="py-28 md:p-0">
      <div className="grid grid-cols-2 md:gap-10 md:grid-cols-4 px-6 md:px-0 mx-auto md:py-24 gap-5">
        <InfoCard
          borderPosition="right"
          icon={PhoneCall}
          title={"phone"}
          descriptions={[{ text: "+39 045-581724" }]}
        />
        <Link
          href={"https://bit.ly/3Atlssu"}
          className="flex gap-3"
          target="_blank"
        >
          <InfoCard
            borderPosition="right"
            icon={MapPin}
            title={"location"}
            descriptions={[{ text: "Viale della Fiera 10/a" }]}
          />
        </Link>
        <InfoCard
          borderPosition="right"
          title={"Opening hours"}
          descriptions={[
            { text: "Lun-Ven 20:30pm 1:00am" },
            { text: "Sab ", highlight: "16:30pm 1:00am" },
            { text: "Dom ", highlight: "16:30pm 1:00am" },
          ]}
        />
        <InfoCard
          borderPosition="none"
          icon={InfoIcon}
          title={"contacts"}
          descriptions={[{ text: "bowlingvr@gmail.com" }]}
        />
      </div>
    </div>
  );
};

export default InfoSection;
