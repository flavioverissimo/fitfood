import "@/styles/globals.css";
import Navegation from "../../components/Navegation";
import Font from "utils/font";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navegation />
      <div className={`${Font.className}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
