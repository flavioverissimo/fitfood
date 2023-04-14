import Image from "next/image";
import cupom from "../../../public/cupom.svg";
import cupom_sm from "../../../public/cupom_sm.svg";
import MainHead from "components/Head";

export default function Restaurant() {
  return (
    <>
      <MainHead title={"FitFood - Delivery and Restaurant"} />
      <main className={`min-h-screen bg-backgroundPrimary relative`}>
        <section>
          <Image
            src={cupom}
            alt="Cupom de desconto"
            className="hidden md:block mx-auto md:w-full"
          />
          <Image
            src={cupom_sm}
            alt="Cupom de desconto"
            className="block md:hidden mx-auto 2xl:w-full"
          />
          <div className="container mx-auto px-8 py-24">
            <h3 className=" text-2xl text-center md:text-start md:text-3xl mb-8 text-greenPrimary">
              Marcas Parceiras
            </h3>
            <ul className="grid gap-6 text-2xl text-center md:text-start md:grid-cols-6 md:gap-4 md:text-3xl text-gray-400">
              <li>BRAND</li>
              <li>BRAND</li>
              <li>BRAND</li>
              <li>BRAND</li>
              <li>BRAND</li>
              <li>BRAND</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
