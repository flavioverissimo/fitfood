import PaperInformation from "components/Paper/information";
import ContactPaper from "components/Paper/Contact";
import MainHead from "components/Head";

export default function Home() {
  return (
    <>
      <MainHead title={"FitFood - Bem vindo!"} />
      <main className={`min-h-screen bg-backgroundPrimary`}>
        <PaperInformation />
        <ContactPaper />
      </main>
    </>
  );
}
