import { GoogleSpreadsheet } from "google-spreadsheet";

const conn = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_NUMBER);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  });

  await doc.loadInfo();

  return doc;
};

const getData = async (sheet) => {
  const doc = await conn();
  const currentSheet = doc.sheetsByTitle[sheet];
  const sheetRows = await currentSheet.getRows();

  const typePlate = (row) => {
    return {
      status: row.Status,
      code: row.Codigo,
      type: row.Tipo,
      name: row.Nome,
      price: row.Preco,
      description: row.Descricao,
      offer: row.Promocao,
    };
  };

  const typeMenu = (row) => {
    return {
      status: row.Status,
      value: row.Menu,
    };
  };

  if (sheet === "Pratos") {
    const data = sheetRows
      .filter((row) => row.Status == "Verdadeiro")
      .map((row) => {
        return typePlate(row);
      });

    return data;
  }

  if (sheet === "Menu") {
    const data = sheetRows
      .filter((row) => row.Status == "Verdadeiro")
      .map((row) => {
        return typeMenu(row);
      });

    return data;
  }
};

export default async (req, res) => {
  try {
    const revenues = await getData("Pratos");
    const filterOptions = await getData("Menu");

    res.end(
      JSON.stringify({
        revenues,
        filterOptions,
      })
    );
  } catch (err) {
    res.end(
      JSON.stringify({
        status: "fail",
      })
    );
  }
};
