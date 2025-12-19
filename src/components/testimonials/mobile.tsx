import { testimonials } from "."
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export function Mobile(){
    return (
        <div>
            <h1 className="text-2xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center px-10">Hear about our credibility from our trusted customers </h1>
            <p className="text-sm mx-auto max-w-3xl line-clamp-4 text-center pt-2">
            We are here to deliver to you nothing but the best service
            </p>
            <div className="grid grid-cols-1 gap-7 py-10 px-8">
            {
                testimonials.map((testimonial) => (
                <Card className="h-100">
                    <CardHeader className="pt-2">
                    <QuoteIcon className="size-10 text-secondary"/>
                    </CardHeader>
                    <CardContent  className="font-semi-bold text-lg flex flex-col gap-5">
                    <p>{testimonial.quote}</p>
                    <div className="flex gap-5">
                        <div className="bg-primary w-10 h-10 rounded-4xl my-1"></div>
                        <div className="flex flex-col gap-1">
                        <p className="text-sm">{testimonial.name}</p>
                        <p className="text-sm">{testimonial.role}</p>
                        </div>
                        
                    </div>
                    </CardContent>
                </Card>
                ))
            }
            </div>
        </div>
    )
}