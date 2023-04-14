import { useState } from "react";
import WebMenu from "./webMenu";
import ToggleMenu from "./toggleMenu";
import { useRouter } from "next/router";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const { pathname } = router;

  return (
    <header className="bg-backgroundPrimary">
      {pathname !== "/" && (
        <div>
          <WebMenu setMobileMenuOpen={setMobileMenuOpen} />
          <ToggleMenu
            setMobileMenuOpen={setMobileMenuOpen}
            mobileMenuOpen={mobileMenuOpen}
          />
        </div>
      )}
    </header>
  );
}
