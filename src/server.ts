import dotenv from "dotenv";
import { createServer } from "./helpers";
dotenv.config();
const { app } = createServer();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
