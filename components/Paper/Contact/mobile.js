import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default function PaperMobile() {
  return (
    <>
      <h3 className="text-white font-semibold text-base md:text-lg mb-4">
        Redes sociais:
      </h3>
      <div className=" flex gap-4 text-greenPrimary text-4xl">
        <a href="#" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="#" target="_blank">
          <AiOutlineTwitter />
        </a>
        <a href="#" target="_blank">
          <AiFillFacebook />
        </a>
      </div>
    </>
  );
}
