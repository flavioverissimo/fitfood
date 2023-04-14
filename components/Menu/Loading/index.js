import LoadingAnimation from "./loadingAnimation";

export default function Loading() {
  return (
    <div className=" text-center mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <LoadingAnimation />
      <p className=" text-sm mt-2">Aguarde</p>
    </div>
  );
}
