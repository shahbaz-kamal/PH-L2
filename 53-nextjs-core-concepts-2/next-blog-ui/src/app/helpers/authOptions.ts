import { envVars } from "@/config/env";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: envVars.GOOGLE_CLIENT_ID as string,
      clientSecret: envVars.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: envVars.AUTH_SECRET,
  pages:{
    signIn:'/login'
  }
};
