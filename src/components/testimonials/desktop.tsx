import { testimonials } from "."
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { QuoteIcon} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export function Desktop (){
    return (
        <div>
            <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center">Hear about our credibility<br /> from our trusted customers </h1>
            <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center pt-2">
            We are here to deliver to you nothing but the best service
            </p>
            <div className="grid grid-cols-3 gap-5 px-50 py-10">
            {
                testimonials.map((testimonial) => (
                <Card className="h-100 ">
                    <CardHeader className="pt-5">
                    <QuoteIcon className="size-15 text-primary"/>
                    </CardHeader>
                    <CardContent  className="font-semi-bold text-lg flex flex-col gap-5">
                    <p>{testimonial.quote}</p>
                    <div className="flex gap-5">
                        <Avatar>
                            <AvatarImage src={testimonial.image} className=""/>
                            <AvatarFallback>{testimonial.name}</AvatarFallback>
                        </Avatar>
                        {/* <img src= alt="" className="w-11 h-11 rounded-4xl my-1"/> */}
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