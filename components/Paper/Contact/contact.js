import { FaStreetView } from "react-icons/fa";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";

export default function PaperContact() {
  return (
    <>
      <h3 className=" text-white font-semibold text-base md:text-lg mb-4">
        Entre em contato para mais informações:
      </h3>
      <div className="mb-8">
        <div className=" flex flex-col gap-4 md:flex-row md:gap-6 mb-4">
          <p className="text-xs md:text-sm flex items-center gap-2 text-greenPrimary">
            <AiTwotoneMail />
            fitfood@example.com
          </p>
          <p className="text-xs md:text-sm flex items-center gap-2 text-greenPrimary">
            <AiFillPhone />
            21-90000-0000
          </p>
        </div>
        <p className="text-xs md:text-sm flex items-center gap-2 text-greenPrimary">
          <FaStreetView /> Rua do fitfood, nº 000
        </p>
      </div>
    </>
  );
}
