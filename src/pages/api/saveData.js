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

const saveData = async (sheet, data) => {
  const doc = await conn();
  const currentSheet = doc.sheetsByTitle[sheet];
  await currentSheet.addRow(data);
};

export default async function handler(req, res) {
  try {
    const date = new Date();
    const currentDate = date.toLocaleString("pt-BR").split(",").join("");
    const data = req.body;
    data.date = currentDate;
    data.total = parseFloat(data.quantity) * parseFloat(data.price);
    data.price = data.price.split(".").join(",");

    await saveData("Pedidos", data);

    return res.status(200).json({ message: "success" });
  } catch (e) {
    return res.status(400).json({ message: "fail" });
  }
}
