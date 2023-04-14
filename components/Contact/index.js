import GeneralContacts from "./generalContact";
import Map from "./map";
export default function ContactPage() {
  return (
    <div className="container px-6 mx-auto py-8 2xl:py-36 ">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:grid-rows-2">
        <GeneralContacts />
        <Map />
      </div>
    </div>
  );
}
