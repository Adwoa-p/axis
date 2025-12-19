import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../../ui/form";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { type SubmitHandler, type UseFormReturn } from "react-hook-form";
import { logInFormSchema } from "../formSchema";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

type FormValues = z.infer<typeof logInFormSchema>;

type Props = {
  form: UseFormReturn<FormValues>;
  onSubmit: SubmitHandler<FormValues>;
};

export function Desktop({form, onSubmit}:Props) {
  const { reset, formState: { isSubmitSuccessful } } = form;

  useEffect(() => {
    if (isSubmitSuccessful) {
    console.log("reset done")
      reset();
    }
  }, [isSubmitSuccessful, reset]);
 
 
  return (
    <div className="flex flex-row h-screen">
        <div className="flex-1 p-5 bg-[url('/instructor.jpg')] bg-cover">

        </div>
        <div className="flex-1 flex justify-center items-center">
            <Toaster position="top-right" richColors />
            <div className="w-sm">
                <div className="flex flex-col pb-5 text-center">
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-lg">Login to View Updates</p>
                </div>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Nancy Drew" {...field} />
                        </FormControl>
                        <FormDescription>
                            This is your public display name.
                        </FormDescription>
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
                            <Input type="password" placeholder="********" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>   
                    )}
                    />
                    <Button type="submit" className="w-full" >Submit</Button>
                    <p>Don't have an account? <a href="/signup/instructor" className="hover:underline text-[#ff5f1f]">Signup</a></p>
                </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

