import { targetAudiences } from "."
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Mobile (){
    return (
            <div>
                <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center font-semibold text-primary"> OUR AUDIENCE </p>
                <h1 className="text-2xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center pt-2">Specially designed for <br /> learners and instructors </h1>
                <div className="grid grid-cols-1 gap-7 px-10 py-10">
                {
                    targetAudiences.map((audience) => {
                    const Icon = audience.iconName
                    return (<Card className="h-85 ">
                        <CardHeader className="pt-5">
                        <Icon className="size-15 text-primary"/>
                        <CardTitle className="font-bold text-xl">{audience.role}</CardTitle>
                        </CardHeader>
                        <CardContent  className="font-semi-bold text-lg">
                        {audience.description}
                        </CardContent>
                    </Card>)
                    })
                }
                </div>
            </div>
        )
}