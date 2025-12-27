interface EnvVars {
  BASE_URL: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_CLIENT_ID: string;
  AUTH_SECRET:string
}

const loadEnvironmentVariables = (): EnvVars => {
  const requiredVariables: string[] = [
    "NEXT_PUBLIC_BASE_API",
    "GOOGLE_CLIENT_ID",
    "GOOGLE_CLIENT_SECRET",
    "AUTH_SECRET"
  ];

  requiredVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environments variable: ${key}`);
    }
  });
  return {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_API as string,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET as string,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,
    AUTH_SECRET:process.env.AUTH_SECRET as string
  };
};

export const envVars: EnvVars = loadEnvironmentVariables();
