import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
const GoogleLogin = () => {
  const handleLogin = async () => {
    console.log("Google login");
    signIn('google',{
        callbackUrl:'/dashboard'
    });
  };

  return (
    <div>
      <Button onClick={handleLogin} variant="outline" className="w-full">
        <FcGoogle /> Login with Google
      </Button>
    </div>
  );
};

export default GoogleLogin;
