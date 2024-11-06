import React from "react";
import Link from "next/link";
import { MapPin, PhoneCall, LucideHourglass, InfoIcon } from "lucide-react";

const InfoSection: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center mt-20 md:mt-0 "
      style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}
    >
      <div className="grid grid-cols-2 md:gap-10 md:grid-cols-4 px-6 md:px-0  mw-2xl mx-auto py-24 gap-5">
        <div className=" md:border-r md:border-separate md:border-slate-500 md:p-10 gap-3 space-y-2 w-full md:min-h-52">
          <div className="flex gap-3">
            <div>
              <PhoneCall size={20} />
            </div>
            <h2 className="uppercase text-xl">phone</h2>
          </div>
          <div className="flex gap-3 font-[Rajani]">
            <p className="text-slate-400 leading-tight">+39 045-581724</p>
          </div>
        </div>
        <div className="md:border-r md:border-separate md:border-slate-500 md:p-10 gap-3 space-y-2 w-full md:min-h-52">
          <div className="flex gap-3">
            <div>
              <MapPin size={20} />
            </div>
            <h2 className="uppercase text-xl">location</h2>
          </div>
          <div className="">
            <div className=" text-slate-400 font-[Rajani]">
              <Link
                href={"https://bit.ly/3Atlssu"}
                className="flex gap-3"
                target="_blank"
              >
                <p className="leading-tight">Viale della fiera 10/a Verona</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:border-r md:border-separate md:border-slate-500 md:p-10 gap-3  w-full md:min-h-52">
          <div>
            <h2 className="uppercase text-xl pb-3">opening hourse</h2>
          </div>
          <div className="flex justify-center flex-col md:gap-3  text-slate-400 font-[Rajani] ">
            <p className="leading-tight">
              Lun-Ven <span className="text-orange-400">16:30pm 1:00am</span>
            </p>
            <p className="leading-tight"> </p>
            <p className="leading-tight ">
              Sab <span className="text-orange-400">16:30pm 1:00am</span>
            </p>
            <p className="leading-tight">
              Dom <span className="text-orange-400"> 16:30pm 1:00am</span>
            </p>
          </div>
        </div>
        <div className=" md:p-10 gap-3 space-y-2 w-full md:min-h-52">
          <div className="flex gap-3">
            <div>
              <InfoIcon size={20} />
            </div>
            <h2 className="uppercase text-xl">contacts</h2>
          </div>
          <div className="font-[Rajani] text-slate-400">
            <p className="leading-tight">Organizza eventi con noi!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
