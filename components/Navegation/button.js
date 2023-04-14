import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Button({ setMobileMenuOpen, status, menuModel }) {
  return (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={() => setMobileMenuOpen(status)}
    >
      {menuModel === "AiOutlineMenu" && (
        <AiOutlineMenu className="text-gray-700 text-2xl" />
      )}
      {menuModel === "AiOutlineClose" && (
        <AiOutlineClose className="text-gray-700 text-2xl" />
      )}
    </button>
  );
}
