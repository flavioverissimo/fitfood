import MainHead from "components/Head";
import AboutUs from "components/About";

export default function About() {
  return (
    <>
      <MainHead title={"FitFood - Saiba sobre nós"} />
      <main className={`min-h-screen bg-backgroundPrimary`}>
        <section>
          <AboutUs />
        </section>
      </main>
    </>
  );
}
