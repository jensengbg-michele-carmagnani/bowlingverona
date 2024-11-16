import aboutUs from "@/public/assets/shape_image/about-us.png";
import vectorDesk from "@/public/assets/shape_image/About-desk-vector.png";
import CardSection from "../components/ui/card-section/CardSection";
import buttonIcon from "@/public/assets/ICON/Eclips_button_icon.svg";
import aboutusImg from "@/public/assets/shape_image/aboutus-img.png";

const AboutUs = () => {
  return (
    <section className="pt-52">
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
        className="relative bg-no-repeat bg-center px-10"
        style={{
          backgroundImage: `url(${vectorDesk.src})`,
          height: `${vectorDesk?.height}px`,
        }}
      >
        <CardSection
          title="Our Story"
          subtitle="Learn more about us"
          content="We are a passionate team dedicated to providing the best bowling experience."
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
