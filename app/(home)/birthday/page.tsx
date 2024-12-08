import React from "react";
import HeroSection from "../components/ui/hero-section/HeroSection";
import birthdayHeroImg from "@/public/assets/shape_image/birthday-hero-img.png";
import CardSection from "../components/ui/card-section/CardSection";
import PricingCard from "@/app/(home)/components/ui/pricing/PricingCard";
import { listBucketObjects, S3Object } from "@/app/(home)/home_actions";
import ReservationForm from "../components/ui/reservation/ReservationForm";
import { MENUITEMSBIRTHDAY } from "../components/ui/pricing/MENUITEMSBIRTHDAY";
import { findAndCreateLink } from "@/utils/imageFinder";

const Birthday = async () => {
  const BthPics = (await listBucketObjects(
    "picture_website",
    "Birthday/"
  )) as S3Object[];
  const BthIcons = (await listBucketObjects(
    "picture_website",
    "Icons/"
  )) as S3Object[];

  return (
    <div className="">
      <HeroSection
        height={`${birthdayHeroImg.height}px`}
        backgroundImage={BthPics ? findAndCreateLink(BthPics, "hero") : ""}
        title="Birthday Party"
        subtitle="Home / Birthday"
      />
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BthPics ? findAndCreateLink(BthPics, "desk") : ""})`,
          height: `${900}px`,
        }}
      >
        <CardSection
          title="Birthday "
          subtitle="Birthday Party"
          content={` Vuoi rendere il tuo compleanno davvero speciale? Vieni a festeggiare con noi e preparati per una giornata di puro divertimento! 🎳
    Ti offriamo una festa all'insegna del gioco, dell'allegria e del buon cibo, perfetta per tutte le età.
    Scegli una delle nostre tornate speciali e lasciati coccolare dal nostro staff: penseremo a tutto noi, dalla preparazione delle piste alle proposte culinarie,
    per garantire a te e ai tuoi ospiti un’esperienza indimenticabile.
    Il servizio compleanni è disponibile solo il sabato e la domenica pomeriggio, i momenti ideali per divertirsi insieme agli amici e alla famiglia.
    ✨ Non perdere l’occasione di festeggiare con noi e fare strike di emozioni! ✨
    Scopri i nostri pacchetti su misura e prenota ora per riservare il tuo pomeriggio speciale.
    Che aspetti? Contattaci subito per fissare la data del tuo compleanno da ricordare!`}
          mainImageSrc={
            BthPics ? findAndCreateLink(BthPics, "birthday-cake") || "/#" : "/#"
          }
          mainImageWidth={600}
          mainImageHeight={400}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-9 relative py-20 ">
        <div className="relative md:max-w-[470px] max-w-[380px]">
          <PricingCard
            className="border-red-600 mx-auto"
            title="Ragazzi sotto i 14 anni"
            subtitle="min 8/10 persone"
            label="Primary"
            headerImage={
              BthPics ? findAndCreateLink(BthPics, "headerRed") || "/#" : "/#"
            }
            footerImage={
              (BthPics &&
                BthIcons &&
                findAndCreateLink(BthIcons, "Bowling-bolls-icon")) ||
              "/#"
            }
            price={"€ 22"}
            menuItems={MENUITEMSBIRTHDAY}
          />
        </div>
        <div className="w-full relative max-w-[470px]">
          <PricingCard
            className="border-blue-600 mx-auto"
            title="Ragazzi sopra i 14 inclusi"
            label="Secondary"
            headerImage={
              BthPics ? findAndCreateLink(BthPics, "headerBlue") || "/#" : "/#"
            }
            footerImage={
              (BthPics &&
                BthIcons &&
                findAndCreateLink(BthIcons, "Bowling-bolls-icon")) ||
              "/#"
            }
            price={"€ 25"}
            menuItems={MENUITEMSBIRTHDAY}
          />
        </div>
        <div className="w-full relative max-w-[470px]">
          <PricingCard
            className="border-orange-600 mx-auto"
            title="Adulti"
            label="Tertiary"
            headerImage={
              BthPics ? findAndCreateLink(BthPics, "headerOrang") || "/#" : "/#"
            }
            footerImage={
              (BthPics &&
                BthIcons &&
                findAndCreateLink(BthIcons, "Bowling-bolls-icon")) ||
              "/#"
            }
            price={"€ 25"}
            menuItems={MENUITEMSBIRTHDAY}
          />
        </div>
      </div>
      <div className="">
        <ReservationForm />
      </div>
    </div>
  );
};

export default Birthday;
