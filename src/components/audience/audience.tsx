import { Desktop, Mobile } from "."
export function Audience(){
    return (
      <section className="bg-white min-h-screen pt-20" id="audience">
            <div className="hidden lg:block">
                <Desktop />
            </div>
            <div className="lg:hidden block">
                <Mobile />
            </div>            
        </section>
    )
}