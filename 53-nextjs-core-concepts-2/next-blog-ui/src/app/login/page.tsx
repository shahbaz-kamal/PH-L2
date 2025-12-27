"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { z } from "zod";

import GithubLogin from "@/components/modules/auth/GithubLogin";
import GoogleLogin from "@/components/modules/auth/GoogleLogin";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { loginSchema } from "@/lib/validators/auth";
import { login } from "@/actions/auth";
import { toast } from "sonner";

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    console.log(values);
    const toastId = toast.loading("Logging In");
    try {
      const result = await login(values);

      if (result.success) {
        toast.success("Login Successfull", { id: toastId });
      }
    } catch (error) {
      toast.error("Login Failed", { id: toastId });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-6">
      <h1 className="text-2xl font-semibold text-center">Login</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>

      <Separator />

      <div className="space-y-2">
        <GoogleLogin></GoogleLogin>
        <GithubLogin></GithubLogin>
      </div>

      <p className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
