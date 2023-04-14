import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
export default function OpenNewOrder({
  order,
  orderStatus,
  orderRequest,
  formFillStatus,
  currentPlate,
  inserValues,
  sendValues,
}) {
  return (
    <div
      className={`fixed top-0 left-0 z-10 bg-black/80 w-full h-full ${
        order ? "" : "hidden"
      }`}
    >
      <div className=" fixed md:top-1/2 md:left-1/2 md:-translate-x-2/4 md:-translate-y-2/4 z-20 bg-white w-full md:w-6/12  h-screen shadow-2xl pb-12 lg:pb-0">
        {orderStatus.orderShow && (
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
              {orderStatus.status === "success" ? (
                <AiFillCheckCircle className=" text-green-700 w-28 h-28 md:w-40 md:h-40 mx-auto" />
              ) : (
                <AiFillCloseCircle className=" text-red-600 w-28 h-28 md:w-40 md:h-40 mx-auto" />
              )}
              <p className=" text-base md:text-xl font-medium mt-4 text-center">
                {orderStatus.message}
              </p>
            </div>
          </div>
        )}
        {!orderStatus.orderShow && (
          <div className="overflow-y-scroll	w-full h-full ">
            <div className=" flex justify-between px-6 md:px-12 py-10">
              <h4 className="text-xs uppercase font-medium md:text-base">
                Solicitação do Pedido
              </h4>
              <p
                className="text-xs md:text-base uppercase cursor-pointer"
                onClick={orderRequest}
              >
                X - Fechar
              </p>
            </div>
            {formFillStatus.status && (
              <div
                className="text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Informação!</strong>
                <span className="block sm:inline ml-2">
                  {formFillStatus.message}
                </span>
              </div>
            )}
            <div className="w-full pt-4 md:pt-16 ">
              <div className=" flex flex-col items-center gap-6">
                <div className="w-full md:w-2/3 px-6 md:px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="code"
                  >
                    Codigo do Prato:
                  </label>
                  <input
                    className="text-sm md:text-base appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="code"
                    type="text"
                    value={currentPlate.code}
                    disabled
                    name="code"
                  />
                </div>

                <div className="w-full md:w-2/3 px-6 md:px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Nome do Prato:
                  </label>
                  <input
                    className="text-sm md:text-base appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    value={currentPlate.name}
                    disabled
                    name="plate"
                  />
                </div>

                <div className="w-full md:w-2/3 px-6 md:px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="price"
                  >
                    Preço por Prato &#40;1 un&#41;:
                  </label>
                  <input
                    className="text-sm md:text-base appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="price"
                    type="number"
                    value={currentPlate.price}
                    disabled
                    name="price"
                  />
                </div>

                <div className=" md:w-2/3 flex flex-wrap">
                  <div className="w-full lg:w-1/3 px-6 md:px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="price"
                    >
                      Nº da mesa:
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="price"
                      type="text"
                      name="number"
                      onChange={inserValues}
                      value={currentPlate.number}
                    />
                  </div>

                  <div className="w-full mt-6 md:mt-0 lg:w-2/3 px-6 md:px-3 mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-state"
                    >
                      Quantidade do mesmo prato?
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        name="quantity"
                        onChange={inserValues}
                      >
                        <option selected>Escolha uma opção</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3 px-6 md:px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="price"
                  >
                    Nome do Solicitante:
                  </label>
                  <input
                    className="text-sm md:text-base appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="price"
                    type="text"
                    placeholder="João Marcelo"
                    name="person"
                    onChange={inserValues}
                    value={currentPlate.person}
                  />
                </div>
              </div>
              <div className=" w-2/3 mx-auto px-3 mt-6">
                <button
                  onClick={sendValues}
                  className="text-xs md:text-sm w-full px-6 md:px-3 py-3 bg-greenPrimary text-white uppercase "
                >
                  Solicitar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
