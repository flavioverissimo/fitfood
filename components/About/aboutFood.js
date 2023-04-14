import Image from "next/image";
import food from "../../public/food.jpg";
import ImageSVG from "./imageSvg";

export default function AboutFood() {
  return (
    <div className="flex flex-col mx-auto lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center rounded-lg">
      <div className="-mt-12 order-2 md:order-1 md:-mt-0 w-full px-2 lg:w-1/2 lg:pl-8 2xl:pl-16">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
            Pratos coloridos e saborosos, uma obra de arte
          </h1>
          <p className="text-sm md:text-base mt-4 text-gray-600">
            Nossos olhos são atraídos pela beleza, então fazemos pra você uma
            obra de arte, cheia de cor e leveza, além de um sabor sem igual.
          </p>
          <div className="grid gap-6 mt-8 sm:grid-cols-2">
            <div className="flex items-center text-gray-800 -px-3 ">
              <ImageSVG />
              <span className="text-sm md:text-base mx-3">Pratos Premium</span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 ">
              <ImageSVG />
              <span className="text-sm md:text-base mx-3">
                Comidas Orgânicas
              </span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 ">
              <ImageSVG />
              <span className="text-sm md:text-base mx-3">
                Receitas Tradicionais
              </span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 ">
              <ImageSVG />
              <span className="text-sm md:text-base mx-3">
                Pratos de Vegetais
              </span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 ">
              <ImageSVG />
              <span className="text-sm md:text-base mx-3">
                Pratos de Carnes
              </span>
            </div>

            <div className="flex items-center text-gray-800 -px-3 ">
              <ImageSVG />
              <span className="text-sm md:text-base mx-3">
                Pratos Agridoces
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1	md:order-2 flex items-center justify-center w-full h-96 lg:w-1/2">
        <Image
          src={food}
          alt="Fast&Food - Melhor Refeição para sua familia"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
