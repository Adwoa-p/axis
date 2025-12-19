import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline"
import { faqs } from "."
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function Desktop (){
    return (
        <div>
            <p className="text-xl mx-auto max-w-3xl line-clamp-4 text-center font-semibold text-primary flex flex-row justify-center gap-5"> <QuestionMarkCircleIcon  className="size-6"/> <p> Frequently Asked Questions</p> </p>
            <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center py-5">Everything you need to know about  <br /> Axis Learning Platform. </h1>
            <Accordion 
                type="single"
                collapsible
                className="w-full"
                defaultValue="Questions"
            >
            {
                faqs.map((faq) => {
                return (<>
                <AccordionItem value={faq.question}>
                    <AccordionTrigger> {faq.question} </AccordionTrigger>
                    <AccordionContent className="text-balance">
                        <p> {faq.answer} </p>
                    </AccordionContent>
                </AccordionItem>
                </>)
                })
            }
            </Accordion>
        </div>
    )
}