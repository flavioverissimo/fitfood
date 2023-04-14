import { FaStreetView } from "react-icons/fa";
import { AiTwotoneMail, AiFillPhone } from "react-icons/ai";

export default function GeneralContacts() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
          Entre em contato
        </h1>

        <p className="mt-3 text-gray-500 ">
          Nossa amigável equipe adoraria ouvir de você.
        </p>
      </div>
      <div className=" flex flex-col gap-4">
        <p className="text-xs md:text-base flex items-center gap-4 text-greenPrimary">
          <FaStreetView /> Rua do fitfood, nº 000
        </p>

        <p className="text-xs md:text-base flex items-center gap-4 text-greenPrimary">
          <AiFillPhone />
          21-90000-0000
        </p>

        <p className="text-xs md:text-base flex items-center gap-4 text-greenPrimary">
          <AiTwotoneMail />
          fitfood@example.com
        </p>
      </div>
    </div>
  );
}
