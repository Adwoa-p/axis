"use client"
import { Desktop, Mobile } from "."
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { logInFormSchema } from "../formSchema"
import { toast } from "sonner"
 
export function LogInLearner (){
    // 1. Define your form.
  const form = useForm<z.infer<typeof logInFormSchema>>({
    resolver: zodResolver(logInFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof logInFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast("Learner has been logged in succesfully")
    console.log(values)
  }

    return (
        <div>
            <div className="hidden lg:block">
                <Desktop form={form} onSubmit={onSubmit} />
            </div>
            <div className="lg:hidden block">
                <Mobile form={form} onSubmit={onSubmit} />
            </div>
        </div>          
       
    )
}
