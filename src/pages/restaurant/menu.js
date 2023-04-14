import MainHead from "components/Head";
import { useState, useEffect } from "react";
import axios from "axios";
import useSWR from "swr";
import OpenNewOrder from "components/Menu/order";
import Filter from "components/Menu/filter";
import Loading from "components/Menu/Loading";
import ModelMenu from "components/Menu/modelMenu";

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
              <Filter
                allData={allData}
                filter={filter}
                filterMenu={filterMenu}
              />
            )}
            {!allData.revenues && <Loading />}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden mt-8">
              {menu &&
                menu.map((item) => (
                  <ModelMenu item={item} orderRequest={orderRequest} />
                ))}
            </div>
          </div>
          {!currentPlate && <p>Carregando...</p>}
          {currentPlate && (
            // Verificar porque está arredondando o valor
            <OpenNewOrder
              order={order}
              orderStatus={orderStatus}
              orderRequest={orderRequest}
              formFillStatus={formFillStatus}
              currentPlate={currentPlate}
              inserValues={inserValues}
              sendValues={sendValues}
            />
          )}
        </section>
      </main>
    </>
  );
}
