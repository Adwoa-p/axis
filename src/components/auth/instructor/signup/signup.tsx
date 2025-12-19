"use client"
import { Desktop, Mobile } from "."
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signUpFormSchema } from "../formSchema"
import { toast } from "sonner"
 
export function SignUpInstructor(){
    // 1. Define your form.
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      firstName: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast ("Instructor has been created succesfully")
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
