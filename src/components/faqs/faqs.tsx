import { Desktop, Mobile } from "."
export function Faqs(){
    return (
        <section className="bg-white min-h-screen pt-20" id="faqs">
            <div className="hidden lg:block">
                <Desktop />
            </div>
            <div className="lg:hidden block">
                <Mobile />
            </div>            
        </section>
    )
}