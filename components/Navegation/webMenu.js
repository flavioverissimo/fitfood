import Link from "next/link";
import Logomarca from "./logomarca";
import Button from "./button";

export default function MenuWeb({ setMobileMenuOpen }) {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <Logomarca />
      <div className="flex lg:hidden">
        <Button
          setMobileMenuOpen={setMobileMenuOpen}
          status={true}
          menuModel={"AiOutlineMenu"}
        />
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link
          href="/restaurant"
          className="text-sm uppercase font-semibold leading-6 text-gray-900"
        >
          Inicio
        </Link>
        <Link
          href="/restaurant/about"
          className="text-sm uppercase font-semibold leading-6 text-gray-900"
        >
          Sobre
        </Link>
        <Link
          href="/restaurant/contact"
          className="text-sm uppercase font-semibold leading-6 text-gray-900"
        >
          Contato
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          href="/restaurant/menu"
          className="text-sm uppercase font-semibold leading-6 text-gray-900 bg-yellowPrimary px-4 py-2 rounded-lg"
        >
          Cardápio <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </nav>
  );
}
