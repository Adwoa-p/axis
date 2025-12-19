import { targetAudiences } from "."
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Desktop (){
    return (
        <div>
            <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center font-semibold text-primary"> OUR AUDIENCE </p>
            <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center pt-3">Specially designed for <br /> learners and instructors </h1>
            <div className="grid grid-cols-2 gap-10 px-50 py-10">
            {
                targetAudiences.map((audience) => {
                const Icon = audience.iconName
                return (<Card className="h-80 w-130">
                    <CardHeader className="pt-6">
                    <Icon className="size-15 text-primary"/>
                    <CardTitle className="font-bold text-2xl">{audience.role}</CardTitle>
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