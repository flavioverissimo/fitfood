import Link from "next/link";
import { Dialog } from "@headlessui/react";
import Logomarca from "./logomarca";
import Button from "./button";

export default function ToggleMenu({ setMobileMenuOpen, mobileMenuOpen }) {
  return (
    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Logomarca />
          <Button
            setMobileMenuOpen={setMobileMenuOpen}
            status={false}
            menuModel={"AiOutlineClose"}
          />
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10 uppercase">
            <div className="space-y-2 py-6">
              <Link
                href="/restaurant"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/restaurant/about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/restaurant/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
            <div className="py-2 bg-yellowPrimary text-center rounded-lg font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              <Link
                href="/restaurant/menu"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cardápio
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}
