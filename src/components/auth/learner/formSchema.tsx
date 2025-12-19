import { z } from "zod"

export const logInFormSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export const signUpFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "Username must be at least 5 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Username must be at least 5 characters.",
  }),
  otherNames: z.string().min(2, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})