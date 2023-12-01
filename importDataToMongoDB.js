import fs from "fs";
import { reportModel } from "./models/dashboardModel.js";

export const importDataToMongoDB = async () => {
  try {
    const data = JSON.parse(fs.readFileSync("./jsondata.json", "utf-8"));
    console.log(data);

    await reportModel.create(data);
    console.log("Data successfully imported.");
    // to exit the process
    process.exit();
  } catch (error) {
    console.log("error", error);
  }
};
