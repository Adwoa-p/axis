"use client"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../ui/form";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import type { SubmitHandler, UseFormReturn } from "react-hook-form";
import { signUpFormSchema } from "../formSchema";
import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";

type FormValues = z.infer<typeof signUpFormSchema>;

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
        <Toaster position="top-right" richColors />
        <div className="flex-1 p-5 bg-[url('/instructor.jpg')] bg-cover h-full">

        </div>
        <div className="flex-1 p-5 bg-primary-foreground flex justify-center items-center max-w-250">
            <div className="w-sm">
                <div className="flex flex-col pb-5 text-center">
                    <h1 className="text-2xl font-bold">Create An Account</h1>
                </div>
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Nancy" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                        
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Drew" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>   
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="otherNames"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Other Names</FormLabel>
                        <FormControl>
                            <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>   
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="nancydrew@gmail.com" {...field} />
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
                            <Input type="password" placeholder="*******" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>   
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="id"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Ghana Card</FormLabel>
                        <FormControl>
                            <Input type="file" onChange={(e) => {field.onChange(e.target.files)}}/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>   
                    )}
                    />
                    <p className="text-sm"><input type="checkbox" name="t&cs"/> I accept the <span className="text-primary font-semibold text-sm">Terms of Service</span> & <span className="text-primary font-semibold  text-sm">Privacy Policy</span></p> 
                    <Button type="submit" className="w-full">Submit</Button>
                    <p>Already have an account? <a href="/login/instructor" className="hover:underline text-[#ff5f1f]">Login</a></p>
                </form>
                </Form>
            </div>
        </div>
    </div>
  )
}

