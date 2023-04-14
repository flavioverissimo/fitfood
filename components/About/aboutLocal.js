import Image from "next/image";
import restaurant from "../../public/restaurant.jpg";

export default function AboutLocal() {
  return (
    <div className="flex flex-col mx-auto lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center rounded-lg">
      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        <Image
          src={restaurant}
          alt="Fast&Food - Melhor Refeição para sua familia"
          className=" rounded-lg shadow-2xl"
        />
      </div>
      <div className="-mt-12 md:-mt-0 w-full px-2 lg:w-1/2 md:pl-16">
        <div className="lg:max-w-lg">
          <h1 className="text-2xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
            O local adequado para uma boa refeição
          </h1>
          <p className=" text-sm md:text-base mt-4 text-gray-600 ">
            Já se imaginou em um ambiente aberto, se alimentando com uma brisa
            no rosto e sentindo cheiro da natureza? O nosso diferencial é um
            conjunto de coisas simples. Proporcionamos ao nosso cliente uma
            experiencia completa, desde o inicio até o fim da alimentação.
          </p>
          <p className="text-sm md:text-base mt-4 text-gray-600 ">
            Restaurante criado à 33 anos atrás, com receitas de nossos
            antepassados. Mantemos nossa cultura e tradição, além disso,
            produtos orgânicos de alta qualidade.
          </p>
        </div>
      </div>
    </div>
  );
}
