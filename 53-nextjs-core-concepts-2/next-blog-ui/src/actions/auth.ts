"use server";

import { envVars } from "@/config/env";

import { ILogin, IRegister } from "@/types";

export const register = async (data: IRegister) => {
  const res = await fetch(`${envVars.BASE_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) {
    return {
      success: false,
      message: result?.message || "Registration failed",
      result,
    };
  }
  return {
    success: true,
    data: result,
  };
};

export const login = async (data: ILogin) => {
  const res = await fetch(`${envVars.BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();
  if (!res.ok) {
    return {
      success: false,
      message: result?.message || "Login failed",
      result,
    };
  }
  return {
    success: true,
    data: result,
  };
};
