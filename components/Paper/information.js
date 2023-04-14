import Image from "next/image";
import Link from "next/link";
import celphone from "../../public/celphone.svg";

import { AiFillAndroid, AiFillApple, AiFillWindows } from "react-icons/ai";

export default function PaperInformation() {
  return (
    <div className="bg-backgroundPrimary">
      <div className="container mx-auto md:max-w-screen-xl">
        <div className=" grid md:grid-cols-3 gap-4 px-8 pt-12 md:pt-24 md:px-16 2xl:pt-36">
          <div className=" md:col-span-2">
            <h1 className=" text-3xl md:text-6xl font-bold leading-largeLine">
              O número <span className=" text-greenPrimary">#One</span> em
              alimentações de alta
              <span className=" text-greenPrimary"> Qualidade</span>
            </h1>
            <p className=" text-sm md:text-lg md:w-10/12 mt-6 text-gray-700">
              Fast&Food conhecido por toda a região de São Paulo, comida caseira
              de alta qualidade e saudável. Não nos conhece? Então aproveite a
              oportunidade, navegue pelo nosso site e descubra as deliciosas
              alimentações que gostariamos de proporcionar a você.
            </p>
            <div className="text-center mb-12 md:mb-0">
              <Link href="/restaurant">
                <p className="mt-8 text-xs md:text-base md:mt-32 font-semibold bg-backgroundPrimary uppercase text-greenPrimary border-2 border-yellowPrimary rounded-full px-6 py-3 inline-block ">
                  Acessar o site
                </p>
              </Link>
            </div>
          </div>
          <div className="md:-mb-64">
            <Image
              src={celphone}
              alt="Picture of the author"
              className="px-6 md:px-0 md:w-10/12 md:mx-auto mb-6"
            />
            <div className="flex justify-center gap-4 md:gap-6 text-4xl text-greenPrimary mb-6 md:mb-0">
              <a
                href="#"
                target="_blank"
                className=" rounded-full p-4 bg-backgroundPrimary"
              >
                <AiFillAndroid />
              </a>
              <a
                href="#"
                target="_blank"
                className=" rounded-full p-4 bg-backgroundPrimary"
              >
                <AiFillApple />
              </a>
              <a
                href="#"
                target="_blank"
                className=" rounded-full p-4 bg-backgroundPrimary"
              >
                <AiFillWindows />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
