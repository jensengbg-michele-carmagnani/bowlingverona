import PricingCard from "@/app/(public_web)/components/ui/pricing/PricingCard";
import { showReservationForm } from "@/flag/showReservationForm";
import footerImg from "@/public/assets/ICON/Bowling-bolls-icon.png";
import birthdayCard from "@/public/assets/shape_image/birthday-cake.png";
import birthdayHeroImg from "@/public/assets/shape_image/birthday-hero-img.png";
import pricingHeaderBlue from "@/public/assets/shape_image/Pricing-headerBlue-img.png";
import pricingHeaderOrange from "@/public/assets/shape_image/Pricing-headerOrang-img.png";
import pricingHeaderRed from "@/public/assets/shape_image/Pricing-headerRed-img.png";
import vectorDesk from "@/public/assets/shape_image/vector-about-descktop.png";
import CardSection from "../components/ui/card-section/CardSection";
import HeroSection from "../components/ui/hero-section/HeroSection";
import { MENUITEMSBIRTHDAY } from "../components/ui/pricing/MENUITEMSBIRTHDAY";
import ReservationForm from "../components/ui/reservation/ReservationForm";

const Birthday = async () => {
  const showForm = await showReservationForm();

  return (
    <div className="">
      <HeroSection
        height={`${birthdayHeroImg.height}px`}
        backgroundImage={birthdayHeroImg.src}
        title="Birthday Party"
        subtitle="Home / Birthday"
      />
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${vectorDesk.src})`,
          height: `${vectorDesk.height}px`,
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
          mainImageSrc={birthdayCard.src}
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
            headerImage={pricingHeaderRed}
            footerImage={footerImg}
            price={"€ 22"}
            menuItems={MENUITEMSBIRTHDAY}
          />
        </div>
        <div className="w-full relative max-w-[470px]">
          <PricingCard
            className="border-blue-600 mx-auto"
            title="Ragazzi sopra i 14 inclusi"
            label="Secondary"
            headerImage={pricingHeaderBlue}
            footerImage={footerImg}
            price={"€ 25"}
            menuItems={MENUITEMSBIRTHDAY}
          />
        </div>
        <div className="w-full relative max-w-[470px]">
          <PricingCard
            className="border-orange-600 mx-auto"
            title="Adulti"
            label="Tertiary"
            headerImage={pricingHeaderOrange}
            footerImage={footerImg}
            price={"€ 25"}
            menuItems={MENUITEMSBIRTHDAY}
          />
        </div>
      </div>
      <div className="">{showForm && <ReservationForm />}</div>
    </div>
  );
};

export default Birthday;
