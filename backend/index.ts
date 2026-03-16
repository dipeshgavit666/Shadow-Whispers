import app from "./src/app";
import { connectDB } from "./src/config/database";

connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("Server is up and running on port: ", PORT);
  });
});
