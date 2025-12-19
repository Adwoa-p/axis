import { valueCards } from "."
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Mobile (){
    return (
        <div>
            <h1 className="text-2xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center p-5">Created to adapt to your <br />  learning and teaching style</h1>
            <p className="text-sm mx-auto max-w-3xl line-clamp-3 text-center px-2">
            Get Access to hundreds of different <br /> Courses, taught by experienced <br /> and globally trusted Instructors
            </p>
            <div className="grid grid-cols-1 gap-5 px-5 py-10">
            {
                valueCards.map((value) => {
                const Icon = value.iconName
                return (<Card>
                    <CardHeader>
                    <Icon className="size-6 text-primary"/>
                    <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p>{value.description}</p>
                    </CardContent>
                </Card>
                )})
            }
            </div>
        </div>
    )
}