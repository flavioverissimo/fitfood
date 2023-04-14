import { GrRestaurant } from "react-icons/gr";
import Link from "next/link";

export default function Logomarca() {
  return (
    <div className="flex lg:flex-1">
      <Link href="/restaurant">
        {/* <div className="flex justify-center items-center gap-2 text-xl">
          <GrRestaurant className="text-3xl text-yellowPrimary" />
          <p className="font-bold text-greenPrimary">FitFood</p>
        </div> */}
        <img src="/logo.svg" className="w-32" />
      </Link>
    </div>
  );
}
