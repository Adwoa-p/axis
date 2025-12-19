"use client"
import { Desktop, Mobile } from "."
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { logInFormSchema } from "../formSchema"
import { toast } from "sonner"

 
export function LogInInstructor(){
  // Form definition
  const form = useForm<z.infer<typeof logInFormSchema>>({
    resolver: zodResolver(logInFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

 
  // Form submission handler
  function onSubmit(values: z.infer<typeof logInFormSchema>) {
    toast("User succesfully  logged in");
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
