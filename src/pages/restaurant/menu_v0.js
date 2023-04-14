import MainHead from "components/Head";
import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Menu() {
  const { data, err } = useSWR("/api/getData", fetcher);
  const [allData, setAllData] = useState([]);
  const [filterMenu, setFilterMenu] = useState("");
  const [menu, setMenu] = useState([]);
  const [order, setOrder] = useState(false);
  const [currentPlate, setCurrentPlate] = useState({});
  const [orderStatus, setOrderStatus] = useState({
    orderShow: false,
    status: "",
    message: "",
  });
  const [formFillStatus, setFormFillStatus] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    if (data) {
      setAllData({
        revenues: data.revenues,
        filterOptions: data.filterOptions,
      });
      setFilterMenu(data.filterOptions[0].value);
      setMenu(
        data.revenues.filter(
          (item) => item.type === data.filterOptions[0].value
        )
      );
    }
  }, [data]);

  const filter = (e) => {
    const value = e.target.value || e.target.innerHTML;
    setFilterMenu(value);
    const options = allData.revenues.filter((item) => item.type === value);
    setMenu(options);
  };

  const orderRequest = (e) => {
    if (e.target.value) {
      const plateCode = e.target.value;
      const plate = menu.filter((item) => item.code === plateCode)[0];
      setCurrentPlate({
        code: plate.code,
        name: plate.name,
        price: parseFloat(plate.price).toFixed(2),
        number: "",
        quantity: "",
        person: "",
        status: "Pendente",
        payment: "A Pagar",
      });
      setOrder(!order);
    }

    if (!e.target.value) {
      setCurrentPlate({});
      setOrder(!order);
      setFormFillStatus({
        status: false,
        message: "",
      });
    }
  };

  const inserValues = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    setCurrentPlate((old) => {
      return {
        ...old,
        [key]: value,
      };
    });
  };

  const timeout = () => {
    return setTimeout(() => {
      setOrder(!order);
      setFormFillStatus({
        status: false,
        message: "",
      });
      setOrderStatus({
        orderShow: false,
        status: "",
        message: "",
      });
    }, 3000);
  };

  const sendValues = async () => {
    const quantity = parseFloat(currentPlate.quantity) > 0;
    const number = parseFloat(currentPlate.number) > 0;
    const person = currentPlate.person.length > 5;

    if (quantity && number && person) {
      const sentData = await axios.post("/api/saveData", currentPlate);
      const res = await sentData;

      if (res.data.message === "success") {
        setOrderStatus({
          orderShow: true,
          status: res.data.message,
          message: `Seu pedido foi realizado com sucesso.
                  Obrigado!`,
        });

        timeout();
      }

      if (res.data.message === "fail") {
        setOrderStatus({
          orderShow: true,
          status: res.data.message,
          message: `Houve algum problema.
                  Tente novamente!`,
        });

        timeout();
      }
    } else {
      setFormFillStatus({
        status: true,
        message: "Preencha todos os campos corretamente.",
      });
    }
  };

  return (
    <>
      <MainHead title={"FitFood - Escolha sua refeição"} />
      <main className={`min-h-screen`}>
        <section>
          <div className="container mx-auto px-10 pt-8">
            <p className=" text-gray-700 font-semibold md:uppercase text-xs mb-3">
              Filtrar por:
            </p>
            {allData.filterOptions && (
              <nav>
                <div className="hidden md:flex md:items-center md:gap-12">
                  <ul className=" flex flex-wrap gap-8">
                    {allData.filterOptions.map((item) => (
                      <li
                        key={item.value}
                        onClick={filter}
                        className={`md:text-sm lg:text-base cursor-pointer border-b-2 ${
                          filterMenu === item.value
                            ? " border-greenPrimary font-bold text-greenPrimary"
                            : " border-transparent font-normal"
                        }`}
                      >
                        {item.value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <select
                    className="text-xs bg-transparent md:hidden w-full text-gray-700 py-3 px-4 rounded  border-b-2 border-gray-500 shadow-lg focus:outline-none"
                    id="grid-state"
                    name="quantity"
                    onChange={filter}
                  >
                    {allData.filterOptions.map((item) => (
                      <option key={item.value} onClick={filter}>
                        {item.value}
                      </option>
                    ))}
                  </select>
                </div>
              </nav>
            )}
            {!allData.revenues && (
              <div className=" text-center mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
                <p className=" text-sm mt-2">Aguarde</p>
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden mt-8">
              {menu &&
                menu.map((item) => (
                  <figure
                    key={item.code}
                    className="bg-white rounded-lg shadow-xl relative"
                  >
                    <div className="px-6 pt-6 pb-12">
                      <div className="flex ">
                        <div className=" pr-12">
                          <p className=" text-gray-700 font-semibold text-xs md:text-sm">
                            Código
                          </p>
                          <p className=" text-gray-600 text-xs md:text-sm">
                            {item.code}
                          </p>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 font-semibold text-xs md:text-sm">
                            {item.name}
                          </p>
                          <p className=" text-lg md:text-xl text-yellowPrimary font-bold">
                            {item.price}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <h6 className="text-xs md:text-sm font-semibold text-gray-700">
                          Descrição:
                        </h6>
                        <p className=" text-xs md:text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={orderRequest}
                      value={item.code}
                      className=" w-full mx-auto bg-greenPrimary text-white rounded-b-lg py-2 text-sm md:text-xs md:uppercase absolute bottom-0 left-0"
                    >
                      Fazer Pedido
                    </button>
                  </figure>
                ))}
            </div>
          </div>

          {/* Seção de solicitação do pedido */}
          {!currentPlate && <p>Carregando...</p>}
          {currentPlate && (
            <div
              className={`fixed top-0 left-0 z-10 bg-black/80 w-full h-full 
            ${order ? "" : "hidden"}`}
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
          )}
        </section>
      </main>
    </>
  );
}
