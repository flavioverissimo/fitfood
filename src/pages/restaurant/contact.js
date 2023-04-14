import ContactPage from "components/Contact";
import MainHead from "components/Head";

export default function Contact() {
  return (
    <>
      <MainHead title={"FitFood - Entre em contato"} />
      <main className={`min-h-screen bg-backgroundPrimary`}>
        <section className="">
          <ContactPage />
        </section>
      </main>
    </>
  );
}
