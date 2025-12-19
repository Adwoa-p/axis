import { NavLink } from "react-router"
import { Button } from "../ui"

export function Desktop (){
    return (
        <div >
            <h1 className="text-4xl font-semibold line-clamp-2 mx-auto max-w-3xl text-center p-5"> Join the Axis Community </h1>
            <p className="text-lg mx-auto max-w-3xl line-clamp-4 text-center">
              Take the next step: Become an instructor or enroll as a learner today 👇!
            </p>
            <div className="flex gap-10 items-center justify-center py-10">
                <NavLink to="/signup/learner"><Button className="active:translate-1"> Sign Up as Learner </Button></NavLink>
                <p className="font-bold text-lg text-neutral-600">OR</p>
                <NavLink  to="/signup/instructor"><Button variant="secondary" className="active:translate-1"> Sign Up as Instructor</Button></NavLink>
            </div>
        </div>
    )
}