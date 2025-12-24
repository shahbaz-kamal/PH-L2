interface EnvVars {
  BASE_URL: string;
}

const loadEnvironmentVariables = (): EnvVars => {
  const requiredVariables: string[] = ["NEXT_PUBLIC_BASE_API"];

  requiredVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environments variable: ${key}`);
    }
  });
  return {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_API as string,
  };
};

export const envVars: EnvVars = loadEnvironmentVariables();
