import React from "react";
import HeroSection from "../components/ui/hero-section/HeroSection";
import birthdayHeroImg from "@/public/assets/shape_image/birthday-hero-img.png";
import CardSection from "../components/ui/card-section/CardSection";
import vectorDesk from "@/public/assets/shape_image/vector-about-descktop.png";
import birthdayCard from "@/public/assets/shape_image/birthday-cake.png";
import ReactMarkDown from "react-markdown";

const Birthday = () => {
  return (
    <div className="pt-28">
      <HeroSection
        height={birthdayHeroImg.height.toString()}
        backgroundImage={birthdayHeroImg.src}
        title="Birthday Party"
        subtitle="Home / Birthday"
      />
      <div
        className=""
        style={{
          backgroundImage: `url(${vectorDesk.src})`,
          height: `${vectorDesk.height}px`,
        }}
      >
        <CardSection
          title="Birthday Card Title"
          subtitle="Birthday Card Subtitle"
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
    </div>
  );
};

export default Birthday;
