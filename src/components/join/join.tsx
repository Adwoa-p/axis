import { Desktop, Mobile } from "."
export function Join(){
    return (
        <section className="bg-white min-h-screen pt-20" id="join">
            <div className="hidden lg:block">
                <Desktop />
            </div>
            <div className="lg:hidden block">
                <Mobile />
            </div>            
        </section>
    )
}