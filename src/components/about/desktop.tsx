import { valueCards } from "."
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Desktop (){
    return (
        <div>
            <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center p-5">Created to adapt <br /> to your learning and teaching style</h1>
            <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center">
            Get Access to hundreds of different Courses, taught by <br /> experienced and globally trusted Instructors
            </p>
            <div className="grid grid-cols-4 gap-5 px-50 py-10">
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