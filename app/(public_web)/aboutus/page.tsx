import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import vectorDesk from "@/public/assets/shape_image/About-desk-vector.png";
import aboutUs from "@/public/assets/shape_image/about-us.png";
import aboutusImg from "@/public/assets/shape_image/aboutus-img.png";
import CardSection from "../components/ui/card-section/CardSection";
import { getSEOTags } from "@/lib/seo";
export const metadata = getSEOTags({
  title: "About Us - Bowling Verona",
  canonicalUrlRelative :"/aboutus",
});

const AboutUs = () => {
  return (
    <section className="">
      <div
        className="relative bg-no-repeat bg-center bg-cover flex justify-center items-center "
        style={{
          backgroundImage: `url(${aboutUs?.src})`,
          height: `${aboutUs?.height}px`,
        }}
      >
        <div>
          <h1 className="text-2xl capitalize">about us</h1>
        </div>
      </div>
      <div
        className="relative bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${vectorDesk.src})`,
          height: `${vectorDesk?.height}px`,
        }}
      >
        <CardSection
          title="Our Story"
          subtitle="Learn more about us"
          content="Il Bowling Verona è stato fondato nel 1990 da Marco e da allora è
          rimasto un autentico business di famiglia, gestito con passione e
          dedizione. Fin dai suoi esordi, questo luogo si è affermato come un
          punto di riferimento per gli appassionati di bowling e per chi cerca
          un ambiente accogliente e divertente per trascorrere momenti
          piacevoli. Con 14 piste da bowling, il Bowling Verona offre ampie
          possibilità di gioco per gruppi di amici, famiglie e anche per tornei
          più competitivi. Oltre al bowling, la struttura dispone di 13 tavoli
          da biliardo. Per completare l'offerta di intrattenimento, il
          Bowling Verona mette a disposizione anche un angolo dedicato ai
          videogames, pensato per tutte le età e per chi vuole fare una pausa
          diversa tra una partita e l'altra. Anno dopo anno, il Bowling
          Verona ha continuato a crescere e ad evolversi, mantenendo sempre viva
          la sua atmosfera familiare e accogliente."
          linkHref=""
          linkText=""
          mainImageSrc={aboutusImg.src}
          miniImageSrc={""}
          buttonIcon={buttonIcon}
          mainImageWidth={aboutusImg.width}
          mainImageHeight={aboutusImg.height}
          miniImageWidth={0}
          miniImageHeight={0}
        />
      </div>
    </section>
  );
};

export default AboutUs;
