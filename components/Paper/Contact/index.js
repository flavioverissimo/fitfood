import PaperContact from "./contact";
import PaperMobile from "./mobile";

export default function ContactPaper() {
  return (
    <div className="bg-yellowPrimary md:-mt-7">
      <div className="container mx-auto max-w-screen-xl px-8 pt-12 md:pt-24 md:px-16 2xl:pt-32 pb-16">
        <PaperContact />
        <PaperMobile />
      </div>
    </div>
  );
}
