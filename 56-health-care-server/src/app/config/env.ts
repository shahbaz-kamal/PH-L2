import dotenv from "dotenv";
dotenv.config();

interface EnvVars {
  NODE_ENV: string;
  PORT: string;
  DATABASE_URL: string;
  BCRYPT_SALT_ROUND: string;
}

const loadEnvironmentVariables = (): EnvVars => {
  const requiredVariables: string[] = [
    "NODE_ENV",
    "PORT",
    "DATABASE_URL",
    "BCRYPT_SALT_ROUND",
  ];

  requiredVariables.forEach((key) => {
    if (!process.env[key])
      throw new Error(`Missing Environment variable: ${key}`);
  });
  return {
    NODE_ENV: process.env.NODE_ENV as string,
    PORT: process.env.PORT as string,
    DATABASE_URL: process.env.PORT as string,
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
  };
};

export const envVars: EnvVars = loadEnvironmentVariables();
