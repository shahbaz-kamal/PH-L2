import app from "./app";
import { connectDB } from "./app/utils/clientDB";

const port: number = 5000;

const bootstrap = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`✅ Todo server is running on port ${port}`);
    console.log(`✅ Connected to MONGODB`);
  });
};
bootstrap();
