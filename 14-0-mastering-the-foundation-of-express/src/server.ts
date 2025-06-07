import app from "./app";
const port: number = 5000;

const bootstrap = async () => {
  const server = app.listen(port, () => {
    console.log(`✅ Todo server is running on port ${port}`);
  });
};
bootstrap();
